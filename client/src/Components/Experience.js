import React from 'react'

const Experience = () => {
  return (
    <div className='flex flex-col m-4 h-auto'>

      <div className='w-full'>
        <p className='text-center font-semibold text-xl sm:text-2xl md:text-3xl text-blue-600 mx-2 hover:animate-bounce'>Experience</p>
      </div>
      <div className='my-4 flex flex-col md:flex-row  justify-evenly'>
        <div className='w-full md:w-3/5 '>
          <p className='text-base md:text-xl'>I am delighted to share my enriching experience as a Full Stack Developer with a strong foundation in <span className='font-semibold'>HTML5</span>, <span className='font-semibold'>CSS3</span>, and JavaScript. Over the past six months, I have honed my skills in a variety of technologies, including <span className='font-semibold'>Javascript,Typescript,MongoDB, Node.js, Express.js, React.js, caching, AWS S3, Tailwind CSS, and Redux</span> . Throughout my journey, I have successfully completed over ten projects, including several team collaborations, which have provided me with valuable experience in working effectively as part of a team. These projects have not only allowed me to apply my technical knowledge but have also given me a profound understanding of the importance of teamwork and communication in achieving outstanding results. I am excited to continue my growth as a Full Stack Developer and look forward to taking on new challenges in the world of web development.</p>
        </div>
        <div className='border border-gray-400 w-full md:w-1/3 h-auto mt-8 md:mt-0 flex flex-wrap justify-evenly items-center hover:shadow-xl'>
          <div className=' bg-indigo-50 w-[160px] md:w-[200px] h-[100px] shadow-lg m-1 p-1 flex flex-col items-center justify-evenly '>
            <p className='text-2xl text-blue-600'>8+ months</p>
            <p className='text-xl'>Experience</p>
          </div>
          <div className=' bg-indigo-50 w-[160px] md:w-[200px] h-[100px] shadow-lg m-1 p-1 flex flex-col items-center justify-evenly '>
            <p className='text-2xl text-blue-600'>10+ projects</p>
            <a className='text-xl hover:text-blue-500 duration-500 cursor-pointer' href='https://github.com/AshanurHossain0?tab=repositories' target='_blank'>view projects</a>
          </div>
        </div>
      </div>

    </div>
  )
}

export default Experience



