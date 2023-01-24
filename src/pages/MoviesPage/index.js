/** @format */

import {memo, useEffect, useState} from 'react'
import {useLocation} from "react-router-dom";
import axios from "axios";
import {LoadMoreButton, MovieList, SearchForm} from "../../components";

export const MoviesPage = memo(() => {
  const location = useLocation();
  const { search } = location;
  
  const [data, setData] = useState([]);
  const [input, setInput] = useState(search)
  const [isLoading, setLoading] = useState(false)
  const [page, setPage] = useState(1)
  
  const handlePage = () => setPage((prevPage) => prevPage+1)
  const handleData = (newData = []) => setData((prevData) => [...prevData, ...newData])
  const handleInput = ({target: {value}}) => setInput(value)
  
  useEffect(() => {
    if (!input) return
    getMovies()
  }, [input])
  
  const getMovies = () => {
    setLoading(true)
    
    axios.get(search)
      .then((response) => {
      if(search.length !== 0){
        handleData(response.data.pathname)
      } else {
        handleData()
      }
        handlePage()
      })
      .catch(console.error)
      .finally(() => setLoading(false))
  }
  const handleSubmit = (event) => {
    event.preventDefault()
    
    getMovies(true)
    
  }
  
  return(
    <>
      <SearchForm value={input} handleInput={handleInput()} handleSubmit={handleSubmit}/>
      <MovieList movies={data}/>
      {data.length > 0 && <LoadMoreButton onClick={getMovies} />}
    </>
  )
} )