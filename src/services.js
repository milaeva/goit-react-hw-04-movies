const key = `acfa9dbf24bcbfdf81bbeb0790e660cd`
const BASE_URL = "https://api.themoviedb.org/3"

function fatchTrandMovie() {
  return fetch(`${BASE_URL}/trending/all/day?api_key=${key}`).then((response) => {
    if (response.ok) {
      return response.json()
    }
    return Promise.reject(new Error(`no muvies today`))
  })
}
function fatchMovieInfo(movieId) {
  return fetch(`${BASE_URL}/movie/${movieId}?api_key=${key}&language=en-US`).then((response) => {
    if (response.ok) {
      return response.json()
    }
    return Promise.reject(new Error(`no movies today`))
  })
}

function fatchMovieCast(movieId) {
  return fetch(`${BASE_URL}/movie/${movieId}/credits?api_key=${key}&language=en-US`).then(
    (response) => {
      if (response.ok) {
        return response.json()
      }
      return Promise.reject(new Error(`no muvies today`))
    }
  )
}

function fatchMovieReview(movieId) {
  return fetch(`${BASE_URL}/movie/${movieId}/reviews?api_key=${key}&language=en-US&page=1`).then(
    (response) => {
      if (response.ok) {
        return response.json()
      }
      return Promise.reject(new Error(`no reviews for this movie`))
    }
  )
}

function fatchMovieSearch(movieName) {
  return fetch(
    `${BASE_URL}/search/movie?api_key=${key}&language=en-US&query=${movieName}&page=1&include_adult=false`
  ).then((response) => {
    if (response.ok) {
      return response.json()
    }
    return Promise.reject(new Error(`no movies with name ${movieName}`))
  })
}

const api = {
  fatchTrandMovie,
  fatchMovieInfo,
  fatchMovieCast,
  fatchMovieReview,
  fatchMovieSearch,
}
export default api
