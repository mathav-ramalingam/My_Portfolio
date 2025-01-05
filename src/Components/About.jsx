import React from 'react'
import gif from '../assets/Image/gif2.gif'
import { BiSolidDownArrowCircle } from "react-icons/bi";

export const About = () => {
  return (
    <>
    
    <main className='block lg:flex bg-black pb-5'>
      <div className="relative p-14 lg:w-1/2 md:pt-28 ">
          <img src={gif} className="md:max-w-3xl"></img>
             
      </div>

      <div className='lg:w-1/2 bg-green-600'></div>
          <button className="absolute bottom-5 right-5">
                  <BiSolidDownArrowCircle className="size-12 text-black" />
          </button>
    </main>
    </>
  )
}
