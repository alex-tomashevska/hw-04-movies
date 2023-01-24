/** @format */

import {memo, useState} from 'react'
import {useLocation} from "react-router-dom";
import axios from "axios";

import styles from './HomePage.module.css'
import {Movie} from "../../components";

export const HomePage = memo(() => {
  const [trends, setTrends] = useState([]);
  // const [isLoading, setLoading] = useState(false);
  // const [error, setError] = useState('');
  
  // const handleLoad = () => {
  //   setLoading(true);
    const location = useLocation()
    console.log(location)
    const {movies} = location.pathname;
    
    
    axios.get(movies)
      .then((movies) => {
        setTrends(movies.data.pathname)
      })
      .catch(console.error)
      // .finally(() => setLoading(false))
    
  // }
  
  
  // return (
  //   <main>
  //     {trends? (
  //       <MovieList movies={trends}/>
  //     ) : (
  //       <Message>
  //         <h2>
  //           The service is temporarily unavailable. Please try again later.
  //         </h2>
  //       </Message>
  //     )
  //     }
  //     {isLoading}
  //   </main>
  // )
  
  const {movieList} = {trends}
  
  return(
    <>
      <h1>Trends today</h1>
      {trends? (
        <div className={styles.list}>
        <Movie items={movieList}/>
        </div>
      ) : (
        <h2>The service is temporarily unavailable. Please try again later.</h2>
      )}
      
    </>
  )
})