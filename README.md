# GraphQL Contatos

Estudos de GraphQL com o curso do Washington Developer -> [link](https://www.youtube.com/playlist?list=PLK5FPzMuRKlyeZYiJNA54j4lpfxHGlz0j) e documentações.

> **📚 Aulas divididas por branches:** Cada aula do curso está em uma branch separada do repositório. Para acessar uma aula específica, faça checkout da branch correspondente (ex: `aula30/adding-contacts-autoreflesh`, `aula31/removing-contacts`, `aula32/updating-contacts`).

## Como rodar o projeto

### Opção 1: Rodar servidor e cliente juntos (Recomendado)

```bash
yarn dev
```

### Opção 2: Rodar separadamente

**Terminal 1 - Servidor GraphQL:**

```bash
yarn server
```

**Terminal 2 - Aplicação React:**

```bash
yarn start
```

## Endpoints

- **Servidor GraphQL**: http://localhost:4000
- **Aplicação React**: http://localhost:3000

## Schema GraphQL

### Queries

```graphql
# Listar todos os contatos
query {
  contatos {
    id
    nome
    email
    telefone
  }
}

# Buscar um contato específico
query {
  contato(id: 1) {
    id
    nome
    email
    telefone
  }
}
```

### Mutations

#### Criar novo contato

**Formato direto:**

```graphql
mutation {
  criarContato(
    data: {
      nome: "João Silva"
      email: "joao@email.com"
      telefone: "(11) 98765-4321"
    }
  ) {
    id
    nome
    email
    telefone
  }
}
```

**Com variáveis:**

```graphql
mutation criarContato($data: ContatoInput!) {
  criarContato(data: $data) {
    id
    nome
    email
    telefone
  }
}
```

Variáveis:

```json
{
  "data": {
    "nome": "João Silva",
    "email": "joao@email.com",
    "telefone": "(11) 98765-4321"
  }
}
```

#### Atualizar contato

**Formato direto:**

```graphql
mutation {
  atualizarContato(
    id: 1
    data: {
      nome: "João Santos"
      email: "joao.santos@email.com"
      telefone: "(11) 98765-4321"
    }
  ) {
    id
    nome
    email
    telefone
  }
}
```

**Com variáveis:**

```graphql
mutation atualizarContato($id: Int!, $data: ContatoInput!) {
  atualizarContato(id: $id, data: $data) {
    id
    nome
    email
    telefone
  }
}
```

Variáveis:

```json
{
  "id": 1,
  "data": {
    "nome": "João Santos",
    "email": "joao.santos@email.com",
    "telefone": "(11) 98765-4321"
  }
}
```

#### Deletar contato

**Formato direto:**

```graphql
mutation {
  deletarContato(id: 1)
}
```

**Com variáveis:**

```graphql
mutation deletarContato($id: Int!) {
  deletarContato(id: $id)
}
```

Variáveis:

```json
{
  "id": 1
}
```
