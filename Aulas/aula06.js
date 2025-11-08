const { gql, ApolloServer } = require('apollo-server');

const produtos = [
    {
        id: '1',
        nome: 'Notebook',
        preco: 2500.00
    },
    {
        id: '2',
        nome: 'Smartphone',
        preco: 1500.00
    }
];

const usuarios = [
    {
        id: '1',
        nome: 'João Silva',
        salario: 3500.75,
        idade: 28,
        ativo: true
    },
    {
        id: '2',
        nome: 'Maria Oliveira',
        salario: 4200.00,
        idade: 34,
        ativo: false
    }
];

const typeDefs = gql`
	
    type Produto {
        id: ID
        nome: String
        preco: Float
    }

	type Usuario {
		idade: Int
		salario: Float
		nome: String
		ativo: Boolean
		id: ID
	}
	
	type Query {
		usuarios: [Usuario]
        produtos: [Produto]
	}
`;

const resolvers = {
    Query: {
        usuarios: () => {
            return usuarios;
        },
        produtos: () => {
            return produtos;
        }
    }
};

const server = new ApolloServer({
    typeDefs,
    resolvers
});

server.listen();