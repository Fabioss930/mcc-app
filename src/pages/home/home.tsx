import Header from "../../components/header";
import { useMovie } from "../../hooks/movie";
import { useQuery } from "@tanstack/react-query";
import { Container, Content, Title } from "./styles";
import CardMovie from "../../components/cardMovie";
import PulseLoader from "react-spinners/PulseLoader";
import Footer from "../../components/footer";

export default function Home() {
  const { listMovie } = useMovie();

  const { data, isLoading, isError } = useQuery({
    queryKey: ["listMovie"],
    queryFn: listMovie,
    staleTime: 1000 * 60 * 5,
  });

  return (
    <>
      {!isLoading ? (
        <>
          <Header />
          {isError ? (
            <Container>
              <div className="content-erro">
                <span className="notify">
                  Ocorreu um erro ao carregar os filmes. Tente novamente mais
                  tarde :({" "}
                </span>
              </div>
            </Container>
          ) : (
            <>
              <Title>Filmes em destaque</Title>
              <Container>
                {data?.map((item) => {
                  return (
                    <div className="movies" key={item.id}>
                      <CardMovie img={item.poster_path} title={item.title} />
                    </div>
                  );
                })}
              </Container>
              <Footer />
            </>
          )}
        </>
      ) : (
        <Content>
          <PulseLoader color="#2e2e2e" size={20} speedMultiplier={0.7} />
        </Content>
      )}
    </>
  );
}
