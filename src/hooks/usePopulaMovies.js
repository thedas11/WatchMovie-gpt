import { API_Options } from "../utils/constants";
import { addPopularMovies } from "../utils/movieSlice";
import { useDispatch, useSelector } from "react-redux";
import { useEffect } from "react";

const usePopularMovies =()=>{

    const dispatch = useDispatch();

    const popularMovies = useSelector(store=>store.movie.popularMovies)
    useEffect(()=>{
      if(!popularMovies)
        getPopularmovies();

     },[])

const getPopularmovies = async()=>{

const data = await fetch("https://api.themoviedb.org/3/movie/popular", API_Options)

const json = await data.json();


dispatch(addPopularMovies(json?.results))

}

}

export default usePopularMovies;