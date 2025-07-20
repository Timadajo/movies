import { createContext, useContext, useState } from "react";

const AuthContext = createContext(); //criação do contexto de autentificação

export function AuthProvider({ children }) {
  //Agora, todo o contexto sera definido no child para ser compartilhado pelo contexto
  const [user, setUser] = useState(null);

  function login(email, senha) {
    if (email && senha) {
      //função que verifica se ambos email e senha estão preenchidos, irá aparecer o email para sinalizar que esta logado
      setUser({ email });
    }
  }

  function logout() {
    setUser(null); //se estiver deslogado, aparece nulo
  }

  const isLoggedIn = !!user; //reafirma o booleano, se estiver falso, é falso, se estiver verdadeiro, é verdadeiro

  return (
    <AuthContext.Provider value={{ user, isLoggedIn, login, logout }}>
      {children}
    </AuthContext.Provider>
  );
}

export function useAuth() {
  return useContext(AuthContext);
}
