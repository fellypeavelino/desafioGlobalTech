import { Component, OnInit } from '@angular/core';
import { HttpClient } from '@angular/common/http';

interface Pessoa {
  id: number;
  nome: string;
  dataNascimento: string;
  cpf: string;
  sexo: string;
  altura: number;
  peso: number;
}
@Component({
  selector: 'app-pessoa',
  templateUrl: './pessoa.component.html',
  styleUrls: ['./pessoa.component.css']
})
export class PessoaComponent implements OnInit {
  pessoa: any = {};
  isSelected: boolean = false;
  pessoas: Pessoa[] = [];
  pessoaSelecionada: Pessoa | null = null;

  constructor(private http: HttpClient) {}

  ngOnInit() {
    this.carrgerarDados();
  }

  carrgerarDados(){
    this.http.get<Pessoa[]>('/api/pessoas/listar-todos')
    .subscribe(data => {
      this.pessoas = data;
    });
  }

  incluir() {
    this.http.post('/api/pessoas', this.pessoa).subscribe((response) => {
      alert('Pessoa incluída com sucesso!');
      this.carrgerarDados();
    });
  }

  alterar() {
    this.http.put(`/api/pessoas/${this.pessoa.id}`, this.pessoa).subscribe((response) => {
      alert('Pessoa alterada com sucesso!');
      this.carrgerarDados();
    });
  }

  excluir() {
    this.http.delete(`/api/pessoas/${this.pessoa.id}`).subscribe(() => {
      alert('Pessoa excluída com sucesso!');
      this.carrgerarDados();
    });
  }

  pesquisar() {
    this.http.get(`/api/pessoas/${this.pessoa.id}`).subscribe((response) => {
      this.pessoa = response;
      this.isSelected = true;
    });
  }

  calcularPesoIdeal() {
    this.http.get(`/api/pessoas/${this.pessoa.id}/peso-ideal`).subscribe((pesoIdeal) => {
      alert(`O peso ideal é: ${pesoIdeal}`);
      this.carrgerarDados();
    });
  }

  selecionarPessoa(pessoa: Pessoa): void {
    this.pessoaSelecionada = pessoa;
    this.pessoa = pessoa;
  }
}
