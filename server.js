const { ApolloServer, gql } = require("apollo-server");

// Dados em memória
let contatos = [
  {
    id: 1,
    nome: "João Silva",
    email: "joao@email.com",
    telefone: "(11) 98765-4321",
  },
  {
    id: 2,
    nome: "Maria Santos",
    email: "maria@email.com",
    telefone: "(11) 91234-5678",
  },
];

// Schema GraphQL
const typeDefs = gql`
  type Contato {
    id: Int!
    nome: String!
    email: String!
    telefone: String!
  }

  type Query {
    contatos: [Contato!]!
    contato(id: Int!): Contato
  }

  input ContatoInput {
    nome: String!
    email: String!
    telefone: String!
  }

  type Mutation {
    criarContato(data: ContatoInput!): Contato!
    atualizarContato(id: Int!, data: ContatoInput!): Contato!
    deletarContato(id: Int!): Boolean!
  }
`;

// Resolvers
const resolvers = {
  Query: {
    contatos: () => contatos,
    contato: (_, { id }) => contatos.find((c) => c.id === id),
  },
  Mutation: {
    criarContato: (_, { data }) => {
      const novoContato = {
        id:
          contatos.length > 0 ? Math.max(...contatos.map((c) => c.id)) + 1 : 1,
        ...data,
      };
      contatos.push(novoContato);
      return novoContato;
    },
    atualizarContato: (_, { id, data }) => {
      const index = contatos.findIndex((c) => c.id === id);
      if (index === -1) throw new Error("Contato não encontrado");
      contatos[index] = { id, ...data };
      return contatos[index];
    },
    deletarContato: (_, { id }) => {
      const index = contatos.findIndex((c) => c.id === id);
      if (index === -1) return false;
      contatos.splice(index, 1);
      return true;
    },
  },
};

// Criar servidor
const server = new ApolloServer({
  typeDefs,
  resolvers,
  cors: {
    origin: "*", // Permitir todas as origens (para desenvolvimento)
    credentials: true,
  },
});

// Iniciar servidor
server.listen({ port: 4000 }).then(({ url }) => {
  console.log(`🚀 Servidor GraphQL rodando em ${url}`);
});
