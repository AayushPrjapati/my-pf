import { useState, useEffect } from 'react';


const HomeSection = ({ setActiveSection }) => {
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    // Set a timer to start the animation 
    const timer = setTimeout(() => {
      setIsVisible(true);
    }, 500);
    // Cleanup the timer
    return () => clearTimeout(timer);
  }, []);

  return (
    <div className="text-center w-full max-w-4xl mx-auto p-8">
      <div className="flex flex-col lg:flex-row items-center justify-center space-y-8 lg:space-y-0 lg:space-x-12">
        {/* Profile Picture */}
        <div
          className={`relative w-80 h-80 lg:w-96 lg:h-96 rounded-full overflow-hidden flex-shrink-0 transition-all duration-700 ease-in-out transform ${isVisible ? 'translate-y-0 opacity-100' : 'translate-y-12 opacity-0'}`}
          style={{ transitionDelay: '0s' }}
        >
          <img
            src="./prflpic.jpg"
            alt="Aayush Prajapati"
            className="absolute inset-0 w-full h-full object-cover"
          />
        </div>

        {/* Introduction */}
        <div className="text-left max-w-md">
          <div
            className={`transition-all duration-700 ease-in-out transform ${isVisible ? 'translate-y-0 opacity-100' : 'translate-y-12 opacity-0'}`}
            style={{ transitionDelay: '0.2s' }}
          >
            <h1 className="text-6xl font-bold text-gray-800">Hello</h1>

            <h2 className="text-2xl font-semibold text-gray-600 mt-2">A Bit About Me</h2>
            <p className="text-gray-500 font-sans font-light text-gray-800 mt-4 leading-relaxed">
              Welcome to my portfolio, where I showcase the projects I've built, the skills I'm learning, and the goals I'm working toward. It's a space to share my growth and creativity while giving you a glimpse of the real me.
            </p>
          </div>

          {/* Action Buttons */}
          <div className="flex justify-center lg:justify-start space-x-4 mt-6">
            {/* Resume */}
            <button
              onClick={() => setActiveSection('resume')}
              className={`w-28 h-28 rounded-full flex items-center justify-center font-semibold ring-2 ring-orange-400 bg-orange-500 text-white transform transition ease-out duration-500 delay-[400ms] hover:delay-0 hover:scale-105 hover:bg-white hover:text-black ${isVisible ? 'translate-y-0 opacity-100' : 'translate-y-12 opacity-0'}`}
            >
              Resume
            </button>

            {/* Projects */}
            <button
              onClick={() => setActiveSection('projects')}
              className={`w-28 h-28 rounded-full flex items-center justify-center font-semibold ring-2 ring-red-400 bg-red-500 text-white transform transition ease-out duration-500 delay-[600ms] hover:delay-0 hover:scale-105 hover:bg-white hover:text-black ${isVisible ? 'translate-y-0 opacity-100' : 'translate-y-12 opacity-0'}`}
            >
              Projects
            </button>

            {/* Contact */}
            <button
              onClick={() => setActiveSection('contact')}
              className={`w-28 h-28 rounded-full flex items-center justify-center font-semibold ring-2 ring-cyan-400 bg-cyan-500 text-white transform transition ease-out duration-500 delay-[800ms] hover:delay-0 hover:scale-105 hover:bg-white hover:text-black ${isVisible ? 'translate-y-0 opacity-100' : 'translate-y-12 opacity-0'}`}
            >
              Contact
            </button>

          </div>
        </div>
      </div>
    </div>
  );
};

export default HomeSection;
