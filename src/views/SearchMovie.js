import { useState, useEffect } from "react";
import { useHistory, useLocation } from "react-router";
import MovieList from "../components/MovieList/MovieList";
import moviesApi from "../services";
import queryString from "query-string";

export default function Searcbar() {
  const [searchbar, setSearchbar] = useState("");
  const [searchedMovie, setSearchedMovie] = useState([]);
  const history = useHistory();
  const location = useLocation();
  const search = queryString.parse(history.location.search);

  useEffect(() => {
    if (search.query) {
      moviesApi.fatchMovieSearch(search.query).then((movie) => {
        setSearchedMovie(movie.results);
      });
    }
    return;
  }, []);

  const inputChange = (e) => {
    const { value } = e.currentTarget;
    setSearchbar(value);
  };

  const formsubmit = (e) => {
    e.preventDefault();
    history.push({ ...location, search: `query=${searchbar}` });
    moviesApi.fatchMovieSearch(searchbar).then((movie) => {
      setSearchedMovie(movie.results);
    });
    reset();
  };
  const reset = () => {
    setSearchbar("");
  };

  return (
    <>
      <form onSubmit={formsubmit}>
        <input
          type="text"
          name="searchbar"
          value={searchbar}
          onChange={inputChange}
          autoComplete="off"
          autoFocus
          placeholder="Search movie"
        />
      </form>
      {searchedMovie.length === 0 ? (
        <p>no movies with name {search.query}</p>
      ) : (
        <MovieList array={searchedMovie} />
      )}
    </>
  );
}
