import React from 'react'
import { useTypewriter, Cursor } from 'react-simple-typewriter'

import GitHubIcon from '@mui/icons-material/GitHub';
import LinkedInIcon from '@mui/icons-material/LinkedIn';
import FacebookIcon from '@mui/icons-material/Facebook';
import Button from '@mui/material/Button';
import SendIcon from '@mui/icons-material/Send';
import ComputerIcon from '@mui/icons-material/Computer';
import SchoolIcon from '@mui/icons-material/School';

import Perform from './Perform';

import profileImg from '../images/profile.png'
import welcome from '../images/welcome.png'


const Home = () => {

  const [text] = useTypewriter({
    words: ['Fullstack Developer', 'Web Designer', 'Youtuber'],
    loop: {},
    typeSpeed: 100,
    deleteSpeed: 30
  })

  return (
    <div className=''>
      <div className='w-11/12   m-auto flex items-center justify-center' >
        <img className=' w-10 h-auto md:w-16' src={welcome} alt="welcome-img1" />
        <p className='border-dotted border-b-[1px] border-slate-900 text-center p-2 font-semibold text-xl md:text-3xl text-blue-600 mx-2'>Welcome to My World</p>
        <img className=' w-10 h-auto md:w-16' src={welcome} alt="welcome-img2" />
      </div>
      <div className='  flex flex-col items-center gap-6 md:flex-row md:justify-between flex-wrap w-11/12 m-auto md:gap-2 my-4 p-1'>
        <div className='flex gap-4 '>
          <div className='flex flex-col gap-6 p-1' >
            <a href='https://github.com/AshanurHossain0' target='blank'><GitHubIcon style={{ fontSize: '40px' }} /></a>
            <a href='https://www.linkedin.com/in/ashanur-hossain-545381214/' target='blank'><LinkedInIcon style={{ fontSize: '40px' }} /></a>
            <a href='https://www.facebook.com/ashanur.hossain.984' target='blank'><FacebookIcon style={{ fontSize: '40px' }} /></a>
          </div>

          <div className=' flex flex-col justify-between p-2'>
            <div>
              <p className='font-bold text-3xl md:text-5xl mb-4'>Hi, I'm Ashanur</p>
              <p className='text-2xl md:text-3xl'>A Passionate & Curious</p>
              <p><span className='text-2xl md:text-3xl text-purple-600'>{text}</span><span className='text-3xl  text-purple-600'><Cursor /></span> </p>
              <p className='text-2xl md:text-3xl'>From India</p>
              <p className='md:text-xl mt-1 mb-4'>High level experience in web design and development</p>
            </div>
            <div>
              <Button className='h-[30px] md:h-[36px] w-[170px]' variant="contained" href="mailto:ashanurhossain0@gmail.com" target='blank' endIcon={<SendIcon />}>Contact Me</Button>
            </div>
          </div>
        </div>

        <div>
          <img className=' w-[300px] md:w-[400px] bg-indigo-50 h-auto rounded-full  p-1' src={profileImg} alt="my-image" />
        </div>
      </div>
      {/* Education and skills */}

      <div className='border border-indigo-300 my-6 md:my-10'></div>
      <div className=' border border-red-500 flex flex-col gap-4 md:gap-0  md:flex-row  my-6 mx-2 md:my-8 md:mx-4'>
        <div className='border border-green-500  w-full md:w-2/4 '>
          <div className='border border-red-900 flex justify-center items-center h-8 md:h-10 w-full'>
            <SchoolIcon style={{ fontSize: "26px", color: "rgb(37 99 235)" }} />
            <p className=' text-center p-2 font-semibold text-xl md:text-3xl text-blue-600 mx-2'>Education</p>
          </div>
          <div>
            <div className='bg-indigo-50 p-2 m-1 border border-gray-400 rounded-3xl mt-2'>
              <p className=' flex justify-between '><a href='https://makautwb.ac.in/' target='blank' className='text-blue-400 hover:text-blue-500 duration-500 font-semibold md:text-xl'><span>MAKAUT</span></a> <span className='md:text-[18px]'>[July,2018 - July,2022]</span></p>
              <p><a className=' font-semibold md:text-xl text-blue-400  hover:text-blue-500 duration-500' href="http://cgec.org.in/" target='blank'>Cooch Behar Government Engineering College</a></p>
              <p className='text-[15px] md:text-[20px] flex justify-between' >B.Tech in Electronics & Communication</p>
              <p className='text-[15px] md:text-[20px]'>Securing <span className='font-semibold'>8.58</span> CGPA</p>
            </div>
            <div className='bg-indigo-50 p-2 m-1 border border-gray-400 rounded-3xl mt-1'>
              <p className=' flex justify-between '><a href='https://wbchse.wb.gov.in/' target='blank' className='text-blue-400 hover:text-blue-500 duration-500 font-semibold md:text-xl'><span>WBCHSE</span></a> <span className='md:text-[18px]'>[June,2016 - May,2018]</span></p>
              <p><a className=' font-semibold md:text-xl text-blue-400  hover:text-blue-500 duration-500' href="https://school.banglarshiksha.gov.in/ws/website/index/19030408602" target='blank'>Natabari High School</a></p>
              <p className='text-[15px] md:text-[20px] flex justify-between' >Higher Secondary in Science</p>
              <p className='text-[15px] md:text-[20px]'>Securing <span className='font-semibold'>81.60</span> Percentage</p>
            </div>
            <div className='bg-indigo-50 p-2 m-1 border border-gray-400 rounded-3xl mt-1'>
              <p className=' flex justify-between '><a href='https://wbbse.wb.gov.in/Web/Home?l=Z%2F%2F2JeEw6P%2FkXiUjdLauQg%3D%3D' target='blank' className='text-blue-400 hover:text-blue-500 duration-500 font-semibold md:text-xl'><span>WBBSE</span></a> <span className='md:text-[18px]'>[Jan,2010 - May,2016]</span></p>
              <p><a className=' font-semibold md:text-xl text-blue-400  hover:text-blue-500 duration-500' href="https://school.banglarshiksha.gov.in/ws/website/index/19030409002" target='blank'>Bhelapeta High School</a></p>
              <p className='text-[15px] md:text-[20px] flex justify-between' ><span>Madhyamik (10<sup>th</sup>)</span></p>
              <p className='text-[15px] md:text-[20px]'>Securing <span className='font-semibold'>77.00</span> Percentage</p>
            </div>
          </div>
        </div>

        <div className='border border-green-500  w-full md:w-2/4'>
          <div className='border border-red-900 flex justify-center items-center h-8 md:h-10 w-full'>
            <ComputerIcon style={{ fontSize: "26px", color: "rgb(37 99 235)" }} />
            <p className=' text-center p-2 font-semibold text-xl md:text-3xl text-blue-600 mx-2'>Skills</p>
          </div>
          <div className='m-2 flex flex-wrap gap-2'>
            <div className=' border border-red-900 rounded-md w-36 bg-indigo-50 h-auto flex flex-col items-center p-1'>
              <Perform elId="cpp"  performance={85} src="https://img.icons8.com/color/480/c-plus-plus-logo.png" alt="cpp-logo" />
              <p className='text-xl  md:text-2xl text-blue-600'>C++</p>
            </div>
            <div className=' border border-red-900 rounded-md w-36 bg-indigo-50 h-auto flex flex-col items-center p-1'>
              <Perform elId="java" performance={75} src="https://img.icons8.com/color/480/java-coffee-cup-logo--v1.png" alt="java-logo" />
              <p className='text-xl  md:text-2xl text-blue-600'>Java</p>
            </div>
            <div className=' border border-red-900 rounded-md w-36 bg-indigo-50 h-auto flex flex-col items-center p-1'>
              <Perform elId="js"  performance={92} src="https://img.icons8.com/ios-filled/50/000000/javascript-logo.png" alt="js-logo" />
              <p className='text-xl  md:text-2xl text-blue-600'>Javascript</p>
            </div>
          </div>
        </div>
      </div>




    </div>
  )
}

export default Home