/** @format */

import {memo, useState} from 'react'
import {useLocation} from "react-router-dom";
import axios from "axios";


import styles from './Review.module.css'

export const Review = memo(() => {
  const [reviews, setReviews] = useState([]);
  const [isLoading, setLoading] = useState(false);
  // const [error, setError] = useState('');
  
  const location = useLocation()
  
  // useEffect(() => {
  // })
  
  // const handleReview = (review) => setReviews(review)
  
 
    setLoading(true)
  
    const {movieId} = location.params;
    
    axios
      .get(movieId)
        // setReviews(movieId)
      .then((response)=> {
        console.log(response)
        setReviews(response.data.results)
    })
      .catch(console.error)
      .finally(()=> setLoading(false))
  
  
  return(
    <div>
      {isLoading && reviews.length === 0
        ? (<p>We dont have any reviews for this movie</p>)
        : (
          <ul className={styles.list}>
            {reviews.map(({id, author, content}) => (
                <li className={styles.item} key={id}>
                  <p className={styles.author}> {author} </p>
                  <p className={styles.content}> {content} </p>
                </li>
            ))}
          </ul>
    
        )
      }
      
    </div>
    )
  
  
})