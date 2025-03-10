/* eslint-disable react-refresh/only-export-components */
import { createContext, useContext } from "react";
import axios from "axios";

const API_URL =
  "https://api.themoviedb.org/3/trending/movie/day?language=pt-BR";
const API_KEY = import.meta.env.VITE_API_KEY;
const IMAGE_BASE_URL = "https://image.tmdb.org/t/p/w500/";

interface MovieType {
  id: number;
  poster_path: string;
  title: string;
}

interface DataMovie {
  data: {
    results: MovieType[];
  };
}

interface MovieContextState {
  listMovie(): Promise<MovieType[]>;
}

const MovieContext = createContext<MovieContextState>({} as MovieContextState);

export default function MovieProvider({
  children,
}: {
  children: React.ReactNode;
}) {
  // Listar Filmes
  async function listMovie() {
    const response: DataMovie = await axios.get(`${API_URL}`, {
      headers: {
        Authorization: `Bearer ${API_KEY}`,
      },
    });
    const { results } = response.data;
    const data = results.slice(0, 18).map((item) => ({
      id: item.id,
      title: item.title,
      poster_path: `${IMAGE_BASE_URL}${item.poster_path}`,
    }));

    return data as MovieType[];
  }

  return <MovieContext value={{ listMovie }}>{children}</MovieContext>;
}

export const useMovie = () => useContext(MovieContext);
