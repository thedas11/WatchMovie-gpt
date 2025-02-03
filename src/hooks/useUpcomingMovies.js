import { API_Options } from "../utils/constants";
import { addUpcomingMovies } from "../utils/movieSlice";
import { useDispatch, useSelector } from "react-redux";
import { useEffect } from "react";

const useUpcomingMovies =()=>{

    const dispatch = useDispatch();

    const popularMovies = useSelector(store=>store.movie.popularMovies)
    useEffect(()=>{
      if(!popularMovies)
        getUpcomingmovies();

     },[])

const getUpcomingmovies = async()=>{

const data = await fetch("https://api.themoviedb.org/3/movie/upcoming", API_Options)

const json = await data.json();


dispatch(addUpcomingMovies(json?.results))

}

}

export default useUpcomingMovies;