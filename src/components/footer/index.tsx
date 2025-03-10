import { Container } from "./styles";

export default function Footer() {
  const date = new Date();
  return (
    <Container>
      <span>© Copyright {date.getFullYear()}, todos o direitos reservado</span>
    </Container>
  );
}
