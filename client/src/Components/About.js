import React from 'react'
import aboutImg from '../images/about.png'

const About = () => {
  return (
    <div className='flex flex-col md:flex-row justify-evenly m:0 md:mt-2 w-full h-auto'>
      <div className='flex justify-center w-full md:w-1/3  md:mb-0 mb-8 h-auto'>
        <img className='rounded-md w-11/12 h-[440px] sm:h-[600px] md:h-[300px] lg:h-[500px]' src={aboutImg} alt='about'  />
      </div>
      <div className='w-full md:w-3/5 '>
        <p className='text-center font-semibold text-xl sm:text-2xl md:text-3xl text-blue-600 mx-2'>Who am I?</p>
        <div className='flex flex-col mt-2 md:mt-6 p-2  h-auto'>
          <p className='font-bold text-2xl sm:text-3xl md:text-4xl mb-1 md:mb-2'>Hi, I'm Ashanur Hossain.</p>
          <p className='text-base sm:text-lg md:text-xl'>I am from West Bengal, India.</p>
          <p className='text-base sm:text-lg md:text-xl mb-2'>As a passionate MERN stack developer with over 8 months of experience, I find immense joy in the world of web development and the ever-evolving technologies that come with it. Building dynamic and efficient applications is not just a profession but a creative outlet that allows me to shape ideas into reality, while constantly challenging and expanding my skills.</p>
          <p className='text-base sm:text-lg md:text-xl mb-2'>Apart from my love for coding, I have another fulfilling role as a mathematics teacher for class nine and ten students. Guiding young minds and helping them on their educational journey.</p>
          <p className='text-base sm:text-lg md:text-xl mb-2'>In my leisure time, I spend time with my family.</p>
          <p className='text-base sm:text-lg md:text-xl mb-4'>Programming is not merely a job; it's a genuine passion of mine. The thrill of solving complex problems and the satisfaction of creating elegant solutions keep me motivated and inspired.</p>
        </div>
      </div>

    </div>
  )
}

export default About