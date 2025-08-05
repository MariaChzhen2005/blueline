import slider1 from '../assets/slider_1.jpeg';
import slider2 from '../assets/slider_2.jpeg';
import slider3 from '../assets/slider_3.jpeg';
import slider4 from '../assets/slider_4.jpeg';
import slider5 from '../assets/slider_5.jpeg';
import slider6 from '../assets/slider_6.jpeg';
import React, { useState } from 'react';

export function CarouselDefault() {
  const images = [slider1, slider2, slider3, slider4, slider5, slider6];
  const [currentIndex, setCurrentIndex] = useState(0);

  const nextSlide = () => {
    setCurrentIndex((prevIndex) => (prevIndex + 1) % images.length);
  };

  const prevSlide = () => {
    setCurrentIndex((prevIndex) => (prevIndex - 1 + images.length) % images.length);
  };

  return (
    <div className="flex items-center justify-center w-full gap-x-[10px] bg-[#ECECEC] py-4">
      <button
        className="text-[#214598] hover:text-[#006BD6] p-[10px] no-underline hover:bg-white/50 rounded-[2px] border border-gray-300"
        onClick={prevSlide}
      >
        &#10094;
      </button>
      <div className="relative w-[70vw]">
        <div className="overflow-hidden relative h-96">
          <div
            className="flex transition-transform duration-500 ease-in-out"
            style={{ transform: `translateX(-${currentIndex * 100}%)` }}
          >
            {images.map((image, index) => (
              <img
                key={index}
                src={image}
                alt={`Slide ${index}`}
                className="w-full object-cover flex-shrink-0"
                style={{ height: '24rem' }}
              />
            ))}
          </div>
        </div>
      </div>
      <button
        className="text-[#214598] hover:text-[#006BD6] p-[10px] no-underline hover:bg-[#ECECEC]/50 rounded-[2px] border border-gray-300"
        onClick={nextSlide}
      >
        &#10095;
      </button>
    </div>
  );
}