import placeholder from "../assets/images/placeholder.png";

const apiKey =  '1271f8ed6dc3d3d02376a8f888f244ba'

const baseApi = 'https://api.themoviedb.org/3';
const imageApi = 'https://image.tmdb.org'

//https://api.themoviedb.org/3/trending/all/day?api_key=<<api_key>>

export default {
  trendingUrl: baseApi + '/trending/all/day?api_key=' + apiKey,
  movieDetails: baseApi + '/movies/get-movie-details',
  movieCredits: baseApi + '/movies/get-movie-credits',
  movieReviews: baseApi + '/movies/get-movie-reviews',
  searchMovies: baseApi + '/search/search-movies/query?api_key=' + apiKey,
  posterPath: (poster_path) => poster_path?  `${imageApi}/t/p/original${poster_path}`: placeholder,
  
}

