import { Link, useNavigate } from "react-router-dom";
import { AnimationContainer, Background, Container, Content } from "./styles";
import { Input } from "../../components/input";
import { User, Lock, Mail, ArrowLeft } from "lucide-react";
import { Button } from "../../components/button";
import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import { z } from "zod";
import { useAuth } from "../../hooks/auth";
import { useEffect } from "react";

const formSchema = z.object({
  nameUser: z.string().min(1, { message: "O nome é obrigatório" }),
  email: z.string().min(1, { message: "O email é obrigatório" }),
  password: z.string().min(1, { message: "A senha é obrigatória" }),
});

type formShema = z.infer<typeof formSchema>;

export default function SignUp() {
  const navigate = useNavigate();

  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm<formShema>({
    resolver: zodResolver(formSchema),
  });
  const { signUp } = useAuth();

  useEffect(() => {
    const token = localStorage.getItem("user_mcc_token");
    if (token) navigate("/home");
  }, []);

  function handleSubmitSignUp(data: formShema) {
    try {
      signUp({
        name: data.nameUser,
        email: data.email,
        password: data.password,
      });
      alert("Conta salva com sucesso");
      navigate("/");
    } catch (error) {
      alert(error);
    }
  }

  return (
    <Container>
      <Background>
        <div className="content">
          <h2>Bem-vindo!</h2>
          <span>
            Acesse sua conta agora <br /> mesmo
          </span>
          <Link className="link-register-account" to={"/"}>
            ACESSAR
          </Link>
        </div>
      </Background>
      <Content>
        <AnimationContainer>
          <form onSubmit={handleSubmit(handleSubmitSignUp)}>
            <h1>Crie sua conta</h1>
            <Input
              {...register("nameUser")}
              placeholder="Nome"
              type="text"
              icon={User}
              error={errors.nameUser?.message}
            />

            <Input
              {...register("email")}
              placeholder="Email"
              type="text"
              icon={Mail}
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
              <span>Cadastrar</span>
            </Button>
            <div className="link-register-account-mobile">
              <ArrowLeft size={18} />
              <Link className="link" to={"/"}>
                <span>Voltar para o login</span>
              </Link>
            </div>
          </form>
        </AnimationContainer>
      </Content>
    </Container>
  );
}
