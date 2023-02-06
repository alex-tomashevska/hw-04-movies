/** @format */

import { memo, useEffect, useState, useParams } from "react";
import axios from "axios";

//import { getMovieReviews } from "../../services";

import url from "../../services/baseUrl";
import styles from "./Review.module.css";
import { transformationData } from "../../utils";

export const Review = memo(() => {
  const [reviews, setReviews] = useState([]);
  const [isLoading, setLoading] = useState(false);

  const { id } = useParams();
  //const handleReviews = (review) => setReviews(review);
  //const handleLoading = () => setLoading((prev) => !prev);

  const getMovieReviews = () => {
    setLoading(true);
    axios
      .get(url.movieReviews(id))
      .then(({ data }) => {
        //console.log(data);
        setReviews(transformationData(data?.results));
      })
      .finally(() => setLoading(false));
  };

  useEffect(() => {
    getMovieReviews();
  });

  return (
    <div>
      {isLoading && reviews.length === 0 ? (
        <p>We dont have any reviews for this movie</p>
      ) : (
        <ul className={styles.list}>
          {reviews.map(({ id, author, content }) => (
            <li className={styles.item} key={id}>
              <p className={styles.author}> {author} </p>
              <p className={styles.content}> {content} </p>
            </li>
          ))}
        </ul>
      )}
    </div>
  );
});
