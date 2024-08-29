import React from 'react';
import IMG from '../assets/hero-image.webp'
import story from '../assets/story.png'
import story2 from '../assets/story-2.png'

const Hero: React.FC = () => {
  return (
    <section className="relative bg-gradient-to-r from-sky-500/75 to-green-400 h-[89vh]">
      <div className="absolute inset-0 overflow-hidden">
        <img
          src={IMG}
          alt="Himalayas Background"
          className="w-full h-[700px] object-cover mix-blend-overlay"
        />
      </div>
      <div className="container mx-auto relative z-10 flex flex-col items-start justify-center h-full p-8">
        <h1 className="text-white text-4xl md:text-5xl font-bold leading-tight mb-6 w-[780px] mt-[100px]">
          Delivering Values;<br />
          From The Country Of Himalayas
        </h1>
        <p className="text-white text-lg md:text-xl mb-8">
          We transform businesses with powerful and adaptable digital solutions that<br />
          satisfy the needs of today and unlock the opportunities of tomorrow.
        </p>
        <div className="flex items-center mt-10">
          <div className="flex space-x-2">
            <img
              src={story2}
              alt="Icon 1"
              className="h-12 w-12 rounded-full"
            />
            <img
              src={story}
              alt="Icon 2"
              className="h-12 w-12 rounded-full"
            />
          </div>
          <button className='ml-6 px-6 py-3 bg-white text-blue-600 font-semibold rounded-full shadow hover:bg-gray-100 transition'>Let's Work Together</button>
        </div>
      </div>
    </section>
  );
};

export default Hero;
