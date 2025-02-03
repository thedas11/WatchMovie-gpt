import { useDispatch, useSelector } from "react-redux";
import React, { useEffect } from 'react'
import { API_Options } from '../utils/constants'
import { addMovieTrailer } from '../utils/movieSlice'


const useMovieTrailer =(videoId)=>{

    const dispatch = useDispatch();

    const movieTrailer = useSelector(store=>store.movie.movieTrailer)

 const getMovieTrailer = async()=>{

  const data = await fetch("https://api.themoviedb.org/3/movie/" + videoId + "/videos", API_Options)

  const json = await data.json();


  const filterTrailer = json.results.filter(trailer=> trailer?.type === "Trailer")

  const trailer = filterTrailer.length ? filterTrailer[0] : json.results[0] // handling if can't filter based on Trailer then return the fist object from the json

  dispatch(addMovieTrailer(trailer))

}

useEffect(()=>{ // memoization concept, this saves a lot of api calls and only called when the store is null 
  if(!movieTrailer)
    getMovieTrailer()
  }, [])
}


export default useMovieTrailer;