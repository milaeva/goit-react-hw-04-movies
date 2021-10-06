import { useState, useEffect } from "react";
import moviesApi from "../services";
import MovieList from "../components/MovieList/MovieList";

export default function HomePage() {
  const [movies, setMovies] = useState([]);
  const [error, setError] = useState("");

  useEffect(() => {
    moviesApi
      .fatchTrandMovie()
      .then((movies) => {
        setMovies(movies.results);
      })
      .catch((error) => setError(error));
  }, []);

  if (movies.length === 0) {
    return <p>{error}</p>;
  } else {
    return <MovieList array={movies} />;
  }
}
