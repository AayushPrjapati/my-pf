import React,{ useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';

import Header from './components/header';
import Footer from './components/footer'
import HomeSection from './components/HomeSection'
import ResumeSection from './components/ResumeSection';
import ProjectsSection from './components/ProjectsSection'
import ContactSection from './components/ContactSection'

export default function App() {
    const [page, setPage] = useState({ section: 'home', direction: 0 });
    // UPDATED: Added 'portfolio' to the section order
    const sectionOrder = ['home', 'resume', 'projects', 'portfolio', 'contact'];
    const prevSectionRef = React.useRef('home');

    useEffect(() => {
        prevSectionRef.current = page.section;
    });
    const prevSection = prevSectionRef.current;

    const handleSectionChange = (newSection) => {
        if (newSection === page.section) return;
        window.scrollTo(0, 0); // Scroll to top on section change
        const currentIndex = sectionOrder.indexOf(page.section);
        const newIndex = sectionOrder.indexOf(newSection);
        let direction = 0;
        if (currentIndex !== -1 && newIndex !== -1) {
            direction = newIndex > currentIndex ? 1 : -1;
        }
        setPage({ section: newSection, direction: direction });
    };

const getVariants = () => {
  const from = prevSection;   // previous section
  const to = page.section;    // current section

  // Common transition config
  const slowTrans = { type: 'tween', duration: 0.3, ease: "easeInOut" };

  // Any → Contact (contact slides in from top, leaves downward)
  if (to === "contact") {
    return {
      initial: { y: "-100%", opacity: 0 },  // starts above
      in: { y: 0, opacity: 1, transition: slowTrans }, // enters to center
      out: { y: "-100%", opacity: 0, transition: slowTrans }, // exits downward
    };
  }

  // Contact → Any (contact slides up while next content fades from center)
  if (from === "contact") {
    return {
      initial: { scale: 0.8, opacity: 0 }, // next page starts small
      in: { scale: 1, opacity: 1, transition: slowTrans }, // grows to full size
      out: { y: 0, opacity: 0, transition: slowTrans }, // contact moves upward
    };
  }

  // Home → Any (except contact) (fade + scale transition)
  if (from === "home" && to !== "contact") {
    return {
      initial: { opacity: 0, scale: 0.8 }, // next page starts smaller & hidden
      in: { opacity: 1, scale: 1, transition: slowTrans }, // fades and scales in
      out: { opacity: 0, scale: 0.8, transition: slowTrans }, // fades out with scale
    };
  }

  // Resume → Projects (slide left transition)
  if (from === "resume" && to === "projects") {
    return {
      initial: { x: "100%", opacity: 0 }, // starts off-screen right
      in: { x: 0, opacity: 1, transition: slowTrans }, // slides into center
      out: { x: "-100%", opacity: 0, transition: slowTrans }, // slides left
    };
  }

  // Projects → Resume (slide right transition)
  if (from === "projects" && to === "resume") {
    return {
      initial: { x: "-100%", opacity: 0 }, // starts off-screen left
      in: { x: 0, opacity: 1, transition: slowTrans }, // slides into center
      out: { x: "100%", opacity: 0, transition: slowTrans }, // slides right
    };
  }

  // Default fade (used when no specific case matches)
  return {
    initial: { opacity: 0 },
    in: { opacity: 1, transition: slowTrans },
    out: { opacity: 0, transition: slowTrans },
  };
};


// Helper function to render section components based on current page
const renderContent = () => {
  switch (page.section) {
    case 'resume': return <ResumeSection />;
    case 'projects': return <ProjectsSection />;
    case 'contact': return <ContactSection />;
    default: return <HomeSection setActiveSection={handleSectionChange} />;
  }
};


return (
  <div className="bg-[#f3f3f3] min-h-screen flex flex-col font-sans">
    {/* Header (navigation) */}
    <Header setActiveSection={handleSectionChange} />

    {/* Main content area with animated transitions */}
    <main className="flex-grow flex items-center justify-center p-8 mt-16">
      <AnimatePresence mode="wait">
        <motion.div 
          key={page.section}            // unique key per section (important for AnimatePresence)
          variants={getVariants()}      // select animation based on prev/next section
          initial="initial"             // starting state
          animate="in"                  // enter animation
          exit="out"                    // exit animation
          className="w-full flex justify-center"
        >
          {renderContent()}             {/* Render the appropriate section */}
        </motion.div>
      </AnimatePresence>
    </main>

    {/* Footer (always visible) */}
    <Footer />
  </div>
);
}

