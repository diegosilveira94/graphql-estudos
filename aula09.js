const { gql, ApolloServer } = require('apollo-server');

const db = {
    usuarios: [
        {
            id: 1,
            nome: 'Rafael',
            email: 'rafael@gmail.com',
            telefone: "(11) 99999-9999",
            perfil: 1
        },
        {
            id: 2,
            nome: 'Maria',
            email: 'maria@gmail.com',
            telefone: "(21) 98888-8888",
            perfil: 2
        },
    ],
    perfis: [
        { id: 1, descricao: 'ADMIN' },
        { id: 2, descricao: 'NORMAL' },
    ],
};


const typeDefs = gql`
	type Usuario {
		id: Int
		nome: String
		email: String
		telefone: String
        perfil: Perfil
	}

    type Perfil {
        id: Int
        descricao: String
    }
	
	type Query {
		usuario(id: Int): Usuario
        perfis: [Perfil]
	}
`;

const resolvers = {
    Usuario: {
        perfil(usuario) {

            return db.perfis.find((p) => p.id === usuario.perfil);
        },
    },
    Query: {
        usuario: (obj, args) => {  

            return db.usuarios.find((db) => db.id === args.id);
        },
        perfis() {

            return db.perfis;
        },
    }
}

const server = new ApolloServer({
    typeDefs,
    resolvers
});

server.listen();