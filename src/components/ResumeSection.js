import { Calendar, GraduationCap, Briefcase, Code} from 'lucide-react';


// The updated ResumeSection component (No changes)
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

export default ResumeSection;
