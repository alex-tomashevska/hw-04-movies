/** @format */

import { memo, useEffect, useState } from "react";
import axios from "axios";

import { useParams } from "react-router-dom";

//import { getMovieReviews } from "../../services";

import url from "../../services/baseUrl";
import { transformationMoviesReviews } from "../../utils";

import styles from "./Review.module.css";

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
      .then(({ data: { results } }) =>
        setReviews(transformationMoviesReviews(results))
      )
      .finally(() => setLoading(false));
  };

  useEffect(() => {
    getMovieReviews();
  }, []);

  if (isLoading) {
    return <h1>Loading...</h1>;
  }

  if (!reviews.length) {
    return <p>We dont have any reviews for this movie</p>;
  }

  return (
    <div>
      <ul className={styles.list}>
        {reviews.map(({ id, author, content }) => (
          <li className={styles.item} key={id}>
            <p className={styles.author}> {author} </p>
            <p className={styles.content}> {content} </p>
          </li>
        ))}
      </ul>
    </div>
  );
});
