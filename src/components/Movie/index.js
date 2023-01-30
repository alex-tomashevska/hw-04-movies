/** @format */

import { memo } from "react";
import { NavLink } from "react-router-dom";

import imageApi from "../../services/baseUrl";
import styles from "./Movie.module.css";

export const Movie = memo(({ items }) => {
  console.log("items", items);
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

          <NavLink to={{ pathname: `/movies/${item.id}` }}>
            <div className={styles.title}>
              <h1>{item.title}</h1>
              <p>({item.date})</p>
            </div>
          </NavLink>
        </div>
      ))}
    </>
  );
});
