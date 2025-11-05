const { gql, ApolloServer } = require('apollo-server');

const typeDefs = gql`
type Query {
        idade: Int
        salario: Float
        nome: String
        ativo: Boolean
        id: ID
        tecnologias: [String!]!
    }
`;

const resolvers = {
    Query: {
        idade() {
            return 18;
        },
        salario() {
            return 1500.50;
        },
        nome() {
            return "GraphQL";
        },
        ativo() {
            return true;
        },
        id() {
            return "123456";
        },
        tecnologias() {
            return ["JavaScript", "GraphQL", "Apollo", "Node.js"];
        }
    }
};

const server = new ApolloServer({
    typeDefs,
    resolvers
});

server.listen();