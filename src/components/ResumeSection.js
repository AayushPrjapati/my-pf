import React from 'react';
// Updated imports for new icons
import { Calendar, GraduationCap, Briefcase, Code, Zap, TerminalSquare, Layers } from 'lucide-react';

const ResumeSection = () => {
  const [hoveredSection, setHoveredSection] = React.useState(null);
  const workRef = React.useRef(null);
  const educationRef = React.useRef(null);
  const skillsRef = React.useRef(null);

  const skills = [
    { name: 'C++', level: 4.5 },
    { name: 'Python', level: 4 },
    { name: 'React', level: 3.5 },
    { name: 'JavaScript', level: 4 },
  ];

  const techStack = ['React', 'Node.js', 'Express', 'MongoDB', 'Tailwind CSS', 'Firebase'];
  const interests = ['AI/ML', 'Smart Web Platforms', 'Healthcare Technology'];

  // Inject styles for the hover-seeking spotlight effect
  React.useEffect(() => {
    const style = document.createElement('style');
    style.innerHTML = `
      .hover-seek {
        position: relative;
      }
      .hover-seek::before {
        content: '';
        position: absolute;
        top: 0;
        left: 0;
        right: 0;
        bottom: 0;
        background-image: radial-gradient(circle 200px at var(--mouse-x) var(--mouse-y), rgba(0, 0, 0, 0.04), transparent 80%);
        opacity: 0;
        transition: opacity 0.2s;
        pointer-events: none;
        border-radius: inherit; /* Match parent's border-radius */
      }
      .hover-seek:hover::before {
        opacity: 1;
      }
    `;
    document.head.appendChild(style);
    return () => {
      document.head.removeChild(style);
    };
  }, []);

  // Effect to scroll the hovered section into view
  React.useEffect(() => {
    const refs = {
      work: workRef,
      education: educationRef,
      skills: skillsRef,
    };
    const targetRef = refs[hoveredSection];

    if (targetRef && targetRef.current) {
      const timer = setTimeout(() => {
        targetRef.current.scrollIntoView({
          behavior: 'smooth',
          block: 'nearest',
        });
      }, 200);

      return () => clearTimeout(timer);
    }
  }, [hoveredSection]);

  // Handle mouse movement for the hover-seeking effect
  const handleMouseMove = (e) => {
    const rect = e.currentTarget.getBoundingClientRect();
    const x = e.clientX - rect.left;
    const y = e.clientY - rect.top;
    e.currentTarget.style.setProperty('--mouse-x', `${x}px`);
    e.currentTarget.style.setProperty('--mouse-y', `${y}px`);
  };

  return (
    <div className="max-w-4xl mx-auto px-4 py-10">
      <h1 className="text-4xl font-semibold tracking-tight text-black border-b-2 border-gray-200 pb-4 mb-8">
        Resume
      </h1>

      <div className="space-y-8">

        {/* Work Experience Section */}
        <section
          ref={workRef}
          className="bg-white rounded-lg shadow-md p-6 border-l-4 border-green-500 cursor-pointer overflow-hidden hover-seek"
          onMouseEnter={() => setHoveredSection('work')}
          onMouseLeave={() => setHoveredSection(null)}
          onMouseMove={handleMouseMove}
        >
          <div className="flex items-center gap-3 mb-6">
            <Briefcase className="w-6 h-6 text-green-600" />
            <h2 className="text-2xl font-bold text-gray-800">Work Experience</h2>
          </div>

          <div className="relative">
            {/* Timeline line starts from the bullet's center */}
            <div className="absolute left-4 top-3 bottom-0 w-0.5 bg-gray-200"></div>

            <div className="relative pl-10">
              <div className="absolute left-2 top-1 w-4 h-4 bg-green-500 rounded-full border-2 border-white shadow"></div>
              <h3 className="text-xl font-semibold text-gray-800">Intern</h3>

              <div className={`transition-all duration-500 ease-in-out overflow-hidden ${hoveredSection === 'work' ? 'max-h-96 opacity-100 mt-2' : 'max-h-0 opacity-0'}`}>
                <div className="flex items-center gap-2 mb-2">
                  <Calendar className="w-4 h-4 text-gray-500" />
                  <span className="text-sm font-medium text-gray-500">2025-2026</span>
                </div>
                <p className="text-gray-600 leading-relaxed">
                  As an intern, I had the opportunity to immerse myself in a dynamic work environment,
                  gaining hands-on experience and valuable insights into the industry. I collaborated
                  with a talented team, contributing to projects that enhanced my skills and knowledge
                  while fostering professional growth.
                </p>
              </div>
            </div>
          </div>
        </section>

        {/* Education Section */}
        <section
          ref={educationRef}
          className="bg-white rounded-lg shadow-md p-6 border-l-4 border-blue-500 cursor-pointer overflow-hidden hover-seek"
          onMouseEnter={() => setHoveredSection('education')}
          onMouseLeave={() => setHoveredSection(null)}
          onMouseMove={handleMouseMove}
        >
          <div className="flex items-center gap-3 mb-6">
            <GraduationCap className="w-6 h-6 text-blue-600" />
            <h2 className="text-2xl font-bold text-gray-800">Education</h2>
          </div>

          <div className="relative">
            {/* Timeline line starts from the first bullet's center */}
            <div className="absolute left-4 top-3 bottom-0 w-0.5 bg-gray-200"></div>

            {/* Current Education */}
            <div className="relative pl-10 pb-6">
              <div className="absolute left-2 top-1 w-4 h-4 bg-blue-500 rounded-full border-2 border-white shadow"></div>
              <div className="flex items-baseline gap-3">
                <h3 className="text-xl font-semibold text-gray-800">Bachelor's Degree</h3>
                <span className="text-sm bg-green-100 text-green-700 px-2 py-1 rounded-full">Currently Pursuing</span>
              </div>
              <div className={`transition-all duration-500 ease-in-out overflow-hidden ${hoveredSection === 'education' ? 'max-h-96 opacity-100 mt-2' : 'max-h-0 opacity-0'}`}>
                <div className="flex items-center gap-2 mb-2">
                  <Calendar className="w-4 h-4 text-gray-500" />
                  <span className="text-sm font-medium text-gray-500">2024-2028</span>
                </div>
                <p className="text-blue-600 font-medium">Computer Science Engineering</p>
              </div>
            </div>

            {/* HSC */}
            <div className="relative pl-10">
              <div className="absolute left-2 top-1 w-4 h-4 bg-blue-500 rounded-full border-2 border-white shadow"></div>
              <h3 className="text-xl font-semibold text-gray-800">HSC Board | Competitive Exams</h3>
              <div className={`transition-all duration-500 ease-in-out overflow-hidden ${hoveredSection === 'education' ? 'max-h-96 opacity-100 mt-2' : 'max-h-0 opacity-0'}`}>
                <div className="flex items-center gap-2 mb-2">
                  <Calendar className="w-4 h-4 text-gray-500" />
                  <span className="text-sm font-medium text-gray-500">2022-2024</span>
                </div>
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
          </div>
        </section>

        {/* Skills & Expertise Section */}
        <section
          ref={skillsRef}
          className="bg-white rounded-lg shadow-md p-6 border-l-4 border-purple-500 cursor-pointer hover-seek"
          onMouseEnter={() => setHoveredSection('skills')}
          onMouseLeave={() => setHoveredSection(null)}
          onMouseMove={handleMouseMove}
        >
          <div className="flex items-center gap-3 mb-6">
            <Code className="w-6 h-6 text-purple-600" />
            <h2 className="text-2xl font-bold text-gray-800">Skills & Expertise</h2>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-x-8 gap-y-4 pt-4">
            <div>
              <h3 className="text-xl font-semibold text-gray-800 mb-2 flex items-center gap-2">
                <TerminalSquare className="w-5 h-5 text-purple-600" /> Programming Languages
              </h3>
              <div className={`transition-all duration-500 ease-in-out overflow-hidden space-y-4 ${hoveredSection === 'skills' ? 'max-h-96 opacity-100 pt-2' : 'max-h-0 opacity-0'}`}>
                {skills.map(skill => (
                  <div key={skill.name}>
                    <div className="flex justify-between mb-1">
                      <span className="text-base font-medium text-gray-700">{skill.name}</span>
                      <span className="text-sm font-medium text-purple-700">{`${(skill.level / 5) * 100}%`}</span>
                    </div>
                    <div className="w-full bg-gray-200 rounded-full h-2.5">
                      <div
                        className="bg-gradient-to-r from-purple-500 to-indigo-500 h-2.5 rounded-full"
                        style={{ width: `${(skill.level / 5) * 100}%` }}>
                      </div>
                    </div>
                  </div>
                ))}
              </div>
            </div>
            <div>
              <h3 className="text-xl font-semibold text-gray-800 mb-2 flex items-center gap-2">
                <Zap className="w-5 h-5 text-indigo-600" /> {hoveredSection === 'skills' ? 'Tech Interests' : 'Tech Interests / Tech Stack'}
              </h3>
              <div className={`transition-all duration-500 ease-in-out overflow-hidden ${hoveredSection === 'skills' ? 'max-h-96 opacity-100 pt-2' : 'max-h-0 opacity-0'}`}>
                <div className="flex flex-wrap gap-3">
                  {interests.map(interest => (
                    <span
                      key={interest}
                      className="bg-purple-100 text-purple-800 px-4 py-2 rounded-lg text-sm font-semibold transition-all duration-300 hover:bg-purple-200 hover:shadow-lg hover:-translate-y-1 hover-seek"
                      onMouseMove={handleMouseMove}
                    >
                      {interest}
                    </span>
                  ))}
                </div>

                <h3 className="text-xl font-semibold text-gray-800 mb-2 mt-6 flex items-center gap-2">
                  <Layers className="w-5 h-5 text-indigo-600" /> Tech Stack
                </h3>
                <div className="flex flex-wrap gap-3">
                  {techStack.map(tech => (
                    <span
                      key={tech}
                      className="bg-indigo-100 text-indigo-800 px-4 py-2 rounded-lg text-sm font-semibold transition-all duration-300 hover:bg-indigo-200 hover:shadow-lg hover:-translate-y-1 hover-seek"
                      onMouseMove={handleMouseMove}
                    >
                      {tech}
                    </span>
                  ))}
                </div>
              </div>
            </div>
          </div>
        </section>
      </div>
    </div>
  );
};


function App() {
  return (
    <div className="bg-[#f3f3f3] min-h-screen font-sans">
      <ResumeSection />
    </div>
  );
}

export default App;