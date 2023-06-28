import React from 'react'
import GitHubIcon from '@mui/icons-material/GitHub';
import LinkedInIcon from '@mui/icons-material/LinkedIn';
import FacebookIcon from '@mui/icons-material/Facebook';
import Button from '@mui/material/Button';
import profileImg from '../images/profile.png'


const Home = () => {
  return (
    <div>
      <div className='border border-slate-900 flex flex-wrap'>
        <div className='border border-red-900 ' >
          <GitHubIcon/>
          <LinkedInIcon/>
          <FacebookIcon />
        </div>
          
        <div className='border border-indigo-900'>
          <p>Hi I'm Ashanur</p>
          <p>A Passionate Fullstack</p>
          <p>Developer from India</p>
          <p>High level experience in web design and development</p>
          <Button variant="contained">Contained</Button>
        </div>

        <div className='border border-green-900'>
          <img className='w-[200px]' src={profileImg} alt="my-image" />
        </div>
      </div>
    </div>
  )
}

export default Home