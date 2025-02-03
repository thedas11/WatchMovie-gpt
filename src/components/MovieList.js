import React from 'react'
import MovieCard from './MovieCard'

const MovieList = (props) => {

    const {title, category} = props
  return (
    <div className='px-6'>
      <h2 className='text-2xl py-2 text-white italic'>{title}</h2>
      <div className='flex whitespace-nowrap flex-shrink-0 overflow-x-auto p-2 no-scrollbar'>
    <div className='flex gap-4  '>
      {category?.map((category)=>(<MovieCard key={category.id} posterPath={category.poster_path} movieId={category.id}/>))}
      </div>
      </div>
    </div>
  )
}

export default MovieList
