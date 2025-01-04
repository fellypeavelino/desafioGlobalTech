# Pessoa Application

Este projeto exemplifica uma aplicação CRUD utilizando Angular no frontend e Spring Boot no backend, com integração entre os dois através de uma API RESTful.

## Tecnologias Utilizadas

### Frontend
- **Angular**: Framework para criação de interfaces web reativas.
- **Bootstrap**: Biblioteca CSS para estilização responsiva e componentes pré-definidos.
- **TypeScript**: Linguagem principal para desenvolvimento no Angular.

### Backend
- **Spring Boot**: Framework Java para criação de aplicações back-end.
- **H2 Database**: Banco de dados em memória para testes rápidos.
- **Maven**: Ferramenta de gerenciamento de dependências e build.

## Endpoints da API

### Pessoa Controller

1. **Listar Todas as Pessoas**
   - **URL**: `/listar-todos`
   - **Método HTTP**: `GET`
   - **Descrição**: Retorna uma lista com todas as pessoas cadastradas.
   - **Exemplo de Resposta**:
     ```json
     [
       {
         "id": 1,
         "nome": "João Silva",
         "dataNascimento": "1990-01-01",
         "cpf": "12345678901",
         "sexo": "MASCULINO",
         "altura": 1.75,
         "peso": 70.5
       },
       {
         "id": 2,
         "nome": "Maria Oliveira",
         "dataNascimento": "1985-05-10",
         "cpf": "98765432100",
         "sexo": "FEMININO",
         "altura": 1.68,
         "peso": 65.3
       }
     ]
     ```

2. **Criar Pessoa**
   - **URL**: `/criar`
   - **Método HTTP**: `POST`
   - **Descrição**: Cria uma nova pessoa no banco de dados.
   - **Corpo da Requisição**:
     ```json
     {
       "nome": "João Silva",
       "dataNascimento": "1990-01-01",
       "cpf": "12345678901",
       "sexo": "MASCULINO",
       "altura": 1.75,
       "peso": 70.5
     }
     ```
   - **Exemplo de Resposta**:
     ```json
     {
       "id": 1,
       "nome": "João Silva",
       "dataNascimento": "1990-01-01",
       "cpf": "12345678901",
       "sexo": "MASCULINO",
       "altura": 1.75,
       "peso": 70.5
     }
     ```

3. **Atualizar Pessoa**
   - **URL**: `/atualizar/{id}`
   - **Método HTTP**: `PUT`
   - **Descrição**: Atualiza os dados de uma pessoa existente.
   - **Parâmetro de URL**:
     - `id`: ID da pessoa a ser atualizada.
   - **Corpo da Requisição**:
     ```json
     {
       "nome": "João Silva Atualizado",
       "dataNascimento": "1990-01-01",
       "cpf": "12345678901",
       "sexo": "MASCULINO",
       "altura": 1.75,
       "peso": 72.0
     }
     ```

4. **Excluir Pessoa**
   - **URL**: `/excluir/{id}`
   - **Método HTTP**: `DELETE`
   - **Descrição**: Remove uma pessoa do banco de dados.
   - **Parâmetro de URL**:
     - `id`: ID da pessoa a ser excluída.

5. **Calcular Peso Ideal**
   - **URL**: `/calcular-peso-ideal/{id}`
   - **Método HTTP**: `GET`
   - **Descrição**: Calcula o peso ideal de uma pessoa com base na altura e sexo.
   - **Parâmetro de URL**:
     - `id`: ID da pessoa.
   - **Exemplo de Resposta**:
     ```json
     {
       "id": 1,
       "pesoIdeal": 75.5
     }
     ```

## Configuração do Proxy no Angular

O Angular está configurado para redirecionar as requisições para o servidor backend. No arquivo `proxy.conf.json`:

```json
{
  "/api": {
    "target": "http://localhost:8080",
    "secure": false,
    "logLevel": "debug",
    "pathRewrite": {
      "^/api": ""
    }
  }
}
