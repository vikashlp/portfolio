import React from 'react'
import Laptop from './images/laptop.jpg'

const Mid = () => {
  return (
    <div className='w-full text-white py-16 px-4 lg:border-b border-gray-600' name='about'>
      <div className='max-w-[1240px] mx-auto lg:grid-cols-2 grid lg:h-[435px] sm:h-[800px]'>
        <img className='lg:w-[500px] sm:w-[800px] mx-auto lg:mt-16 sm:mt-0' src={Laptop} alt='/'></img>
        <div className='flex flex-col justify-center lg:pt-0 sm:pt-10'>
          <p className='text-[#00df9a] font-bold lg:text-4xl sm:text-4xl lg:text-left sm:text-center lg:mt-0 sm:mt-10'>ABOUT ME</p>
          <h1 className=' lg:text-4xl sm:text-4xl py-2 lg:text-left sm:text-center lg:mt-0 sm:mt-10'>SOFTWARE DEVELOPER</h1>
          <p className='lg:text-2xl sm:text-4xl lg:mt-0 sm:mt-10 lg:px-0 sm:px-5 '> I am a B.E/I.T graduate with a passion for developing scalable web application and Working across Full stack.
            I am looking to join a team with trending technology to continue to grow my skill set white contributing to the positive outcome of the Firm.</p>
        </div>
      </div>

    </div>
  )
}

export default Mid
