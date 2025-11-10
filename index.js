const { ApolloServer } = require("apollo-server");
const graphql = require("./src/graphql");
// Refatoração do código com estruturação das pastas separadas dos types e resolvers
const server = new ApolloServer({
  ...graphql,
});

server.listen().then(({ url }) => console.log(url));
