import React from 'react'

const Videotitle = (props) => {

  const {title, movieOverview}  = props
  return (
    <div className='  w-screen aspect-video pt-[13%] text-white px-12 h-[800px]  absolute bg-gradient-to-r from-black'>
      <h1 className='text-6xl font-bold '>{title}</h1>
      <p className=' hidden md:inline-block py-6 text-base w-1/4 '>{movieOverview}</p>
      <div className='my-4 md:m-0'>
        <button className='bg-gray-500 text-white md:p-4 px-12 text-xl bg-opacity-50 rounded-lg'>Play</button>      
        <button className='bg-gray-500 text-white mx-2 p-4 px-12 text-xl bg-opacity-50 rounded-lg hidden md:inline-block'>More Info</button>  
      </div>
    </div>
  )
}

export default Videotitle
