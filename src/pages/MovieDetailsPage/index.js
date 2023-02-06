/** @format */

import { memo, useEffect, useState } from "react";
import axios from "axios";
import {
  NavLink,
  Route,
  Routes,
  useParams,
  useNavigate,
} from "react-router-dom";

import { Movie, Cast, Review } from "../../components";

//import { getMovieDetails } from "../../services";
import imageApi from "../../services/baseUrl";
import url from "../../services/baseUrl";
import { transformationData } from "../../utils";

import styles from "./MovieDetailsPage.module.css";

export const MovieDetailsPage = memo((...args) => {
  const [movie, setMovie] = useState(null);
  const [isLoading, setLoading] = useState(false);
  console.log("args", args);
  const { id } = useParams();
  const navigate = useNavigate();

  const getMovieDetails = () => {
    setLoading(true);
    axios
      .get(url.movieDetails({ id }))
      .then(({ data }) => {
        setMovie(transformationData(...data));
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

  return (
    <>
      {isLoading && <h1>Loading ...</h1>}
      {/*{movie && <Movie movie={movie} />}*/}
      {/*{movie.map((item) => (*/}
      <div className={styles.container}>
        <button className={styles.button} type="button" onClick={handleGoBack}>
          Go Back
        </button>

        {id && (
          <>
            <img src={imageApi.posterPath(movie.poster_path)} alt="" />

            <div className={styles.description}>
              <h1>
                {id.title} {id.date}
              </h1>
              <p>User score: {id.vote_average}</p>
              <h2>Overview</h2>
              <p>{id.overview}</p>
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
            <NavLink
              className={styles.link}
              to={{ pathname: `/movies/${id}/cast` }}
            >
              Cast
            </NavLink>
          </li>
          <li>
            <NavLink
              className={styles.link}
              to={{ pathname: `/movies/${id}/reviews` }}
            >
              Reviews
            </NavLink>
          </li>
        </ul>

        <Routes>
          <Route path="movies/:id/cast" element={<Cast />} />
          <Route path="movies/:id/reviews" element={<Review />} />
        </Routes>
      </div>
    </>
  );
});
