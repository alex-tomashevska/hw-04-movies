/** @format */

import { memo } from "react";
import { Routes, Route } from "react-router-dom";
import { Cast, Navigation, Review } from "./components";
import { HomePage, MovieDetailsPage, MoviesPage } from "./pages";

export const App = memo(() => {
  return (
    <>
      <Navigation />
      <Routes>
        <Route path="/" element={<HomePage />} />
        {/*<Route path="/movies" element={<MoviesPage />} />*/}
        <Route path="/movies/:id" element={<MovieDetailsPage />} />
        <Route path="/movies/:id/cast" element={<Cast />} />
        <Route path="/movies/:id/reviews" element={<Review />} />
        {/*<Route path="*" element={<HomePage />} />*/}
      </Routes>
    </>
  );
});
