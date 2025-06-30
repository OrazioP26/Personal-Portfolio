import React from 'react';
import { CodeIcon, ServerIcon, LayoutIcon, DatabaseIcon } from 'lucide-react';
export function SkillsSection() {
  const frontendSkills = ['HTML/CSS', 'JavaScript', 'TypeScript', 'React', 'Tailwind CSS', 'Responsive Design', 'UI/UX Basics', 'Figma'];
  const backendSkills = ['Python', 'Java', 'Node.js', 'Express', 'Spring Boot', 'FastAPI', 'REST APIs', 'OCaml', 'C#'];
  const databaseSkills = ['PostgreSQL', 'SQL', 'Database Design', 'Data Modeling', 'ORM Tools', 'Data Structures', 'Algorithms'];
  const otherSkills = ['Git & GitHub', 'GitHub Actions', 'Docker', 'Agile/Scrum', 'Machine Learning', 'Algorithmic Trading', 'Statistical Analysis', 'Team Leadership'];
  return <section id="skills" className="py-16 md:py-24 bg-gray-50">
      <div className="container mx-auto px-4 md:px-6">
        <div className="text-center mb-12">
          <h2 className="text-3xl md:text-4xl font-bold mb-4">My Skills</h2>
          <div className="w-20 h-1 bg-indigo-600 mx-auto mb-6"></div>
          <p className="text-lg text-gray-600 max-w-2xl mx-auto">
            A comprehensive showcase of my technical skills and competencies
            across various technologies and domains
          </p>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {/* Frontend Skills */}
          <div className="bg-white p-6 rounded-lg shadow-md transition-transform hover:scale-105">
            <div className="w-14 h-14 bg-indigo-100 rounded-lg flex items-center justify-center mb-6">
              <CodeIcon className="w-8 h-8 text-indigo-600" />
            </div>
            <h3 className="text-xl font-bold mb-4">Frontend</h3>
            <ul className="space-y-2">
              {frontendSkills.map((skill, index) => <li key={index} className="flex items-center">
                  <span className="w-2 h-2 bg-indigo-600 rounded-full mr-2"></span>
                  <span>{skill}</span>
                </li>)}
            </ul>
          </div>
          {/* Backend Skills */}
          <div className="bg-white p-6 rounded-lg shadow-md transition-transform hover:scale-105">
            <div className="w-14 h-14 bg-indigo-100 rounded-lg flex items-center justify-center mb-6">
              <ServerIcon className="w-8 h-8 text-indigo-600" />
            </div>
            <h3 className="text-xl font-bold mb-4">Backend</h3>
            <ul className="space-y-2">
              {backendSkills.map((skill, index) => <li key={index} className="flex items-center">
                  <span className="w-2 h-2 bg-indigo-600 rounded-full mr-2"></span>
                  <span>{skill}</span>
                </li>)}
            </ul>
          </div>
          {/* Database Skills */}
          <div className="bg-white p-6 rounded-lg shadow-md transition-transform hover:scale-105">
            <div className="w-14 h-14 bg-indigo-100 rounded-lg flex items-center justify-center mb-6">
              <DatabaseIcon className="w-8 h-8 text-indigo-600" />
            </div>
            <h3 className="text-xl font-bold mb-4">Database & CS</h3>
            <ul className="space-y-2">
              {databaseSkills.map((skill, index) => <li key={index} className="flex items-center">
                  <span className="w-2 h-2 bg-indigo-600 rounded-full mr-2"></span>
                  <span>{skill}</span>
                </li>)}
            </ul>
          </div>
          {/* Other Skills */}
          <div className="bg-white p-6 rounded-lg shadow-md transition-transform hover:scale-105">
            <div className="w-14 h-14 bg-indigo-100 rounded-lg flex items-center justify-center mb-6">
              <LayoutIcon className="w-8 h-8 text-indigo-600" />
            </div>
            <h3 className="text-xl font-bold mb-4">DevOps & Other</h3>
            <ul className="space-y-2">
              {otherSkills.map((skill, index) => <li key={index} className="flex items-center">
                  <span className="w-2 h-2 bg-indigo-600 rounded-full mr-2"></span>
                  <span>{skill}</span>
                </li>)}
            </ul>
          </div>
        </div>
        <div className="mt-16 text-center">
          <h3 className="text-2xl font-bold mb-6">Professional Skillset</h3>
          <div className="flex flex-wrap justify-center gap-4">
            {['Problem Solving', 'Team Leadership', 'Cross-functional Coordination', 'Product Management', 'Technical Planning', 'Entrepreneurship', 'Image Processing', 'AI Technologies', 'Market Validation'].map((skill, index) => <span key={index} className="bg-indigo-100 text-indigo-800 px-4 py-2 rounded-full text-sm font-medium">
                {skill}
              </span>)}
          </div>
        </div>
      </div>
    </section>;
}