import React from 'react'
import aboutImg from '../images/about.png'

const About = () => {
  return (
    <div className='flex flex-col md:flex-row justify-evenly m:0 md:mt-2 w-full'>
      <div className='flex justify-center w-full md:w-1/3 h-auto md:mb-0 mb-2'>
        <img className='rounded-md w-11/12' src={aboutImg} alt='about' />
      </div>
      <div className='w-full md:w-3/5 bg-indigo-50 border border-red-600 '>
        <p className='text-center font-semibold text-xl md:text-3xl text-blue-600 mx-2'>Who am I?</p>
        <div className='flex flex-col md:mt-6 p-2 tracking-wide md:tracking-wider'>
          <p className='font-bold text-2xl md:text-4xl mb-1 md:mb-2'>Hi, I'm Ashanur Hossain.</p>
          <p className='text-lg md:text-2xl'>A Passionate & Curious MERN developer. I am from Cooch Behar , West Bengal</p>
        </div>
      </div>

    </div>
  )
}

export default About