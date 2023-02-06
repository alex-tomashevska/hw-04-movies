import placeholder from "../assets/images/placeholder.png";

export const apiKey = "1271f8ed6dc3d3d02376a8f888f244ba";

export const url = "https://api.themoviedb.org/3";
export const imageApi = "https://image.tmdb.org";

//https://api.themoviedb.org/3/trending/all/day?api_key=<<api_key>>

export default {
  trendingUrl: url + "/trending/all/day?api_key=" + apiKey,
  movieDetails: (id) => `${url}/movie/${id}?api_key=${apiKey}`,
  movieCast: (id) => `${url}/movie/${id}/credits?api_key=${apiKey}`,
  movieReviews: (id) => `${url}/movie/${id}/reviews?api_key=${apiKey}`,
  searchMovies: (query) =>
    `${url}/search/movie?api_key=${apiKey}&query=${query}`,
  posterPath: (poster_path) =>
    poster_path ? `${imageApi}/t/p/original${poster_path}` : placeholder,
  profilePath: (profile_path) =>
    profile_path ? `${imageApi}/t/p/original${profile_path}` : placeholder,
};

// const getMovie = (movie_id) =>
//   `https://api.themoviedb.org/3/movie/${movie_id}?api_key=1271f8ed6dc3d3d02376a8f888f244ba`;
// console.log(getMovie);

// const movieCast = (movieId) => {
//   `${baseApi}/movie/${movieId}/credits?api_key=${apiKey}`;
// };
// console.log("cast: ", movieCast);
