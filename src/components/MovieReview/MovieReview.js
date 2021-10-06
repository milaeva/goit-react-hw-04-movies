import { useState, useEffect } from "react";
import { useParams } from "react-router-dom";
import moviesApi from "../../services";

function MovieReview() {
  const [reviews, setReviews] = useState([]);
  const [error, setError] = useState("");
  const { movieId } = useParams();

  useEffect(() => {
    moviesApi
      .fatchMovieReview(movieId)
      .then((info) => {
        setReviews(info.results);
      })
      .catch((error) => setError(error));
  }, []);

  console.log(reviews);
  if (reviews.length === 0) {
    if (error) {
      return <h2>{error}</h2>;
    } else {
      return <h2>No review</h2>;
    }
  } else {
    return (
      <ul>
        {reviews.map((review) => {
          return (
            <li key={review.id}>
              <p>Author: {review.author}</p>
              <p>{review.content}</p>
            </li>
          );
        })}
      </ul>
    );
  }
}

export default MovieReview;
