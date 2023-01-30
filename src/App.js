/** @format */

import {memo} from 'react'
import { Routes, Route } from 'react-router-dom';
import {Navigation} from "./components";
import {HomePage, MovieDetailsPage} from "./pages";
import {MoviesPage} from "./pages/MoviesPage";



export const App = memo(() => {
  return (
    <>
        <Navigation/>
        <Routes>
          <Route exact path="/"  element= {<HomePage/>} />
          <Route path="/movies" element={<MoviesPage/>}/>
          <Route path="/movieDetails" element={<MovieDetailsPage/>}/>
          <Route path="*" element={<HomePage/>}/>
        </Routes>
    
    </>
    )
  })