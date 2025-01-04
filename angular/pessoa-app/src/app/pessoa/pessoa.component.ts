import { Component } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Component({
  selector: 'app-pessoa',
  templateUrl: './pessoa.component.html',
})
export class PessoaComponent {
  pessoa: any = {};
  isSelected: boolean = false;
/*
  constructor(private http: HttpClient) {}

  incluir() {
    this.http.post('/api/pessoas', this.pessoa).subscribe((response) => {
      alert('Pessoa incluída com sucesso!');
    });
  }

  alterar() {
    this.http.put(`/api/pessoas/${this.pessoa.id}`, this.pessoa).subscribe((response) => {
      alert('Pessoa alterada com sucesso!');
    });
  }

  excluir() {
    this.http.delete(`/api/pessoas/${this.pessoa.id}`).subscribe(() => {
      alert('Pessoa excluída com sucesso!');
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
    });
  }
  */
}
