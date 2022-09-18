import { FiChevronRight, FiChevronLeft } from 'react-icons/fi';
import { useState } from 'react';
import guitar from './images/Guitar.jpg'
import gaming from './images/gaming.jpg'
import psychology from './images/Psychology.jpg'
import writing from './images/Writing.jpg'
import reading from './images/Reading.jpg'


function Slider() {
  const images = [ psychology,gaming, guitar,  writing, reading];
  const [activeSlide, setActiveSlide] = useState(1);

  const prevSliderHandler = (index) => {
    if (index === 0) {
      setActiveSlide(images.length - 1);
    } else if (index > 1) {
      setActiveSlide(activeSlide - 1);
    } else {
      setActiveSlide(images.length - 1);
    }
  };

  const nextSliderHandler = (index) => {
    if (index === images.length - 1) {
      setActiveSlide(1);
    } else if (index < images.length - 1) {
      setActiveSlide(activeSlide + 1);
    } else {
      setActiveSlide(images.length - 1);
    }
  };

  return (
    <div className='h-auto  text-white lg:border-b border-gray-600' name='hobbies'>
        <h1 className='p-16 text-4xl font-bold text-[#00df9a] text-center'>HOBBIES</h1>
    <div className='m-6'>
      {images.map((item, index) => {
        return (
          <div
            key={index}
            className={
              activeSlide === index
                ? 'flex justify-between items-center'
                : 'hidden'
            }
          >
            <button
              className='text-6xl border-2 border-black'
              onClick={() => prevSliderHandler(index)}
            >
              <FiChevronLeft />
            </button>
            <div className=' w-full h-[400px]'>
              <img
                src={item}
                alt='landscape'
                className=' object-cover w-full h-[400px] px-6'
              />
              
            </div>
            <button
              className='text-6xl border-2 border-black'
              onClick={() => nextSliderHandler(index)}
            >
              <FiChevronRight />
            </button>
          </div>
        );
      })}
    </div>
    </div>
  );
}

export default Slider;