import React, { useState } from 'react';
import { CodeXml, Menu, X } from 'lucide-react';
import { motion, AnimatePresence } from 'framer-motion';

const Header = ({ setActiveSection }) => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  // This function handles a link click inside the mobile menu
  const handleMobileLinkClick = (section) => {
    setActiveSection(section);
    setIsMenuOpen(false); // Close the menu after clicking a link
  };

  // Animation variants for the mobile menu
  const menuVariants = {
    hidden: { opacity: 0, y: -20 },
    visible: { opacity: 1, y: 0, transition: { type: 'tween', duration: 0.3 } },
    exit: { opacity: 0, y: -20, transition: { type: 'tween', duration: 0.3 } }
  };

  return (
    <>
      <header className="fixed top-0 left-0 w-full z-20 bg-[#f3f3f3] shadow-sm">
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
            onClick={() => setActiveSection('home')}
            className="text-base hover:text-orange-500"
          >
            Home
          </button>
        </div>

          {/* Mobile menu button */}
          <div className="md:hidden">
            <button onClick={() => setIsMenuOpen(!isMenuOpen)} className="text-gray-600 hover:text-orange-500 z-30 relative" aria-label="Toggle menu">
              {isMenuOpen ? <X size={28} /> : <Menu size={28} />}
            </button>
          </div>
        </nav>
      </header>

      {/* Mobile Menu Overlay */}
      <AnimatePresence>
        {isMenuOpen && (
          <motion.div
            variants={menuVariants}
            initial="hidden"
            animate="visible"
            exit="exit"
            className="md:hidden fixed inset-0 bg-[#f3f3f3] z-10 flex flex-col items-center justify-center space-y-8"
          >
            <button onClick={() => handleMobileLinkClick('home')} className="text-2xl font-semibold text-gray-800 hover:text-orange-500 transition-colors">
              Home
            </button>
            <button onClick={() => handleMobileLinkClick('resume')} className="text-2xl font-semibold text-gray-800 hover:text-orange-500 transition-colors">
              Resume
            </button>
            <button onClick={() => handleMobileLinkClick('projects')} className="text-2xl font-semibold text-gray-800 hover:text-orange-500 transition-colors">
              Projects
            </button>
            <button onClick={() => handleMobileLinkClick('contact')} className="text-2xl font-semibold text-gray-800 hover:text-orange-500 transition-colors">
              Contact
            </button>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
};

export default Header;
