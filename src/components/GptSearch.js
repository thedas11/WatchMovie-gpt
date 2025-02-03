import React from 'react'
import GptSearchBar from './GptSearchBar'
import { BG_URL } from '../utils/constants'
import Header from './Header'

const GptSearch = () => {
  return (
    <div className='w-screen   '>
      <div className='absolute -mt-10'>
        <img
          className="w-[100vw] object-contain"
          src= {BG_URL}
        />
        </div>
      <div className='mt-10 pt-[30%] md:p-0' >
        <GptSearchBar />
      </div>
    </div>
  )
}

export default GptSearch
