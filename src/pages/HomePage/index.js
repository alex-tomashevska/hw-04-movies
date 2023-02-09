/** @format */

import { memo, useEffect, useState } from "react";

import { Movie } from "../../components";
import { getTrending } from "../../services";

import styles from "./HomePage.module.css";

export const HomePage = memo(() => {
  const [trends, setTrends] = useState([]);
  const [isLoading, setLoading] = useState(false);

  const handleChangeTrends = (results) => setTrends(results);
  const handleLoading = () => setLoading((prev) => !prev);
  // console.log(trends);

  useEffect(() => {
    getTrending(handleChangeTrends, handleLoading);
  }, []);

  if (isLoading) {
    return <h1>Loading...</h1>;
  }

  return (
    <>
      <h1>Trends today</h1>
      {trends.length ? (
        <div className={styles.list}>
          <Movie items={trends} />
        </div>
      ) : (
        <h2>The service is temporarily unavailable. Please try again later.</h2>
      )}
    </>
  );
});
