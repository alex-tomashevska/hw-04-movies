/** @format */

import { memo } from "react";
import { Link } from "react-router-dom";

import imageApi from "../../services/baseUrl";
import styles from "./Movie.module.css";

export const Movie = memo(({ items }) => {
  return (
    <>
      {items.map((item) => (
        <div className={styles.movieCard} key={item.id}>
          <img
            className={styles.poster}
            key={item.id}
            src={imageApi.posterPath(item.poster_path)}
            alt={item.title}
            title={item.title}
          />

          <Link to={`/movies/${item.id}`}>
            <h1 className={styles.title}> {item.title} </h1>
            <h4 className={styles.movieCardInfo}> {item.date} </h4>
          </Link>
        </div>
      ))}
    </>
  );
});
