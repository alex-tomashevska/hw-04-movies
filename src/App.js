/** @format */

import { memo } from "react";
import { Routes, Route } from "react-router-dom";
import { Navigation } from "./components";
import { HomePage, MovieDetailsPage, MoviesPage } from "./pages";

export const App = memo(() => {
  return (
    <>
      <Navigation />
      <Routes>
        <Route path="/" element={<HomePage />}>
          <Route path="/movies" element={<MoviesPage />} />
          <Route path="/movies/id" element={<MovieDetailsPage />} />
          <Route path="*" element={<HomePage />} />
        </Route>
      </Routes>
    </>
  );
});
