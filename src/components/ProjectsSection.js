

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

export default ProjectsSection;
