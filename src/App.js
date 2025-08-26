
import { useState, useEffect } from 'react';
import { CodeXml, Mail, Phone, Linkedin, Github, Twitter } from 'lucide-react';

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
        <div className="hidden md:flex items-center space-x-2 text-gray-600 font-avenir-light">
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
        {/* Mobile menu button */}
        <div className="md:hidden">
          <button className="text-gray-600 hover:text-orange-500">
            {/* You can add a hamburger icon here if you want */}
            Menu
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
          <a href="https://www.linkedin.com/in/aayush-prajapati-481126218/" target="_blank" rel="noopener noreferrer" className="hover:text-orange-500">
            <Linkedin size={20} />
          </a>
          <a href="https://github.com/AayushPrjapati" target="_blank" rel="noopener noreferrer" className="hover:text-orange-500">
            <Github size={20} />
          </a>
          <a href="https://x.com/AayushPraj11173" target="_blank" rel="noopener noreferrer" className="hover:text-orange-500">
            <Twitter size={20} />
          </a>
        </div>
      </div>

      {/* Copyright */}
      <div className="flex flex-col space-y-1 md:text-right md:ml-auto">
        <span className="font-bold md:hidden">Copyright</span>
        <p>
          &copy; 2025 Aayush Prajapati.<br />Portfolio Website.
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


// The updated ProjectsSection component
const ProjectsSection = () => (
  <div className="max-w-6xl mx-auto px-4 py-10">
    <h2 className="text-2xl font-bold mb-8">Projects</h2>


    {/* Project 1 */}
    <div className="grid md:grid-cols-2 gap-8 mb-12 items-center">
      {/* Left: Text */}
      <div>
        <h3 className="text-xl font-semibold mb-2">InsightCare</h3>
        <p className="text-gray-600 text-sm leading-relaxed">
          InsightCare is a smart healthcare web platform that combines
          AI-powered diagnosis, lifestyle tools, and 24x7 consultation
          services. It features early disease prediction (Cancer, Diabetes,
          Parkinson's), health utilities like BMI and sugar tracking via
          MediTools, a personal health chatbot (Fitzy), mood-based music
          recommendations, and secure online consultations — all in a
          responsive, user-friendly interface.
        </p>
      </div>
      {/* Right: Image */}
      <a
        href="https://github.com/AayushPrjapati/InsightCare"
        target="_blank"
        rel="noopener noreferrer"
        className="block bg-gray-200 rounded-lg flex items-center justify-center h-64 overflow-hidden hover:bg-gray-300 transition"
      >
        <img
          src="/InsightCarePreview.png"
          alt="Project Preview"
          className="object-cover w-full h-full"
        />
      </a>
    </div>


    {/* Project 2 */}
    <div className="grid md:grid-cols-2 gap-8 mb-12 items-center">
      {/* Left: Image */}

      {/* Right: Text */}
      <div>
        <h3 className="text-xl font-semibold mb-2">Project Name 02</h3>
        <p className="text-gray-600 text-sm leading-relaxed">
          I'm a paragraph. Click here to add your own text and edit me. It’s
          easy. Just click “Edit Text” or double click me to add your own
          content and make changes to the font. I’m a great place for you to
          tell a story and let your users know a little more about you.
        </p>
      </div>
      <a
        href="https://your-link-here.com"
        target="_blank"
        rel="noopener noreferrer"
        className="block bg-gray-200 rounded-lg flex items-center justify-center h-64 hover:bg-gray-300 transition"
      >
        <img
          src="/your-image-path.jpg"
          alt="Project Preview"
          className="object-cover w-full h-full"
        />
      </a>
    </div>

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

// The updated ResumeSection component
const ResumeSection = () => (
  <div className="max-w-5xl mx-auto w-full">
    <h1 className="text-4xl font-bold text-gray-800 border-b-2 border-gray-200 pb-4 mb-8">
      Resume
    </h1>

    <div className="grid grid-cols-1 md:grid-cols-2 gap-y-12 gap-x-16 border-b-2 border-gray-200 pb-4 mb-8">
      {/* Column 1: The main heading "Work Experience" */}
      <div className="md:col-span-1">
        <h2 className="text-3xl font-bold text-gray-800 font-inter">Work Experience</h2>
      </div>

      {/* Column 2: The details of the work experience entry */}
      <div className="md:col-span-1 flex flex-col md:flex-row md:items-start space-y-4 md:space-y-0 md:space-x-8">
        {/* Year and Intern section */}
        <div className="flex-shrink-0">
          <p className="text-lg font-semibold text-gray-600 font-inter">2025-2026</p>
        </div>

        {/* Description section */}
        <div className="md:col-span-1">
          {/* Intern Title (Heading 5 equivalent) */}
          <h5 className="font-bold text-xl text-gray-800 font-inter">Intern</h5>


          {/* Description */}
          <p className="font-light text-base text-gray-700 leading-relaxed mt-4 font-inter">
            As an intern, I had the opportunity to immerse myself in a dynamic work environment, gaining hands-on experience valuable insights into the industry. I collaborated with a talented team, contributing to projects that my skills and knowledge while fostering professional growth.
          </p>
        </div>
      </div>
     </div>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-y-12 gap-x-16 border-b-2 border-gray-200 pb-4 mb-8">
                {/* Column 1: The main heading "Education" */}
                <div className="md:col-span-1">
                    <h2 className="text-3xl font-bold text-gray-800 font-inter">Education</h2>
                </div>
                
                {/* Column 2: The details of the education entries */}
                <div className="md:col-span-1 flex flex-col space-y-8">
                    {/* Bachelors */}
                    <div className="flex flex-col md:flex-row md:items-start space-y-4 md:space-y-0 md:space-x-8">
                        {/* Year */}
                        <div className="flex-shrink-0">
                            <p className="text-lg font-semibold text-gray-600 font-inter">2024-2028</p>
                        </div>
                        {/* Description */}
                        <div className="w-full">
                            <h5 className="font-bold text-xl text-gray-800 font-inter">Computer Science Engineering | Bachelor's Degree</h5>
                            <p className="font-light text-base text-gray-600 italic mt-1 font-inter">
                                Currently Pursuing
                            </p>
                        </div>
                    </div>

                    {/* HSC */}
                    <div className="flex flex-col md:flex-row md:items-start space-y-4 md:space-y-0 md:space-x-8">
                        {/* Year */}
                        <div className="flex-shrink-0">
                            <p className="text-lg font-semibold text-gray-600 font-inter">2022-2024</p>
                        </div>
                        {/* Description */}
                        <div className="w-full">
                            <h5 className="font-bold text-xl text-gray-800 font-inter">HSC Board | Competitive Exams | JEE</h5>
                            <p className="font-light text-base text-gray-700 leading-relaxed mt-1 font-inter">
                                In the education column of my portfolio, I proudly highlight my achievements as a 12th grader, which reflects my commitment to excellence. I have consistently demonstrated my academic prowess by securing a remarkable 98 percentile in JEE Main. This achievement is a testament to my dedication and hard work, setting a strong foundation for my future academic and career pursuits in the field of engineering.
                            </p>
                        </div>
                    </div>
                </div>
            </div>

                  <div className="grid grid-cols-1 md:grid-cols-2 gap-y-12 gap-x-16">
                {/* Column 1: The main heading "Skills & Expertise" */}
                <div className="md:col-span-1">
                    <h2 className="text-3xl font-bold text-gray-800 font-inter">Skills & Expertise</h2>
                </div>
                
                {/* Column 2: The details of the skills entries */}
                <div className="md:col-span-1 flex flex-col space-y-4">
                    {/* Tech Interests */}
                    <div className="flex flex-col md:flex-row md:items-start space-y-2 md:space-y-0 md:space-x-8">
                        <div className="flex-shrink-0">
                            <p className="text-lg font-semibold text-gray-600 font-inter">Tech Interests:</p>
                        </div>
                        <div className="w-full">
                            <p className="font-light text-base text-gray-700 leading-relaxed font-inter">
                                AI/ML, Smart web platforms, Full stack web development
                            </p>
                        </div>
                    </div>

                    {/* Languages */}
                    <div className="flex flex-col md:flex-row md:items-start space-y-2 md:space-y-0 md:space-x-8">
                        <div className="flex-shrink-0">
                            <p className="text-lg font-semibold text-gray-600 font-inter">Languages:</p>
                        </div>
                        <div className="w-full">
                            <p className="font-light text-base text-gray-700 leading-relaxed font-inter">
                                C++, Python, React, Javascript
                            </p>
                        </div>
                    </div>
                </div>
            </div>
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
    <div className="bg-[#f3f3f3] min-h-screen flex flex-col font-sans">
      <Header setActiveSection={setActiveSection} />
      <main className="flex-grow flex items-center justify-center p-8 mt-16">
        {renderContent()}
      </main>
      <Footer />
    </div>
    );
}
