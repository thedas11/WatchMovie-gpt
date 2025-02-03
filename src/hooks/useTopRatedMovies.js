import { API_Options } from "../utils/constants";
import { addTopratedMovies } from "../utils/movieSlice";
import { useDispatch, useSelector } from "react-redux";
import { useEffect } from "react";

const useTopRatedMovies =()=>{

    const dispatch = useDispatch();

    const topRatedMovies = useSelector(store=>store.movie.topRatedMovies)
    useEffect(()=>{
      if(!topRatedMovies)
        getTopratedMovies();

     },[])

const getTopratedMovies = async()=>{

const data = await fetch("https://api.themoviedb.org/3/movie/top_rated", API_Options)

const json = await data.json();


dispatch(addTopratedMovies(json?.results))

}

}

export default useTopRatedMovies;