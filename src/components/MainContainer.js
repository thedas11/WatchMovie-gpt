import React from 'react'
import { useSelector } from 'react-redux'
import Videotitle from './Videotitle'
import VideoBackground from './VideoBackground'



const MainContainer = () => {

    const movies = useSelector( store => store.movie?.nowPlayingmovies )
    const mainMovie = movies[0]
    const {original_title, overview, id} = mainMovie
    return (
    <div className='w-max pt-[30%] md:pt-0'>
      <Videotitle title={original_title} movieOverview = {overview} />
      <VideoBackground videoId = {id} />
    </div>
  )
}

export default MainContainer;
