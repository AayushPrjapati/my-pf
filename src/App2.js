import React, { useState, useEffect } from 'react';
import { Github, Linkedin, Twitter } from 'lucide-react';

const Portfolio = () => {
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    const timer = setTimeout(() => setIsVisible(true), 500);
    return () => clearTimeout(timer);
  }, []);

  return (
    <div className="min-h-screen bg-gray-100 px-4 sm:px-6 lg:px-8">
      {/* Header Navigation */}
      <header className="bg-white border-b border-gray-200 py-4">
        <nav className="max-w-7xl mx-auto flex justify-between items-center">
          <div className="flex items-center space-x-2">
            <div className="w-8 h-8 bg-orange-500 rounded-full flex items-center justify-center">
              <span className="text-white font-bold text-sm">A</span>
            </div>
            <span className="font-semibold text-gray-800">Aayush Prajapati</span>
          </div>
          <div className="flex space-x-6">
            <a href="#resume" className="text-gray-600 hover:text-gray-800 transition-colors">Resume</a>
            <a href="#projects" className="text-gray-600 hover:text-gray-800 transition-colors">Projects</a>
            <a href="#contact" className="text-gray-600 hover:text-gray-800 transition-colors">Contact</a>
            <a href="#portfolio" className="text-gray-600 hover:text-gray-800 transition-colors">Portfolio</a>
          </div>
        </nav>
      </header>

      {/* Main Content */}
      <main className="max-w-7xl mx-auto px-6 py-16">
        <div className="flex flex-col lg:flex-row items-center justify-between gap-12">
          {/* Profile Section */}
          <div className="flex-1 text-center lg:text-left">
            <div className="mb-8">
              <img 
                src="/api/placeholder/300/300" 
                alt="Aayush Prajapati"
                className="w-72 h-72 rounded-full mx-auto lg:mx-0 object-cover border-8 border-white shadow-xl bg-gradient-to-br from-blue-200 to-blue-400"
              />
            </div>
          </div>

          {/* Content Section */}
          <div className="flex-1 space-y-8">
            <div>
              <h1 className="text-6xl lg:text-8xl font-bold text-gray-800 mb-4">Hello</h1>
              <h2 className="text-2xl font-semibold text-gray-700 mb-6">A Bit About Me</h2>
              <p className="text-gray-600 text-lg leading-relaxed max-w-xl">
                Welcome to my portfolio, where I showcase the projects I've built, the skills I'm learning, and the goals I'm working toward. It's a space to share my growth and creativity while giving you a glimpse of the real me.
              </p>
            </div>

            {/* Action Buttons */}
            <div className="flex flex-wrap gap-4">
              <button className="w-24 h-24 bg-orange-500 hover:bg-orange-600 text-white font-semibold rounded-full transition-all duration-200 hover:scale-105 shadow-lg">
                Resume
              </button>
              <button className="w-24 h-24 bg-red-500 hover:bg-red-600 text-white font-semibold rounded-full transition-all duration-200 hover:scale-105 shadow-lg">
                Projects
              </button>
              <button className="w-24 h-24 bg-teal-500 hover:bg-teal-600 text-white font-semibold rounded-full transition-all duration-200 hover:scale-105 shadow-lg">
                Contact
              </button>
            </div>
          </div>
        </div>
      </main>

      {/* Footer */}
      <footer className="bg-white border-t border-gray-200 px-6 py-8 mt-16">
        <div className="max-w-7xl mx-auto grid grid-cols-1 md:grid-cols-3 gap-8">
          {/* Phone */}
          <div>
            <h3 className="font-semibold text-gray-800 mb-2">Phone</h3>
            <p className="text-gray-600">+91 9879401314</p>
          </div>

          {/* Email */}
          <div>
            <h3 className="font-semibold text-gray-800 mb-2">Email</h3>
            <p className="text-gray-600">prajapati.aayush501@gmail.com</p>
          </div>

          {/* Social Links */}
          <div>
            <h3 className="font-semibold text-gray-800 mb-2">Follow Me</h3>
            <div className="flex space-x-3">
              <a href="#" className="w-8 h-8 bg-gray-800 rounded-full flex items-center justify-center hover:bg-gray-700 transition-colors">
                <Github className="w-4 h-4 text-white" />
              </a>
              <a href="#" className="w-8 h-8 bg-blue-600 rounded-full flex items-center justify-center hover:bg-blue-700 transition-colors">
                <Linkedin className="w-4 h-4 text-white" />
              </a>
              <a href="#" className="w-8 h-8 bg-gray-800 rounded-full flex items-center justify-center hover:bg-gray-700 transition-colors">
                <Twitter className="w-4 h-4 text-white" />
              </a>
            </div>
          </div>
        </div>

        {/* Copyright */}
        <div className="max-w-7xl mx-auto mt-8 pt-6 border-t border-gray-200 text-center text-gray-500">
          <p>© 2025 Aayush Prajapati. Portfolio Website.</p>
        </div>
      </footer>
    </div>
  );
};

export default Portfolio;