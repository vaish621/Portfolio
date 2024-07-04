// src/Home.js
import React from 'react';
import { Link } from 'react-router-dom';
import typingVideo from './946146-hd_1920_1080_30fps.mp4'; // Import your typing video
import 'animate.css';
import { Typewriter } from 'react-simple-typewriter';

const Home = () => {
  return (
    <div className="relative min-h-screen overflow-hidden">
      <video autoPlay muted loop className="absolute inset-0 object-cover w-full h-full" style={{ zIndex: -1 }}>
        <source src={typingVideo} type="video/mp4" />
        Your browser does not support the video tag.
      </video>
      <div className="absolute inset-0 flex flex-col justify-center items-center bg-black bg-opacity-75 text-white">
        <div className="absolute top-0 left-25 ext-white text-md md:text-1xl lg:text-1xl xl:text-1xl font-bold p-4">
          <Link to="/about">ABOUT</Link>
        </div>
        
        <div className="absolute bottom-0 left-25 text-white text-md md:text-1xl lg:text-1xl xl:text-1xl font-bold p-4">
          <Link to="/mywork">MYWORK</Link>
        </div>
        <div className="absolute left-0 left-25 ext-white text-md md:text-1xl lg:text-1xl xl:text-1xl font-bold p-4"> <Link to="/contact">CONTACT</Link></div>
        <div className="absolute right-0 left-25 ext-white text-md md:text-1xl lg:text-1xl xl:text-1xl font-bold p-4"><Link to="/techskills">TECHSTACK</Link></div>
        <div className="text-center text-white mt-4">
          <h2 className="text-3xl md:text-4xl lg:text-5xl xl:text-6xl mb-4 font-bold">Hello! <span role="img" aria-label="hi">👋</span></h2>
          <p className="text-lg md:text-xl lg:text-2xl mb-8">
            <Typewriter
              words={['I am Vaishnavi']}
              loop={0}
              cursor
              cursorStyle='_'
              typeSpeed={70}
              deleteSpeed={50}
              delaySpeed={1000}
            />
          </p>
          {/* Additional content or navigation buttons */}
        </div>
      </div>
    </div>
  );
}

export default Home;