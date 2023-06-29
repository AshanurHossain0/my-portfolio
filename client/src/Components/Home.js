import React from 'react'
import {useTypewriter,Cursor} from 'react-simple-typewriter'

import GitHubIcon from '@mui/icons-material/GitHub';
import LinkedInIcon from '@mui/icons-material/LinkedIn';
import FacebookIcon from '@mui/icons-material/Facebook';
import Button from '@mui/material/Button';
import SendIcon from '@mui/icons-material/Send';
import profileImg from '../images/profile.png'


const Home = () => {

  const [text]=useTypewriter({
    words:['Fullstack Developer','Web Designer','Youtuber'],
    loop:{},
    typeSpeed:150,
    deleteSpeed:50
  })

  return (
    <div>
      <div className='w-11/12 border border-red-700 my-2 m-auto' >
        <p className='text-center p-2 font-semibold text-xl md:text-3xl'>Welcome to My World</p>
      </div>
      <div className='border border-slate-900 flex flex-col items-center gap-6 md:flex-row md:justify-between flex-wrap w-11/12 m-auto md:gap-2 mt-4'>
        <div className='flex gap-4'>
          <div className='flex flex-col gap-6 p-1' >
            <a href='https://github.com/AshanurHossain0' target='blank'><GitHubIcon style={{ fontSize: '40px' }} /></a>
            <a href='https://www.linkedin.com/in/ashanur-hossain-545381214/' target='blank'><LinkedInIcon style={{ fontSize: '40px' }} /></a>
            <a href='https://www.facebook.com/ashanur.hossain.984' target='blank'><FacebookIcon style={{ fontSize: '40px' }} /></a>
          </div>

          <div className=' flex flex-col justify-between p-2'>
            <div>
              <p className='font-bold text-3xl md:text-5xl mb-4'>Hi, I'm Ashanur</p>
              <p className='text-2xl md:text-3xl'>A Passionate & Curious</p>
              <p><span className='text-2xl md:text-3xl text-purple-600'>{text}</span><span className='text-3xl'><Cursor/></span> </p>
              <p className='text-2xl md:text-3xl'>From India</p>
              <p className='md:text-xl mt-1 mb-4'>High level experience in web design and development</p>
            </div>
            <div>
              <Button className='h-[30px] md:h-[36px] w-[170px]' variant="contained" href="mailto:ashanurhossain0@gmail.com" target='blank' endIcon={<SendIcon />}>Contact Me</Button>
            </div>
          </div>
        </div>

        <div>
          <img className='w-[300px] md:w-[400px] bg-indigo-100 h-auto rounded-full border border-gray-400 p-1' src={profileImg} alt="my-image" />
        </div>
      </div>
    </div>
  )
}

export default Home