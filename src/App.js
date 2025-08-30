
import { useState, useEffect } from 'react';
import { CodeXml, Mail, Phone, Linkedin, Github, Twitter, MapPin, Calendar, GraduationCap, Briefcase, Code, Globe, User } from 'lucide-react';

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
  <button
    onClick={() => setActiveSection('resume')}
    className={`w-28 h-28 rounded-full flex items-center justify-center font-semibold transition-all duration-700 hover:duration-300 hover:ease-out transform hover:scale-105 ring-2 ring-orange-400 bg-orange-500 hover:bg-white hover:text-black text-white ${isVisible ? 'translate-y-0 opacity-100' : 'translate-y-12 opacity-0'}`}
    style={{ transitionDelay: '0.4s' }}
  >
    Resume
  </button>
  <button
    onClick={() => setActiveSection('projects')}
    className={`w-28 h-28 rounded-full flex items-center justify-center font-semibold transition-all duration-700 hover:duration-300 hover:ease-out transform hover:scale-105 ring-2 ring-red-400 bg-red-500 hover:bg-white hover:text-black text-white ${isVisible ? 'translate-y-0 opacity-100' : 'translate-y-12 opacity-0'}`}
    style={{ transitionDelay: '0.6s' }}
  >
    Projects
  </button>
  <button
    onClick={() => setActiveSection('contact')}
    className={`w-28 h-28 rounded-full flex items-center justify-center font-semibold transition-all duration-700 hover:duration-300 hover:ease-out transform hover:scale-105 ring-2 ring-cyan-400 bg-cyan-500 hover:bg-white hover:text-black text-white ${isVisible ? 'translate-y-0 opacity-100' : 'translate-y-12 opacity-0'}`}
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



// The updated ResumeSection component
const ResumeSection = () => (
  <div className="max-w-4xl mx-auto px-4 py-10">
    <h1 className="text-4xl font-semibold tracking-tight text-black border-b-2 border-gray-200 pb-4 mb-8">
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

// The updated ProjectsSection component
const ProjectsSection = () => (
  <div className="max-w-6xl mx-auto px-4 py-10">
    <h1 className="text-4xl font-semibold tracking-tight text-black border-b-2 border-gray-200 pb-4 mb-8">
      Projects
    </h1>

    {/* Project 1 */}
    <div className="grid md:grid-cols-2 gap-8 mb-12 items-center">
      {/* Left: Text */}
      <div>
        <h3 className="text-xl font-semibold mb-2">InsightCare</h3>
        <p className="text-gray-600 font-semibold font-light text-black text-sm leading-relaxed">
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

  return (
    // Main container with a minimal background color and reduced vertical padding
    <div className="bg-[#f3f3f3] py-8 px-4 sm:px-6 lg:px-8 w-full max-w-4xl mx-auto">
      {/* Header section with minimal margins */}
      <div className="mx-auto max-w-2xl text-left border-b-2 border-gray-200 mb-2">
        <h2 className="text-balance text-2xl font-semibold tracking-tight text-black sm:text-3xl">Contact Me</h2>
        <p className="mt-1 text-base text-gray-800">✨ “Let’s build something amazing together — feel free to reach out!”</p>
      </div>
      {/* Form element with reduced top margin */}
      <form action="#" method="POST" className="mx-auto mt-4 max-w-xl">
        {/* Grid layout for form fields, reduced gap */}
        <div className="grid grid-cols-1 gap-x-6 gap-y-4 sm:grid-cols-2">
          {/* First Name field */}
          <div>
            <label htmlFor="first-name" className="block text-sm/6 font-semibold text-black">First name</label>
            <div className="mt-1.5">
              <input
                id="first-name"
                type="text"
                name="first-name"
                autoComplete="given-name"
                className="block w-full rounded-md bg-white px-3.5 py-1.5 text-base text-black outline outline-1 -outline-offset-1 outline-black/10 placeholder:text-gray-500 focus:outline focus:outline-2 focus:-outline-offset-2 focus:outline-indigo-500"
              />
            </div>
          </div>
          {/* Last Name field */}
          <div>
            <label htmlFor="last-name" className="block text-sm/6 font-semibold text-black">Last name</label>
            <div className="mt-1.5">
              <input
                id="last-name"
                type="text"
                name="last-name"
                autoComplete="family-name"
                className="block w-full rounded-md bg-white px-3.5 py-1.5 text-base text-black outline outline-1 -outline-offset-1 outline-black/10 placeholder:text-gray-500 focus:outline focus:outline-2 focus:-outline-offset-2 focus:outline-indigo-500"
              />
            </div>
          </div>
          {/* Company field */}
          <div className="sm:col-span-2">
            <label htmlFor="company" className="block text-sm/6 font-semibold text-black">Company</label>
            <div className="mt-1.5">
              <input
                id="company"
                type="text"
                name="company"
                autoComplete="organization"
                className="block w-full rounded-md bg-white px-3.5 py-1.5 text-base text-black outline outline-1 -outline-offset-1 outline-black/10 placeholder:text-gray-500 focus:outline focus:outline-2 focus:-outline-offset-2 focus:outline-indigo-500"
              />
            </div>
          </div>
          {/* Email field */}
          <div className="sm:col-span-2">
            <label htmlFor="email" className="block text-sm/6 font-semibold text-black">Email</label>
            <div className="mt-1.5">
              <input
                id="email"
                type="email"
                name="email"
                autoComplete="email"
                className="block w-full rounded-md bg-white px-3.5 py-1.5 text-base text-black outline outline-1 -outline-offset-1 outline-black/10 placeholder:text-gray-500 focus:outline focus:outline-2 focus:-outline-offset-2 focus:outline-indigo-500"
              />
            </div>
          </div>
          {/* Phone number field with country code */}
          <div className="sm:col-span-2">
            <label htmlFor="phone-number" className="block text-sm/6 font-semibold text-black">Phone number</label>
            <div className="mt-1.5">
              <div className="flex rounded-md bg-white outline outline-1 -outline-offset-1 outline-black/10 has-[input:focus-within]:outline has-[input:focus-within]:outline-2 has-[input:focus-within]:-outline-offset-2 has-[input:focus-within]:outline-indigo-500">
                <div className="grid shrink-0 grid-cols-1 focus-within:relative">
                  <select
                    id="country"
                    name="country"
                    autoComplete="country"
                    aria-label="Country"
                    className="col-start-1 row-start-1 w-full appearance-none rounded-md bg-transparent py-1.5 pl-3.5 pr-7 text-base text-gray-400 placeholder:text-gray-500 focus:outline focus:outline-2 focus:-outline-offset-2 focus:outline-indigo-500 sm:text-sm/6"
                  >
                    <option>IND</option>
                    <option>US</option>
                    <option>CA</option>
                    <option>EU</option>
                  </select>
                  <svg viewBox="0 0 16 16" fill="currentColor" data-slot="icon" aria-hidden="true" className="pointer-events-none col-start-1 row-start-1 mr-2 size-5 self-center justify-self-end text-black sm:size-4">
                    <path d="M4.22 6.22a.75.75 0 0 1 1.06 0L8 8.94l2.72-2.72a.75.75 0 1 1 1.06 1.06l-3.25 3.25a.75.75 0 0 1-1.06 0L4.22 7.28a.75.75 0 0 1 0-1.06Z" clipRule="evenodd" fillRule="evenodd" />
                  </svg>
                </div>
                <input
                  id="phone-number"
                  type="text"
                  name="phone-number"
                  placeholder="123-456-7890"
                  className="block min-w-0 grow bg-transparent py-1.5 pl-1 pr-3 text-base text-black placeholder:text-gray-500 focus:outline focus:outline-0 sm:text-sm/6"
                />
              </div>
            </div>
          </div>
          {/* Message textarea */}
          <div className="sm:col-span-2">
            <label htmlFor="message" className="block text-sm/6 font-semibold text-black">Message</label>
            <div className="mt-1.5">
              <textarea
                id="message"
                name="message"
                rows={3} // Reduced rows to save space
                className="block w-full rounded-md bg-white px-3.5 py-1.5 text-base text-black outline outline-1 -outline-offset-1 outline-black/10 placeholder:text-gray-500 focus:outline focus:outline-2 focus:-outline-offset-2 focus:outline-indigo-500"
                defaultValue={''}
              />
            </div>
          </div>
          {/* Privacy policy checkbox */}
          <div className="flex gap-x-4 sm:col-span-2">
            <div className="flex h-6 items-center">
              <div className="group relative inline-flex w-8 shrink-0 rounded-full bg-black/5 p-px outline-offset-2 outline-indigo-500 ring-1 ring-inset ring-black/10 transition-colors duration-200 ease-in-out has-[:checked]:bg-indigo-500 has-[:focus-visible]:outline has-[:focus-visible]:outline-2">
                <span className="size-4 rounded-full bg-white shadow-sm ring-1 ring-white/5 transition-transform duration-200 ease-in-out group-has-[:checked]:translate-x-3.5"></span>
                <input
                  id="agree-to-policies"
                  type="checkbox"
                  name="agree-to-policies"
                  aria-label="Agree to policies"
                  className="absolute inset-0 appearance-none focus:outline-none"
                />
              </div>
            </div>
            <label htmlFor="agree-to-policies" className="text-sm/6 text-gray-800">
              By selecting this, you agree to our{' '}
              <a href="#" className="whitespace-nowrap font-semibold text-indigo-400">
                privacy policy
              </a>
              .
            </label>
          </div>
        </div>
        {/* Submit button */}
        <div className="mt-6">
          <button
            type="submit"
            className="block w-full rounded-md bg-indigo-500 px-3.5 py-2.5 text-center text-sm font-semibold text-white shadow-sm hover:bg-indigo-400 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-indigo-500"
          >
            Let's talk
          </button>
        </div>
      </form>
    </div>
  );
};


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
