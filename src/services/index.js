import axios from "axios";

import { transformationMoviesData } from "../utils";

import url from "./baseUrl";

export const getTrending = (setTrends, setLoading) => {
  setLoading();
  axios
    .get(url.trendingUrl)
    // .then(response => setResult(response?.results))
    //  .then(res => {
    //    console.log('res: ', res)
    //  })
    .then(({ data }) => setTrends(transformationMoviesData(data?.results)))
    .catch(({ message }) => alert(message))
    // .catch((err) => console.log('getTrending:', err))
    .finally(setLoading);
  // console.log(url.trendingUrl)
};

// export const getMovieDetails = (setMovie, setLoading, if) => {
//   setLoading(true);
//   axios
//     .get(url.movieDetails(id))
//     .then(({ data }) => {
//       setMovie(transformationData(data?.results));
//     })
//     .catch(console.error)
//     .finally(() => setLoading(false));
// };

// export const getMovieCast = (setActors, setLoading, id) => {
//   setLoading(true);
//   axios
//     .get(url.movieCast(id))
//     .then(({ data }) => setActors(transformationData({ ...data })))
//     .catch(({ message }) => alert(message))
//     .finally(() => setLoading(false));
// };

// export const getMovieReviews = (setReviews, setLoading, id) => {
//   setLoading(true);
//   axios
//     .get(url.movieReviews(id))
//     .then(({ data }) => {
//       console.log(data);
//       setReviews(data?.results);
//     })
//     .finally(() => setLoading(false));
// };

// export const getSearchMovies = (setLoading, value, setMovies) => {
//   setLoading(true);
//   axios
//     .get(url.searchMovies(value))
//     .then(({ data }) => setMovies(transformationData(data?.results)))
//     //.catch(({ message }) => alert(message))
//     .finally(() => setLoading(false));
// };
