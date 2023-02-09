/** @format */

import { memo, useEffect, useState } from "react";
import axios from "axios";
import { Link, useParams, useNavigate } from "react-router-dom";

import { Movie, Cast, Review } from "../../components";

//import { getMovieDetails } from "../../services";
import imageApi from "../../services/baseUrl";
import url from "../../services/baseUrl";
import { transformationMovie } from "../../utils";

import styles from "./MovieDetailsPage.module.css";

export const MovieDetailsPage = memo(() => {
  const [movie, setMovie] = useState(null);
  const [isLoading, setLoading] = useState(false);

  const { id } = useParams();
  const navigate = useNavigate();

  const getMovieDetails = () => {
    setLoading(true);
    axios
      .get(url.movieDetails(id))
      .then(({ data }) => {
        setMovie(transformationMovie(data));
      })
      .finally(() => setLoading(false));
  };

  //const handleCast = (results) => setMovie(results);
  // const handleLoading = () => setLoading((prev) => !prev);

  useEffect(() => {
    getMovieDetails();
  }, [id]);

  const handleGoBack = () => {
    navigate(-1);
  };

  if (isLoading && !movie) {
    return <h1>Loading ...</h1>;
  }

  return (
    <>
      <div className={styles.container}>
        <button className={styles.button} type="button" onClick={handleGoBack}>
          Go Back
        </button>

        {movie && (
          <>
            <img
              width={400}
              height={400}
              src={imageApi?.posterPath(movie?.poster_path)}
              alt=""
            />

            <div className={styles.description}>
              <h1>
                {movie.title} {movie.date}
              </h1>
              <p>User score: {movie.vote_average}</p>
              <h2>Overview</h2>
              <p>{movie.overview}</p>
              {/*<h3>Genres</h3>*/}
              {/*<p>{id.genres.map((genre) => `${genre.name}`)} </p>*/}
            </div>
          </>
        )}
      </div>

      <div className={styles.additional}>
        <p>Additional information: </p>
        <ul className={styles.list}>
          <li className={styles.item}>
            <Link className={styles.link} to={`/movies/${id}/cast`}>
              Cast
            </Link>
          </li>
          <li>
            <Link className={styles.link} to={`/movies/${id}/reviews`}>
              Reviews
            </Link>
          </li>
        </ul>
      </div>
    </>
  );
});
