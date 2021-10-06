import MoviesItem from "../MoviesItem/MoviesItem";

export default function MovieList({ array }) {
  if (array.length === 0) {
    return null;
  } else {
    return (
      <ul>
        {array.map((movie) => {
          if (movie.original_title) {
            return (
              <MoviesItem
                key={movie.id}
                movieName={movie.original_title}
                movieId={movie.id}
              />
            );
          } else {
            return (
              <MoviesItem
                key={movie.id}
                movieName={movie.original_name}
                movieId={movie.id}
              />
            );
          }
        })}
      </ul>
    );
  }
}
