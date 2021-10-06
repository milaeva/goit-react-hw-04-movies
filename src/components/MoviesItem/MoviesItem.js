import { Link, useHistory } from "react-router-dom";
import s from "./MoviesItem.module.css";

export default function MoviesItem({ movieName, movieId }) {
  const history = useHistory();

  return (
    <li>
      <Link
        to={{
          pathname: `/movies/${movieId}`,
          state: {
            referrer: history.location.pathname,
            search: history.location.search,
          }, // или `/products/${slug}`
        }}
        className={s.link}
      >
        {movieName}
      </Link>
    </li>
  );
}
