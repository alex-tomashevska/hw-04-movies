/** @format */

import {memo} from 'react'
import styles from './Movie.module.css'
import placeholder from '../../assets/images/placeholder.png'

export const Movie = memo(({movie}) => {
  const {
    release_date,
    vote_average,
    poster_path,
    overview,
    title,
    genres} = movie

  const posterURL =  poster_path ? `https://image.tmdb.org/t/p/w500${poster_path}` : placeholder;

  return(
    <article className={styles.article}>
      <div className={styles.themovieb}>
        <img
          src={posterURL}
          alt={title}
          title={title}
          className={styles.poster}
        />
      </div>

      <div>
          <h1 className={styles.title}>
            {title}
          </h1>
          <span>
            {release_date}
          </span>

        <p className={styles.score}>
          User score: {vote_average}
        </p>

        <p className={styles.overview}>
          Overview: {overview}
        </p>

        <p className={styles.label}>
          Genres:
          <ul className={styles.genresList}>
            {genres.map(({id, name}) => (
              <li key={id} className={styles.genresItem}>
                {name}
              </li>
            ))}
          </ul>
        </p>
      </div>
    </article>

  )
})



// export const Movie = memo(({items}) => {
//
//   const url = poster_path ? `https://image.themoviedb.org/t/p/original${poster_path}` : placeholder;
//   return (
//     <>
//       {items.map((item) => (
//         <div
//           className={styles.movieCard}
//         >
//           <img
//             className={styles.poster}
//             key={item.id}
//             src={url}
//             alt={item.title}
//             title={item.title}
//           />
//
//           <NavLink to={{ pathname: `/movies/${item.id}`}}>
//             <div className={styles.title}>
//               <title>
//                 <h1 className={styles.title}>
//                   {item.title}
//                 </h1>
//                 <p>({item.release_date.slice(0, 4)})</p>
//               </title>
//             </div>
//           </NavLink>
//         </div>
//       ))}
//     </>
//   )
// })