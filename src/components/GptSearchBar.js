import React, { useRef } from 'react'
import lang from '../utils/languageConstants'

import {useSelector} from 'react-redux'
const GptSearchBar = () => {

  const gptSearchText = useRef(null)


  const langType = useSelector((store => store?.lang?.lang))

  const handleGptSearchClick = async (e)=>{

  e.preventDefault()

  
  
  }

  return (
<div className='pt-[20%] flex justify-center z-30 relative md:pt-[10%]'>
    <form className='w-1/2 bg-black grid grid-cols-12 md:w-1/2 '>
      <input ref={gptSearchText} type='text' placeholder= {lang[langType]?.placeholder} className='p-4 m-4 col-span-9'  />
      <button onClick={handleGptSearchClick} className='col-span-3 py-2 px-4 m-4 rounded-lg relative h-[50px] w-40 overflow-hidden border border-pink-400 bg-white text '>{lang[langType]?.search}</button>
    </form>
</div>
  )
}

export default GptSearchBar;
