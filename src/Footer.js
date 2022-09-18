import React from 'react';
import {
   
    FaFacebookSquare,
    FaGithubSquare,
    FaInstagram,
    FaTwitterSquare,
} from 'react-icons/fa';

const Footer = () => {
    return (
        <div className='max-w-[1240px] mx-auto py-10 px-14 grid lg:grid-cols-3 gap-8 text-gray-300' name='contacts'>
            <div>
                <h1 className='w-full text-4xl font-bold text-[#00df9a]'>CONTACT</h1>
              
                <p className='mt-8 lg:text-xl sm:text-[30px]'>Email:- <span>prasadvikash6@gmail.com</span></p>
                <div className='flex justify-between md:w-[75%] my-6'>
                    <a href = "https://facebook.com"><FaFacebookSquare size={30} /></a>
                    <a href = "https://instagram.com"><FaInstagram size={30} /></a>
                    <a href = "https://github.com/vikashlp"><FaGithubSquare size={30} /></a>
                    <a href = "https://twitter.com"> <FaTwitterSquare size={30} /></a>
                </div>
                <p className='lg:text-xl sm:text-[30px] pt-4'> © Vikash Prasad</p>
            </div>
        </div>

    );
};

export default Footer;