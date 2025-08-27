
import { useState, useEffect } from 'react';
import { CodeXml, Mail, Phone, Linkedin, Github, Twitter, MapPin, Calendar, GraduationCap, Briefcase, Code, Globe, User} from 'lucide-react';

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


const ContactSection = () => {
  const [formData, setFormData] = useState({ firstName: '', email: '', phone: '' });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData(prevState => ({ ...prevState, [name]: value }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log('Form data submitted:', formData);
    // A more user-friendly notification can be used here instead of alert
    alert('Thank you for your message! This is a demo form. Check the console for data.');
    setFormData({ firstName: '', email: '', phone: '' });
  };

  return (
    <div className="w-full max-w-6xl mx-auto grid lg:grid-cols-2 gap-8 lg:gap-16 items-center p-4">
      {/* Left Section: Contact Info */}
      <div className="space-y-8">
        <h1 className="text-5xl font-bold text-gray-800">Contact</h1>
        <p className="text-gray-600 text-lg">Looking forward to hearing from you</p>
        
        <div className="space-y-4">
          <div>
            <h3 className="font-semibold text-gray-800 text-xl">Phone</h3>
            <p className="text-gray-600">+91 9879401314</p>
          </div>
          <div>
            <h3 className="font-semibold text-gray-800 text-xl">Email</h3>
            <p className="text-gray-600">prajapati.ayush501@gmail.com</p>
          </div>
        </div>
      </div>

      {/* Right Section: Contact Form */}
      <div className="bg-white p-8 rounded-lg shadow-md">
        <form onSubmit={handleSubmit} className="space-y-6">
          <div>
            <label htmlFor="firstName" className="block text-sm font-medium text-gray-700 mb-1">First name</label>
            <input
              type="text"
              id="firstName"
              name="firstName"
              value={formData.firstName}
              onChange={handleChange}
              className="block w-full p-3 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-black"
            />
          </div>
          
          <div>
            <label htmlFor="email" className="block text-sm font-medium text-gray-700 mb-1">Email</label>
            <input
              type="email"
              id="email"
              name="email"
              value={formData.email}
              onChange={handleChange}
              className="block w-full p-3 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-black"
            />
          </div>
          
          <div>
            <label htmlFor="phone" className="block text-sm font-medium text-gray-700 mb-1">Phone</label>
            <div className="relative">
              <div className="absolute inset-y-0 left-0 flex items-center pl-3 pointer-events-none">
                <Globe className="h-5 w-5 text-gray-400" />
              </div>
              <input
                type="tel"
                id="phone"
                name="phone"
                value={formData.phone}
                onChange={handleChange}
                className="block w-full pl-10 p-3 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-black"
              />
            </div>
          </div>

          <button
            type="submit"
            className="w-full flex justify-center py-3 px-4 border border-transparent rounded-md shadow-sm text-md font-bold text-white bg-black hover:bg-gray-800 focus:outline-none transition-colors"
          >
            Submit
          </button>
        </form>
      </div>
    </div>
  );
};

// The updated ResumeSection component
const ResumeSection = () => (
  <div className="max-w-5xl mx-auto w-full">
    <h1 className="text-4xl font-bold text-gray-800 border-b-2 border-gray-200 pb-4 mb-8">
      Resume
    </h1>

     <div className="space-y-8">

            {/* Work Experience Section */}
            <section className="bg-white rounded-lg shadow-md p-6 border-l-4 border-green-500">
              <div className="flex items-center gap-3 mb-6">
                <Briefcase className="w-6 h-6 text-green-600" />
                <h2 className="text-2xl font-bold text-gray-800">Work Experience</h2>
              </div>

              <div className="relative">
                <div className="absolute left-4 top-0 bottom-0 w-0.5 bg-gray-200"></div>

                <div className="relative pl-10 pb-6">
                  <div className="absolute left-2 w-4 h-4 bg-green-500 rounded-full border-2 border-white shadow"></div>
                  <div className="flex items-center gap-2 mb-2">
                    <Calendar className="w-4 h-4 text-gray-500" />
                    <span className="text-sm font-medium text-gray-500">2025-2026</span>
                  </div>
                  <h3 className="text-xl font-semibold text-gray-800 mb-2">Intern</h3>
                  <p className="text-gray-600 leading-relaxed">
                    As an intern, I had the opportunity to immerse myself in a dynamic work environment,
                    gaining hands-on experience and valuable insights into the industry. I collaborated
                    with a talented team, contributing to projects that enhanced my skills and knowledge
                    while fostering professional growth.
                  </p>
                </div>
              </div>
            </section>

            {/* Education Section */}
            <section className="bg-white rounded-lg shadow-md p-6 border-l-4 border-blue-500">
              <div className="flex items-center gap-3 mb-6">
                <GraduationCap className="w-6 h-6 text-blue-600" />
                <h2 className="text-2xl font-bold text-gray-800">Education</h2>
              </div>

              <div className="relative">
                <div className="absolute left-4 top-0 bottom-0 w-0.5 bg-gray-200"></div>

                {/* Current Education */}
                <div className="relative pl-10 pb-6">
                  <div className="absolute left-2 w-4 h-4 bg-blue-500 rounded-full border-2 border-white shadow"></div>
                  <div className="flex items-center gap-2 mb-2">
                    <Calendar className="w-4 h-4 text-gray-500" />
                    <span className="text-sm font-medium text-gray-500">2024-2028</span>
                    <span className="text-sm bg-green-100 text-green-700 px-2 py-1 rounded-full">Currently Pursuing</span>
                  </div>
                  <h3 className="text-xl font-semibold text-gray-800 mb-1">Bachelor's Degree</h3>
                  <p className="text-blue-600 font-medium mb-2">Computer Science Engineering</p>
                </div>

                {/* HSC */}
                <div className="relative pl-10">
                  <div className="absolute left-2 w-4 h-4 bg-blue-500 rounded-full border-2 border-white shadow"></div>
                  <div className="flex items-center gap-2 mb-2">
                    <Calendar className="w-4 h-4 text-gray-500" />
                    <span className="text-sm font-medium text-gray-500">2022-2024</span>
                  </div>
                  <h3 className="text-xl font-semibold text-gray-800 mb-1">HSC Board | Competitive Exams</h3>
                  <p className="text-blue-600 font-medium mb-2">JEE Main - 98 Percentile</p>
                  <p className="text-gray-600 leading-relaxed">
                    In the education column of my portfolio, I proudly highlight my achievements as a
                    12th standard student with a focus on academic excellence. I have consistently
                    demonstrated my commitment to learning, culminating in a remarkable 98 percentile
                    in JEE Main examination. This achievement reflects my dedication and hard work,
                    setting a strong foundation for my future academic and career pursuits in the
                    field of engineering.
                  </p>
                </div>
              </div>
            </section>
            
            {/* Skills & Expertise */}
            <section className="bg-white rounded-lg shadow-md p-6 border-l-4 border-purple-500">
              <div className="flex items-center gap-3 mb-6">
                <Code className="w-6 h-6 text-purple-600" />
                <h2 className="text-xl font-bold text-gray-800">Skills & Expertise</h2>
              </div>

              <div className="space-y-4">
                <div>
                  <h3 className="font-semibold text-gray-700 mb-2">Tech Interests</h3>
                  <div className="flex flex-wrap gap-2">
                    <span className="bg-purple-100 text-purple-700 px-3 py-1 rounded-full text-sm">AI/ML</span>
                    <span className="bg-purple-100 text-purple-700 px-3 py-1 rounded-full text-sm">Smart Web Platforms</span>
                    <span className="bg-purple-100 text-purple-700 px-3 py-1 rounded-full text-sm">Healthcare Technology</span>
                  </div>
                </div>

                <div>
                  <h3 className="font-semibold text-gray-700 mb-2">Programming Languages</h3>
                  <div className="space-y-2">
                    <div className="flex items-center justify-between">
                      <span className="text-gray-600">C++</span>
                      <div className="w-24 bg-gray-200 rounded-full h-2">
                        <div className="bg-blue-500 h-2 rounded-full w-5/6"></div>
                      </div>
                    </div>
                    <div className="flex items-center justify-between">
                      <span className="text-gray-600">Python</span>
                      <div className="w-24 bg-gray-200 rounded-full h-2">
                        <div className="bg-blue-500 h-2 rounded-full w-4/5"></div>
                      </div>
                    </div>
                    <div className="flex items-center justify-between">
                      <span className="text-gray-600">React</span>
                      <div className="w-24 bg-gray-200 rounded-full h-2">
                        <div className="bg-blue-500 h-2 rounded-full w-3/4"></div>
                      </div>
                    </div>
                    <div className="flex items-center justify-between">
                      <span className="text-gray-600">JavaScript</span>
                      <div className="w-24 bg-gray-200 rounded-full h-2">
                        <div className="bg-blue-500 h-2 rounded-full w-4/5"></div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </section>
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
