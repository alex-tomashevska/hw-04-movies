/** @format */

import { memo, useEffect, useState } from "react";
import axios from "axios";

//import { getSearchMovies } from "../../services";
import { LoadMoreButton, Movie, SearchForm } from "../../components";
import url from "../../services/baseUrl";
import { transformationMoviesData } from "../../utils";

import styles from "./MoviesPage.module.css";

export const MoviesPage = memo(() => {
  const [movies, setMovies] = useState([]);
  const [isLoading, setLoading] = useState(false);
  const [value, setValue] = useState("");

  const handleChangeValue = ({ target: { value } }) => setValue(value);

  //const handleChangeMovies = (results) => setMovies(results);
  //const handleLoad = () => setLoading((prev) => !prev);

  const getSearchMovies = () => {
    setLoading(true);
    axios
      .get(url.searchMovies(value))
      .then(({ data }) => setMovies(transformationMoviesData(data?.results)))
      // .catch(({ message }) => alert(message))
      .finally(() => setLoading(false));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    getSearchMovies();
  };

  useEffect(() => {
    getSearchMovies();
  }, []);

  console.log("movies", movies);

  return (
    <>
      {isLoading && <h1>Loading ...</h1>}
      <SearchForm
        value={value}
        handleChangeValue={handleChangeValue}
        handleSubmit={handleSubmit}
      />
      <ul className={styles.cardList}>
        <Movie items={movies} />
      </ul>
      {movies?.length > 0 && <LoadMoreButton onClick={getSearchMovies} />}
    </>
  );
});
