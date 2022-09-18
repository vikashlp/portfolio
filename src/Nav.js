import React, {useState} from 'react'
import {AiOutlineClose, AiOutlineMenu} from 'react-icons/ai'
import {Link} from 'react-scroll'



const Nav = () => {
  const [nav, setNav] = useState(false);

  const handleNav = () => {
    setNav(!nav);
  };

  const handleClose =()=> setNav(!nav)

  return (
   
 <div className=' w-full flex justify-between items-center h-24 fixed top-0 mx-auto bg-black text-white'>
      <h1 className='text-4xl  font-bold text-[#00df9a]  pt-4 pl-12 cursor-pointer'><Link to="home" smooth={true} offset={50} duration={500} >PORTFOLIO</Link></h1>
      <ul className='hidden lg:flex cursor-pointer'>
        <li className='p-4 hover:scale-110 ease-in-out duration-100'><Link to="home" smooth={true} offset={50} duration={500} >Home</Link></li>
        <li className='p-4 hover:scale-110 ease-in-out duration-100'><Link to="about" smooth={true} offset={50} duration={500} >About me</Link></li>
        <li className='p-4 hover:scale-110 ease-in-out duration-100'><Link to="projects" smooth={true} offset={50} duration={500} >Projects</Link></li>
        <li className='p-4 hover:scale-110 ease-in-out duration-100'><Link to="hobbies" smooth={true} offset={50} duration={500} >Hobbies</Link></li>
        <li className='p-4 hover:scale-110 ease-in-out duration-100'><Link to="contacts" smooth={true} offset={50} duration={500} >Contact</Link></li>
      
      </ul>
      <div onClick={handleNav} className='block lg:hidden pr-10'>
          {nav ? <AiOutlineClose size={50}/> : <AiOutlineMenu size={50} />}
      </div>
      <ul className={nav ? 'fixed left-0 top-0 w-[55%] h-full border-r border-r-gray-900 bg-[#000300] ease-in-out duration-500' : 'ease-in-out duration-500 fixed left-[-100%]'}>
        <h1 className='text-4xl  font-bold text-[#00df9a]  pt-10 pl-12'>PORTFOLIO</h1>
          <li className='p-12 mt-8 border-b border-gray-600 text-4xl'><Link  onClick={handleClose} to="home" smooth={true} offset={50} duration={500} >HOME</Link></li>
          <li className='p-12 border-b border-gray-600 text-4xl'><Link  onClick={handleClose} to="about" smooth={true} offset={50} duration={500} >ABOUT ME</Link></li>
          <li className='p-12 border-b border-gray-600 text-4xl'><Link  onClick={handleClose} to="projects" smooth={true} offset={50} duration={500} > PROJECTS</Link></li>
          <li className='p-12 border-b border-gray-600 text-4xl'><Link  onClick={handleClose} to="hobbies" smooth={true} offset={50} duration={500} > HOBBIES</Link></li>
          <li className='p-12 border-b border-gray-600 text-4xl'><Link  onClick={handleClose} to="contacts" smooth={true} offset={50} duration={500} > CONTACT US</Link></li>
          
      </ul>
    </div>
   
  );
};







export default Nav



