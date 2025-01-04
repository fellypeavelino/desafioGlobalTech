import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Observable } from 'rxjs';
import { Pessoa } from './pessoa.model';

@Injectable({
  providedIn: 'root'
})
export class PessoaService {
  private apiUrl = '/api/pessoas'; // URL do backend

  // Método para obter o token (substitua pelo seu mecanismo de autenticação real)
  private getAuthorizationToken(): string {
    return 'globalTech'; // Substitua pelo token real
  }

  // Configurar os cabeçalhos com o Authorization
  private getHeaders(): HttpHeaders {
    return new HttpHeaders({
      'Content-Type': 'application/json',
      Authorization: `Bearer ${this.getAuthorizationToken()}`,
    });
  }

  constructor(private http: HttpClient) { }

  /**
   * Lista todas as pessoas.
   * @returns Observable com a lista de pessoas.
   */
  listarPessoas(): Observable<Pessoa[]> {
    return this.http.get<Pessoa[]>(`${this.apiUrl}/listar-todos`, {
      headers: this.getHeaders(),
    });
  }

  /**
   * Salva uma nova pessoa.
   * @param pessoa Objeto Pessoa a ser salvo.
   * @returns Observable com a pessoa criada.
   */
  salvarPessoa(pessoa: Pessoa): Observable<Pessoa> {
    return this.http.post<Pessoa>(this.apiUrl, pessoa, {
      headers: this.getHeaders(),
    });
  }

  /**
   * Atualiza uma pessoa existente.
   * @param pessoa Objeto Pessoa atualizado.
   * @returns Observable com a pessoa atualizada.
   */
  atualizarPessoa(pessoa: Pessoa): Observable<Pessoa> {
    return this.http.put<Pessoa>(`${this.apiUrl}/${pessoa.id}`, pessoa, {
      headers: this.getHeaders(),
    });
  }

  /**
   * Deleta uma pessoa pelo ID.
   * @param id ID da pessoa a ser deletada.
   * @returns Observable sem retorno (void).
   */
  deletarPessoa(id: number): Observable<void> {
    return this.http.delete<void>(`${this.apiUrl}/${id}`, {
      headers: this.getHeaders(),
    });
  }

  /**
   * pesquisa uma pessoa pelo ID.
   * @param id ID da pessoa a ser pesquisada.
   * @returns Observable sem retorno (void).
   */
  procurarPessoa(id: number): Observable<Pessoa> {
    return this.http.get<Pessoa>(`${this.apiUrl}/${id}`, {
      headers: this.getHeaders(),
    });
  }

  executaCalculo(id: number) {
    return this.http.get(`${this.apiUrl}/${id}/peso-ideal`, {
      headers: this.getHeaders(),
    });
  }
}
