const { ApolloServer } = require("apollo-server");
const graphql = require("./src/graphql");
// Refatoração do código com estruturação das pastas separadas dos types e resolvers
const server = new ApolloServer({
  ...graphql,
  formatError: (err) => {
    if (err.message.startsWith(`Usuáro Existente :`)) {
      return new Error(err.message);
    }

    return err;
  },
});

server.listen().then(({ url }) => console.log(url));
