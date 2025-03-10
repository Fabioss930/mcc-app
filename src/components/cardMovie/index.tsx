import { Container } from "./styles";

interface TypeMovie {
  img: string;
  title: string;
}

export default function CardMovie({ img, title }: TypeMovie) {
  return (
    <Container>
      <div className="poster-movie">
        <img src={img} alt={title} />
      </div>
      <div className="title-movie">
        <span>{title}</span>
      </div>
    </Container>
  );
}
