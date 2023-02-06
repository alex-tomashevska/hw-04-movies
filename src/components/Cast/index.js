/** @format */

import { memo, useEffect, useState } from "react";
import axios from "axios";

import { useParams } from "react-router-dom";

import url from "../../services/baseUrl";
import imageApi from "../../services/baseUrl";
//import { getMovieCast } from "../../services";

import styles from "./Cast.module.css";
import { transformationData } from "../../utils";

export const Cast = memo(() => {
  const [actors, setActors] = useState([]);
  const [isLoading, setLoading] = useState(false);

  const { id } = useParams();

  const getMovieCast = () => {
    setLoading(true);
    axios
      .get(url.movieCast(id))
      .then(({ data }) => setActors(transformationData({ ...data })))
      .catch(({ message }) => alert(message))
      .finally(() => setLoading(false));
  };

  //const handleActors = (results) => setActors(results);
  // const handleLoading = () => setLoading((prev) => !prev);

  useEffect(() => {
    getMovieCast();
  }, []);

  return (
    <div>
      {isLoading && <h1>Loading ...</h1>}
      <ul className={styles.list}>
        {actors &&
          actors.map(({ credit_id, profile_path, name, character }) => (
            <li key={credit_id} className={styles.item}>
              <img src={imageApi.profilePath(profile_path)} alt={name} />
              <p>{name}</p>
              <p>Character: {character}</p>
            </li>
          ))}
        })}
      </ul>
      ) : (<p>There is no information about actors for this movie.</p>
    </div>
  );
});
