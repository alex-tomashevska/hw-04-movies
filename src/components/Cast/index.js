/** @format */

import {memo, useState} from 'react'
import axios from "axios";
import {useLocation} from "react-router-dom";


import styles from './Cast.module.css'
import {Actor} from "../Actor/insex";


export const Cast = memo(() => {
  const [data, setData] = useState([]);
  // const [isLoading, setLoading] = useState(false);
  
  const url = useLocation();
  const {movieId} = url.id;
  
  // setLoading(true);
  
  axios
    .get(movieId)
    .then((response) => {
      console.log(response)
      setData({...response.data})
    })
    .catch(console.error)
    // .finally(() =>setLoading(false))
  
  return (
    <div>
      {data.length > 0 ? (
        <ul className={styles.list}>
          {data.map(({id, profile_path, name, character}) => {
            return (
              <li key={id} className={styles.item}>
                <Actor photo={profile_path} name={name} character={character}/>
              </li>
            );
          })}
        </ul>
      ) : (
        <p>There is no information about actors for this movie.</p>
      )}
      {/*{error && (*/}
      {/*  <Message>*/}
      {/*    <h2>The service is temporarily unavailable. Please try again later.</h2>*/}
      {/*  </Message>*/}
      {/*)}*/}
    </div>
  )})
  
  
  
  