import React from 'react'
import { assets } from '../assets/assets'
import { useAppContext } from '../context/AppContext'
import { useRef } from 'react'

const Header = () => {

  const {setInput, input} = useAppContext()
  const inputRef = useRef()

  const onSubmitHandeler = async(e)=> {
    e.preventDefault();
    setInput(inputRef.current.value)
  }

  const onClear = ()=> {
    setInput('')
    inputRef.current.value = ''
  }

  return (
    <div className='mx-8 sm:mx-16 xl:mx-24 ralative'>
        <div className='text-center mt-20 mb-8'>

         <div className='inline-flex items-center justify-center gap-4 px-6 py-1.5 mb-4 border border-blue-700/50 bg-blue-700/10 rounded-full text-sm text-blue-700'>
            <p>New: AI feature integrated</p>
            <img src={assets.star_icon} alt="" className='w-2.5' />
         </div>

         <h1 className='text-3xl sm:text-6xl font-semibold sm:leading-16 text-gray-700'>Your own <span className='text-blue-700'>blogging</span>  <br /> plateform.</h1>
         
         <p className='my-6 sm:my-8 max-w-2xl m-auto max-sm:text-xs text-gray-500'>This is your space to think out loud, to share what matters, and to write without filters. Whether It's one word or a thousand, your story starts right here.</p>
         
          <form onSubmit={onSubmitHandeler} className='flex justify-between max-w-lg max-sm:scale-75 mx-auto border border-gray-300 bg-white rounded overflow-hidden'>
            <input ref={inputRef} type="text" placeholder='search for blogs' required className='w-full pl-4 outline-none' />
            <button type="submit" className='bg-blue-700 text-white px-8 pt-2 m-1.5 rounded hover:scale-105 transition-all cursor-pointer'>Search</button>
          </form>
          
        </div>

        <div className='text-center'>
         {input &&  <button onClick={onClear} className='border font-light text-xs py-1 px-3 rounded-sm shadow-custom-sm cursor-pointer'>Clear Search</button> }
        </div>

       
        <img src={assets.gradientBackground} alt="" className='absolute -top-0.5 -z-1 opacity-50' />
    </div>
  )
}

export default Header