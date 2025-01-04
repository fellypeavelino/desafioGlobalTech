import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { Pessoa } from './pessoa.model';

@Injectable({
  providedIn: 'root'
})
export class PessoaService {
  private apiUrl = '/api/pessoas'; // URL do backend

  constructor(private http: HttpClient) { }

  /**
   * Lista todas as pessoas.
   * @returns Observable com a lista de pessoas.
   */
  listarPessoas(): Observable<Pessoa[]> {
    return this.http.get<Pessoa[]>(`${this.apiUrl}/listar-todos`);
  }

  /**
   * Salva uma nova pessoa.
   * @param pessoa Objeto Pessoa a ser salvo.
   * @returns Observable com a pessoa criada.
   */
  salvarPessoa(pessoa: Pessoa): Observable<Pessoa> {
    return this.http.post<Pessoa>(this.apiUrl, pessoa);
  }

  /**
   * Atualiza uma pessoa existente.
   * @param pessoa Objeto Pessoa atualizado.
   * @returns Observable com a pessoa atualizada.
   */
  atualizarPessoa(pessoa: Pessoa): Observable<Pessoa> {
    return this.http.put<Pessoa>(`${this.apiUrl}/${pessoa.id}`, pessoa);
  }

  /**
   * Deleta uma pessoa pelo ID.
   * @param id ID da pessoa a ser deletada.
   * @returns Observable sem retorno (void).
   */
  deletarPessoa(id: number): Observable<void> {
    return this.http.delete<void>(`${this.apiUrl}/${id}`);
  }

  /**
   * pesquisa uma pessoa pelo ID.
   * @param id ID da pessoa a ser pesquisada.
   * @returns Observable sem retorno (void).
   */
  procurarPessoa(id: number): Observable<Pessoa> {
    return this.http.get<Pessoa>(`${this.apiUrl}/${id}`);
  }

  executaCalculo(id: number) {
    return this.http.get(`${this.apiUrl}/${id}/peso-ideal`);
  }
}
