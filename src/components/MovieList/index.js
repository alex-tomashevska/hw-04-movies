/** @format */

import {memo} from 'react'
import {MoviePreview} from "../MoviePreview";
import {Link} from "react-router-dom";

import styles from './MovieList.module.css'


export const MovieList = memo(({movies, location}) => {
  return(
    <ul className={styles.list}>
      {movies.map(({id, title, poster_path, vote_average}) => (
        <li key={id} className={styles.item}>
          <Link className={styles.link}
            to={{
            pathname: `${movies}/${id}`,
            state: {from: location}
          }}
          >

          <MoviePreview
            title = {title}
            poster={poster_path}
            vote={vote_average}
          />
          </Link>
        </li>
      ))}
    </ul>
    )

})