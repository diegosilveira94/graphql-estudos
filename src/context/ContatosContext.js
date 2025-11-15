import React, { useContext } from "react";
import { useQuery, useMutation } from "@apollo/client";
import { ADD_CONTATO, GET_CONTATOS } from "../graphql";

const MyContext = React.createContext();

export default function ContatosContextProvider({ children }) {
  const { data, loading, refetch } = useQuery(GET_CONTATOS);
  const [criarContato] = useMutation(ADD_CONTATO);
  return (
    <MyContext.Provider
      value={{
        contatos: {
          itens: data ? data.contatos : [],
          loading,
          criarContato,
          refetch,
        },
      }}
    >
      {children}
    </MyContext.Provider>
  );
}

export function useContatosContext() {
  return useContext(MyContext);
}
