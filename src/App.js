import "./output.css"
import { useState, useEffect } from 'react';
import { CodeXml, Mail, Phone, Linkedin, Github, Twitter } from 'lucide-react';

// Tailwind CSS is assumed to be available

// The Header component
const Header = ({ setActiveSection }) => {
  return (
    <header className="fixed top-0 left-0 w-full z-10 bg-[#f3f3f3] shadow-sm">
      <nav className="max-w-7xl mx-auto px-6 py-4 flex justify-between items-center">
        {/* Left side: Logo/Name */}
        <a href="#" onClick={() => setActiveSection('home')} className="flex items-center space-x-2">
          <CodeXml size={24} className="text-orange-500 fill-none" />
          <h4 className="text-[22px] font-worksans font-semibold text-gray-800">
            Aayush Prajapati
          </h4>
        </a>

        {/* Right side: Navigation links */}
        <div className="flex items-center space-x-2 text-gray-600 font-avenir-light">
          <button
            onClick={() => setActiveSection('resume')}
            className="text-base hover:text-orange-500"
          >
            Resume
          </button>
          <span className="text-gray-600">|</span>
          <button
            onClick={() => setActiveSection('projects')}
            className="text-base hover:text-orange-500"
          >
            Projects
          </button>
          <span className="text-gray-600">|</span>
          <button
            onClick={() => setActiveSection('contact')}
            className="text-base hover:text-orange-500"
          >
            Contact
          </button>
          <span className="text-gray-600">|</span>
          <button
            onClick={() => setActiveSection('portfolio')}
            className="text-base hover:text-orange-500"
          >
            Portfolio
          </button>
        </div>
      </nav>
    </header>
  );
};

// The Footer component
const Footer = () => (
    <footer className="w-full bg-[#f3f3f3] text-gray-600 py-6 px-12 border-t border-gray-200">
    <div className="max-w-7xl mx-auto grid grid-cols-1 md:grid-cols-4 gap-8 text-sm text-center md:text-left">
      {/* Phone Info */}
      <div className="flex flex-col space-y-1">
        <span className="font-bold">Phone</span>
        <span>+91 9879401314</span>
      </div>

      {/* Email Info */}
      <div className="flex flex-col space-y-1">
        <span className="font-bold">Email</span>
        <span>prajapati.ayush501@gmail.com</span>
      </div>

      {/* Social Links */}
      <div className="flex flex-col space-y-1">
        <span className="font-bold">Follow Me</span>
        <div className="flex space-x-2 justify-center md:justify-start">
          <a href="https://www.linkedin.com/in/aayush-prajapati-481126218/" className="hover:text-orange-500">
            <Linkedin size={20} />
          </a>
          <a href="https://github.com/AayushPrjapati" className="hover:text-orange-500">
            <Github size={20} />
          </a>
          <a href="https://x.com/AayushPraj11173" className="hover:text-orange-500">
            <Twitter size={20} />
          </a>
        </div>
      </div>
      
      {/* Copyright */}
      <div className="flex flex-col space-y-1 md:text-right md:ml-auto">
        <span className="font-bold md:hidden">Copyright</span>
        <p>
          &copy; 2025 Aayush Prajapati.<br/>Portfolio Website.
        </p>
      </div>
    </div>
  </footer>
);

// The HomeSection component with centered content
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
          className={`relative w-48 h-48 lg:w-64 lg:h-64 rounded-full overflow-hidden border-4 border-gray-200 flex-shrink-0 transition-all duration-700 ease-in-out transform ${isVisible ? 'translate-y-0 opacity-100' : 'translate-y-12 opacity-0'}`}
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
            <h1 className="text-4xl font-bold text-gray-800">Hello</h1>
            <h2 className="text-2xl font-semibold text-gray-600 mt-2">A Bit About Me</h2>
            <p className="text-gray-500 mt-4 leading-relaxed">
              Welcome to my portfolio, where I showcase the projects I've built, the skills I'm learning, and the goals I'm working toward. It's a space to share my growth and creativity while giving you a glimpse of the real me.
            </p>
          </div>

          {/* Action Buttons */}
          <div className="flex justify-center lg:justify-start space-x-4 mt-6">
            <button 
              onClick={() => setActiveSection('resume')}
              className={`w-28 h-28 rounded-full flex items-center justify-center text-white font-semibold transition-all duration-700 transform hover:scale-105 ring-2 ring-orange-400 bg-orange-500 hover:bg-white hover:text-black text-white ${isVisible ? 'translate-y-0 opacity-100' : 'translate-y-12 opacity-0'}`}
              style={{ transitionDelay: '0.4s' }}
            >
              Resume
            </button>
            <button 
              onClick={() => setActiveSection('projects')}
              className={`w-28 h-28 rounded-full flex items-center justify-center text-white font-semibold transition-all duration-700 transform hover:scale-105 ring-2 ring-red-400 bg-red-500 hover:bg-white hover:text-black text-white ${isVisible ? 'translate-y-0 opacity-100' : 'translate-y-12 opacity-0'}`}
              style={{ transitionDelay: '0.6s' }}
            >
              Projects
            </button>
            <button 
              onClick={() => setActiveSection('contact')}
              className={`w-28 h-28 rounded-full flex items-center justify-center text-white font-semibold transition-all duration-700 transform hover:scale-105 ring-2 ring-cyan-400 bg-cyan-500 hover:bg-white hover:text-black text-white ${isVisible ? 'translate-y-0 opacity-100' : 'translate-y-12 opacity-0'}`}
              style={{ transitionDelay: '0.8s' }}
            >
              Contact
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

// Other placeholder components
const ResumeSection = () => (
  <div className="p-8 bg-white rounded-lg shadow-lg max-w-3xl mx-auto w-full text-center">
    <h1 className="text-3xl font-bold text-gray-800">My Resume</h1>
    <p className="mt-4 text-gray-600">
      This is a placeholder for your resume content.
    </p>
  </div>
);

const ProjectsSection = () => (
  <div className="p-8 bg-white rounded-lg shadow-lg max-w-3xl mx-auto w-full text-center">
    <h1 className="text-3xl font-bold text-gray-800">My Projects</h1>
    <p className="mt-4 text-gray-600">
      This section is for showcasing your projects.
    </p>
  </div>
);

const ContactSection = () => (
  <div className="p-8 bg-white rounded-lg shadow-lg max-w-3xl mx-auto w-full text-center">
    <h1 className="text-3xl font-bold text-gray-800">Contact Me</h1>
    <p className="mt-4 text-gray-600">
      This is a placeholder for a contact form or a list of ways to get in touch.
    </p>
  </div>
);

// Main App component to display the entire application
export default function App() {
  const [activeSection, setActiveSection] = useState('home');

  const renderContent = () => {
    switch (activeSection) {
      case 'resume':
        return <ResumeSection />;
      case 'projects':
        return <ProjectsSection />;
      case 'contact':
        return <ContactSection />;
      default:
        return <HomeSection setActiveSection={setActiveSection} />;
    }
  };

  return (
    <div className="bg-[#f3f3f3] min-h-screen flex flex-col">
      <Header setActiveSection={setActiveSection} />
      <main className="flex-grow flex items-center justify-center p-8 mt-16">
        {renderContent()}
      </main>
      <Footer />
    </div>
  );
}
