# GraphQL Contatos - Instruções de Uso

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

```graphql
# Criar novo contato
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

# Atualizar contato
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

# Deletar contato
mutation {
  deletarContato(id: 1)
}
```

## Problemas Resolvidos

✅ **CORS Error** - Servidor configurado para aceitar requisições do React  
✅ **Apollo Client Error** - Usando HttpLink corretamente  
✅ **Servidor GraphQL** - Criado com Apollo Server 2 compatível com o projeto
