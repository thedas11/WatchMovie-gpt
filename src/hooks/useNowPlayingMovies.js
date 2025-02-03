import { useState, useEffect } from "react"
import { useDispatch, useSelector } from "react-redux"
import { addnowplayingMovies } from "../utils/movieSlice"
import { API_Options } from "../utils/constants"

const useNowPlayingMovies= ()=>{


    const [updateMovie, setUpdateMovie] = useState(null)

    const dispatch = useDispatch();

    const nowPlayingmovies = useSelector(store=>store.movie.nowPlayingmovies)


    useEffect(()=>{
      if(!nowPlayingmovies)
        getCurentPlayingMovies()
      }, [])

    const getCurentPlayingMovies = async()=>{

        const data = await fetch('https://api.themoviedb.org/3/movie/now_playing?page=1', API_Options)
      
        const json = await data.json();

        dispatch(addnowplayingMovies(json?.results))
        setUpdateMovie(true)
      }

      return updateMovie;
    }


export default useNowPlayingMovies;


