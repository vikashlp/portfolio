import React from 'react'
import Typed from 'react-typed'
import { Link } from 'react-scroll'


const Home = () => {
  return (
    <div className='text-white' name='home' >
      <div className='max-w-[800px] mt-[100px] lg:h-[525px] sm:h-[1900px] w-full mx-auto text-center flex flex-col justify-center' >
        <p className='text-[#00df9a] font-bold p-2 lg:text-4xl sm:text-5xl '>MERN STACK DEVELOPER</p>
        <h1 className='lg:text-7xl sm:text-8xl font-bold md:py-6 '>VIKASH PRASAD</h1>

        <div className='flex justify-center'>
          <p className='lg:text-4xl sm:text-4xl text-xl py-4 '>Proficient in:</p>

          <Typed
            className='lg:text-4xl sm:text-4xl text-xl lg:pl-4 pl-2 py-4'
            strings={['HTML5', 'CSS', 'JavaScript', 'ReactJS', 'NodeJS', 'ExpressJS', 'MongoDB']} typeSpeed={120} backSpeed={100} loop />
        </div>
        <div>
          <p className='text-3xl font-bold text-gray-500 py-4'> Build website for your Business.</p>
          <button className='bg-[#00df9a] w-[200px] rounded-md font-medium my-6 mx-auto py-3 text-black text-3xl'><Link to="contacts" smooth={true} offset={50} duration={500} >Contact us</Link></button>
        </div>
        <hr></hr>
      </div>
    </div>
  )
}

export default Home
