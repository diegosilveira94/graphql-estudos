const { ApolloServer } = require("apollo-server");
const graphql = require("./src/graphql");
const usuarioCadastroService = require("./src/services/usuarioCadastroService");
// Refatoração do código com estruturação das pastas separadas dos types e resolvers
const server = new ApolloServer({
  ...graphql,
  context: () => ({
    usuarioCadastroService: usuarioCadastroService,
  }),
});

server.listen().then(({ url }) => console.log(url));
