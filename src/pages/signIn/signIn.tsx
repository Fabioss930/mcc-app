import { Link, useNavigate } from "react-router-dom";
import { AnimationContainer, Background, Container, Content } from "./styles";
import { Input } from "../../components/input";
import { User, Lock, LogIn } from "lucide-react";
import { Button } from "../../components/button";
import { zodResolver } from "@hookform/resolvers/zod";
import { z } from "zod";

import { useForm } from "react-hook-form";
import { useAuth } from "../../hooks/auth";
import { useEffect } from "react";

const formSchema = z.object({
  email: z.string().min(1, { message: "O email é obrigatório" }),
  password: z.string().min(1, { message: "A senha é obrigatória" }),
});

type formShema = z.infer<typeof formSchema>;

export default function SignIn() {
  const navigate = useNavigate();
  const { signIn } = useAuth();

  useEffect(() => {
    const token = localStorage.getItem("user_mcc_token");
    if (token) navigate("/home");
  }, []);

  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm<formShema>({
    resolver: zodResolver(formSchema),
  });

  function handleSubmitSignIn(data: formShema) {
    try {
      const response = signIn({
        email: data.email,
        password: data.password,
      });
      if (response === 200) {
        navigate("/home");
      } else {
        alert(response);
      }
    } catch (error) {
      alert(error);
    }
  }

  return (
    <Container>
      <Content>
        <AnimationContainer>
          <form onSubmit={handleSubmit(handleSubmitSignIn)}>
            <h1>Faça seu login</h1>
            <Input
              {...register("email")}
              placeholder="Usuário"
              type="text"
              icon={User}
              error={errors.email?.message}
            />

            <Input
              {...register("password")}
              placeholder="Senha"
              type="password"
              icon={Lock}
              error={errors.password?.message}
            />

            <Button type="submit" loading={false} disabled={false}>
              <span>Acessar</span>
            </Button>
            <div className="link-register-account-mobile">
              <LogIn size={18} />
              <Link className="link" to={"/signup"}>
                <span>Criar conta</span>
              </Link>
            </div>
          </form>
        </AnimationContainer>
      </Content>
      <Background>
        <div className="content">
          <h2>Bem-vindo!</h2>
          <span>
            Cadastre sua conta agora <br /> mesmo
          </span>
          <Link className="link-register-account" to={"/signup"}>
            CRIAR CONTA
          </Link>
        </div>
      </Background>
    </Container>
  );
}
