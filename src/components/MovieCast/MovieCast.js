import { useState, useEffect } from "react"
import { useParams } from "react-router-dom"
import moviesApi from "../../services"
import s from "./MovieCast.module.css"

function MovieCast() {
  const [cast, setCast] = useState([])
  const { movieId } = useParams()

  useEffect(() => {
    moviesApi.fatchMovieCast(movieId).then((info) => {
      setCast(info.cast)
    })
  }, [movieId])

  return (
    <ul className={s.cast}>
      {cast.map((actor) => {
        return (
          <li>
            <img
              src={`https://image.tmdb.org/t/p/original${actor.profile_path}`}
              alt={actor.character}
              className={s.photo}
            ></img>
            <p>{`Name: ${actor.name}`}</p>
            <p>{`Character: ${actor.character}`}</p>
          </li>
        )
      })}
    </ul>
  )
}

export default MovieCast
