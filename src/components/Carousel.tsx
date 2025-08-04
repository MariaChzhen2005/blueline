import React, { useState } from 'react';

export function CarouselDefault() {
  const images = [
    "https://images.unsplash.com/photo-1497436072909-60f360e1d4b1?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=2560&q=80",
    // "https://images.unsplash.com/photo-1493246507139-91e8fad9978e?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=2940&q=80",
    "https://images.unsplash.com/photo-1518623489648-a173ef7824f3?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=2762&q=80",
  ];
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