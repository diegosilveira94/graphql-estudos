import { gql } from "@apollo/client";

export const GET_CONTATOS = gql`
  query {
    contatos {
      id
      nome
      email
      telefone
    }
  }
`;

export const ADD_CONTATO = gql`
  mutation criarContato($data: ContatoInput!) {
    criarContato(data: $data) {
      id
      nome
      email
      telefone
    }
  }
`;

export const REMOVE_CONTATO = gql`
  mutation deletarContato($id: Int!) {
    deletarContato(id: $id)
  }
`;
