/** @format */

import { memo, useEffect, useState } from "react";
import axios from "axios";

//import {getSearchMovies} from '../../services'
import { LoadMoreButton, Movie, SearchForm } from "../../components";
import apiKey from "../../services/baseUrl";

import styles from "./MoviesPage.module.css";

const url = (input) =>
  `https://api.themoviedb.org/3/search/search-movies/query=${input}?api_key=${apiKey}`;

export const MoviesPage = memo(() => {
  const [movies, setMovies] = useState([]);
  const [input, setInput] = useState("");
  const [isLoading, setLoading] = useState(false);

  // const handleChangeMovies = (newMovies = []) => setMovies((prevMovies) => [...prevMovies, ...newMovies])
  const handleSearchInput = ({ target: { value } }) => setInput(value);
  const handleLoad = () => setLoading((prev) => !prev);
  const handleChangeMovies = (results) => setMovies(results);

  const getSearchMovies = () => {
    setLoading(true);
    axios
      .get(url(input))
      .then((response) => setMovies(response.data.results))
      //.catch(({message}) => alert((message)))
      .finally(() => setLoading(false));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    handleLoad(true);
  };

  useEffect(() => {
    getSearchMovies(handleChangeMovies, handleLoad);
  }, []);

  return (
    <>
      <SearchForm
        value={input}
        handleSearchInput={handleSearchInput}
        handleSubmit={handleSubmit}
      />
      <ul className={styles.cardList}>
        <Movie items={movies} />
      </ul>
      {movies?.length > 0 && <LoadMoreButton onClick={getSearchMovies} />}
    </>
  );
});
