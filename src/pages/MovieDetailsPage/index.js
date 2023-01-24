/** @format */

import {memo, useEffect, useState} from 'react'
import {NavLink, useLocation} from "react-router-dom";
import {Route, Routes} from 'react-router-dom';
import axios from "axios";
import {GoBackButton} from "../../components/GoBackButton";
import {Movie, MovieNavigation, Cast, Review} from "../../components";

export const MovieDetailsPage = memo(() => {
  const [movie, setMovie] = useState(null);
   const [isLoading, setLoading] =useState(false);


  const location = useLocation();

  useEffect(() => {
    getData()
  }, [])

  const getData = () => {
    setLoading(true);
    const {movieId} = location.pathname;

    axios.get(movieId)
      .then((response) => {
        setMovie({...response.data})
      })
      .catch(console.error)
      .finally(() => setLoading(false))
  };

  const handleGoBack = () => {
    location.push(location?.state?.from || "/" )
  };

  return(
    <>
      <GoBackButton onBack={handleGoBack}/>
      {movie && <Movie movie={movie}/>}
      {movie && <MovieNavigation/>}
      
      <NavLink  to="/cast" >Cast</NavLink>
      <NavLink to="/reviews">Reviews</NavLink>
      
        {/*<Route exact path={`/movies/${location.pathname}/cast`} element={<Cast/>} />*/}
        {/*<Route exact path={`/movies/${location.pathname}/reviews`} element={<Review/>}/>*/}
    </>
  )
})