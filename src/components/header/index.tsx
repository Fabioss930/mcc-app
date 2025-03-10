import { Container } from "./styles";
import Logo from "../../assets/logo.png";
import { LogOut } from "lucide-react";
import { useAuth } from "../../hooks/auth";

export default function Header() {
  const { signOut } = useAuth();
  return (
    <Container>
      <div className="content-logo">
        <img src={Logo} alt="logo" />
      </div>
      <div className="content-button-signout">
        <button type="button" onClick={() => signOut()}>
          <span>Sair</span>
          <LogOut size={18} />
        </button>
      </div>
    </Container>
  );
}
