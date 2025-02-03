import React from 'react'
import MovieList from './MovieList'
import { useSelector } from 'react-redux'

const SecondaryContainer = () => {
  const MovieCategories = useSelector(store=>store?.movie)
  return (
    <div className ='bg-black w-screen p-5 no-scrollbar'>

      <div className='md:-mt-[200px] md:pl-5 relative -mx-8 z-20 mt-0 '>

      <MovieList title={"Now Playing"} category={MovieCategories?.nowPlayingmovies} />
      
      <MovieList title={"Popular"} category={MovieCategories?.popularMovies} />
      
      <MovieList title={"Top Rated"} category={MovieCategories?.topRatedMovies}/>
      
      <MovieList title={"Upcoming"} category={MovieCategories?.upcomingMovies} />
            </div>
    </div>
  )
}

export default SecondaryContainer
