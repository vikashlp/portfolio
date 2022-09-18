import React from 'react';
import pro5 from './images/project5.jpeg'
import pro8 from './images/project8.jpg'
import pro6 from './images/project6.jpg'
import pro7 from './images/project7.jpg'


const Project = () =>{

    return(

        <div className='text-white h-auto lg:mt-20 sm:mt-40 lg:border-b border-gray-600' name = 'projects'>
            <div>
            <h1 className='text-4xl font-bold text-[#00df9a] text-center p-2 '>MY PROJECTS</h1>

            </div>

            <div className='grid sm:grid-cols-1 lg:grid-cols-2 gap-4 p-16 m-8'>
                <div className='container p-2'>
                    <a href = 'https://vikashlp.github.io/musclegym'><img src={pro5} alt='/' className='hover:scale-110 ease-in-out duration-300' /></a>
                    <p className='text-center text-xl font-bold pt-6'>Muscle up Gym</p>
                </div>
                <div className='container p-2'>
                <a href = 'https://vikashlp.github.io/musclegym'><img src={pro8} alt='/' className='hover:scale-110 ease-in-out duration-300'/></a>
                    <p className='text-center text-xl font-bold pt-6'>Muscle up Gym</p>
                </div>
                <div className='container p-2 '>
                    <img src={pro6} alt='/' className='hover:scale-110 ease-in-out duration-300' />
                    <p className='text-center text-xl font-bold pt-6'>Drycleaner Boys</p>
                </div>
                <div className='container p-2'>
                    <img src={pro7} alt='/' className='hover:scale-110 ease-in-out duration-300' />
                    <p className='text-center text-xl font-bold pt-6'>Drycleaner Boys</p>
                </div>

            </div>
            
        </div>
    )
}

export default Project;