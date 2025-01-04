import { Component, OnInit } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import {PessoaService} from './PessoaService'
import { Pessoa } from './pessoa.model';

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

  constructor(private pessoaService: PessoaService) {}

  ngOnInit() {
    this.carrgerarDados();
  }

  carrgerarDados(){
    this.pessoaService.listarPessoas()
    .subscribe(data => {
      this.pessoas = data;
    });
  }

  incluir() {
    this.pessoaService.salvarPessoa(this.pessoa).subscribe((response) => {
      alert('Pessoa incluída com sucesso!');
      this.carrgerarDados();
    });
  }

  alterar() {
    this.pessoaService.atualizarPessoa(this.pessoa).subscribe((response) => {
      alert('Pessoa alterada com sucesso!');
      this.carrgerarDados();
    });
  }

  excluir() {
    this.pessoaService.deletarPessoa(this.pessoa.id).subscribe(() => {
      alert('Pessoa excluída com sucesso!');
      this.carrgerarDados();
    });
  }

  pesquisar() {
    this.pessoaService.procurarPessoa(this.pessoa.id).subscribe((response) => {
      this.pessoa = response;
      this.isSelected = true;
    });
  }

  calcularPesoIdeal() {
    this.pessoaService.executaCalculo(this.pessoa.id).subscribe((pesoIdeal) => {
      alert(`O peso ideal é: ${pesoIdeal}`);
      this.carrgerarDados();
    });
  }

  selecionarPessoa(pessoa: Pessoa): void {
    this.pessoaSelecionada = pessoa;
    this.pessoa = pessoa;
  }
}
