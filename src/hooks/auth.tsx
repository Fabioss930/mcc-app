/* eslint-disable react-refresh/only-export-components */
import { createContext, useContext, useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import { v4 as uuidv4 } from "uuid";

interface SignInCredentials {
  email: string;
  password: string;
}

interface UserType {
  id?: string;
  name: string;
  email: string;
  password: string;
}

interface AuthContextState {
  user: UserType[];
  token: string;
  signUp(credentials: UserType): void;
  signIn(credendial: SignInCredentials): string | number;
  signOut(): void;
}

const AuthContext = createContext<AuthContextState>({} as AuthContextState);

export default function AuthProvider({
  children,
}: {
  children: React.ReactNode;
}) {
  const [dataUser, setDataUser] = useState<UserType[]>({} as UserType[]);
  const [token, setToken] = useState<string>("");
  const navigate = useNavigate();

  // Logar no sistema.
  function signIn({ email, password }: SignInCredentials) {
    const userDta = localStorage.getItem("user_mcc");
    const token = btoa(`${email}:${password}`);
    localStorage.setItem("user_mcc_token", token);

    const user: SignInCredentials = userDta ? JSON.parse(userDta) : null;
    if (user) {
      if (user.email === email && user.password === password) {
        return 200;
      } else {
        return "Usuário ou Senha icorretas";
      }
    } else {
      return "Ocorreu um erro ao fazer o login, tente novamente!";
    }
  }

  //Cadastrar conta
  function signUp({ name, email, password }: UserType) {
    const uuid = uuidv4();
    const userDta = {
      id: uuid,
      name: name,
      email: email,
      password: password,
    };

    const user = JSON.stringify(userDta);
    const token = btoa(`${email}:${password}`);
    localStorage.setItem("user_mcc", user);
    localStorage.setItem("user_mcc_token", token);

    setDataUser([userDta]);
  }

  function signOut() {
    localStorage.removeItem("user_mcc_token");
    setDataUser([]);
    navigate("/");
  }

  useEffect(() => {
    const token = localStorage.getItem("user_mcc_token");

    if (token) {
      setToken(token);
    }
  }, []);
  return (
    <AuthContext.Provider
      value={{ signUp, signIn, user: dataUser, signOut, token: token }}
    >
      {children}
    </AuthContext.Provider>
  );
}

export const useAuth = () => useContext(AuthContext);
