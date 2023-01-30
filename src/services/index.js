import url from'./baseUrl'
import axios from "axios";
import apiKey from './baseUrl'

export const getTrending = (setResult, setLoading ) => {
  setLoading()
  axios.get(url.trendingUrl)
   // .then(response => setResult(response?.results))
   //  .then(res => {
   //    console.log('res: ', res)
   //  })
    .then(({data}) => setResult(data?.results))
    .catch(({message}) => alert((message)))
   // .catch((err) => console.log('getTrending:', err))
    .finally(setLoading)
  // console.log(url.trendingUrl)
}

export const getMovieDetails = (setMovie, setLoading) => {
  axios.get(url.movieDetails)
    .then((response) => {
      setMovie({...response.data})
    })
    .catch(console.error)
    .finally(() => setLoading(false))
}


export const getMovieCredits = () => {

}

export const getMovieReviews = () => {

}

// export const getSearchMovies = (setResult, setLoading, input) => {
//   setLoading(true)
//   axios.get(`https://api.themoviedb.org/3/search/search-movies/query=${input}?api_key=`+ apiKey)
//     .then((response) => setResult(response?.results))
//     // .catch(({message}) => alert((message)))
//     .finally(() => setLoading(false))
//
// }

