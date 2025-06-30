import React, { useState } from 'react';
import { ExternalLinkIcon, GithubIcon, CodeIcon } from 'lucide-react';
export function ProjectsSection() {
  const [activeFilter, setActiveFilter] = useState('all');
  const projects = [{
    id: 1,
    title: 'Pitchly AI',
    description: 'A browser workspace where one prompt creates branded decks, edits images, links charts, and locks styles behind SAML-secured permissions. Built virtual-scroll canvas with diff renderer sustaining 60 fps on 10,000+ node decks, preserving undo history and cross-tab sync.',
    image: 'https://images.unsplash.com/photo-1581291518633-83b4ebd1d83e?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1170&q=80',
    technologies: ['TypeScript', 'Tailwind', 'Recharts', 'HyperFormula', 'GPT-4o', 'Firebase'],
    category: 'ai',
    liveUrl: 'https://pitchly-ai.com/',
    githubUrl: 'https://github.com/OrazioP26'
  }, {
    id: 2,
    title: 'SprBrk — College Break Calendar',
    description: 'A web app that scrapes academic calendars from 3,000+ U.S. colleges across 50 states to generate a dynamic, searchable calendar of school breaks.',
    image: 'https://images.unsplash.com/photo-1506784983877-45594efa4cbe?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1168&q=80',
    technologies: ['React', 'Web Scraping', 'Calendar API', 'JavaScript'],
    category: 'web',
    liveUrl: 'https://example.com',
    githubUrl: 'https://github.com/OrazioP26'
  }, {
    id: 3,
    title: 'Internal Image Editing Tool',
    description: 'Built for Dasion AI, this tool enables users to visualize image edits in real time with minimal latency, using bilinear interpolation and projective geometry.',
    image: 'https://images.unsplash.com/photo-1572044162444-ad60f128bdea?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1170&q=80',
    technologies: ['Image Processing', 'React', 'Python', 'Algorithms'],
    category: 'ai',
    liveUrl: null,
    githubUrl: 'https://github.com/OrazioP26'
  }, {
    id: 4,
    title: 'LinkedIn Networking Tool',
    description: 'Designed and prototyped a professional networking tool to enhance UX and user engagement, with seamless live networking sessions and real-time performance.',
    image: 'https://images.unsplash.com/photo-1611944212129-29977ae1398c?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1074&q=80',
    technologies: ['React', 'Node.js', 'Real-time', 'UI/UX'],
    category: 'web',
    liveUrl: null,
    githubUrl: 'https://github.com/OrazioP26'
  }, {
    id: 5,
    title: 'Algorithmic Trading Strategy',
    description: 'Developed and shipped a trading strategy with a 60% win rate, consistently beating the S&P 500 by 11 percentage points in historical back-testing.',
    image: 'https://images.unsplash.com/photo-1611974789855-9c2a0a7236a3?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1170&q=80',
    technologies: ['Python', 'Machine Learning', 'Statistical Analysis', 'Financial Data'],
    category: 'ml',
    liveUrl: null,
    githubUrl: 'https://github.com/OrazioP26'
  }, {
    id: 6,
    title: 'Sentiment Analysis Trading Model',
    description: 'Research project on algorithmic trading using alternative data-based sentiment models and machine learning to predict market movements.',
    image: 'https://images.unsplash.com/photo-1551288049-bebda4e38f71?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1170&q=80',
    technologies: ['Python', 'NLP', 'Machine Learning', 'Data Analysis'],
    category: 'ml',
    liveUrl: null,
    githubUrl: 'https://github.com/OrazioP26'
  }];
  const filteredProjects = activeFilter === 'all' ? projects : projects.filter(project => project.category === activeFilter);
  const filters = [{
    id: 'all',
    label: 'All Projects'
  }, {
    id: 'ai',
    label: 'AI & Image Processing'
  }, {
    id: 'web',
    label: 'Web Development'
  }, {
    id: 'ml',
    label: 'ML & Algorithms'
  }];
  return <section id="projects" className="py-16 md:py-24 bg-white">
      <div className="container mx-auto px-4 md:px-6">
        <div className="text-center mb-12">
          <h2 className="text-3xl md:text-4xl font-bold mb-4">My Projects</h2>
          <div className="w-20 h-1 bg-indigo-600 mx-auto mb-6"></div>
          <p className="text-lg text-gray-600 max-w-2xl mx-auto">
            Here are some of my recent projects. Each project reflects my skills
            and experience in different areas of technology.
          </p>
        </div>
        <div className="flex justify-center mb-10">
          <div className="flex flex-wrap gap-2 md:gap-4">
            {filters.map(filter => <button key={filter.id} onClick={() => setActiveFilter(filter.id)} className={`px-4 py-2 rounded-full text-sm md:text-base font-medium transition-colors ${activeFilter === filter.id ? 'bg-indigo-600 text-white' : 'bg-gray-200 text-gray-800 hover:bg-gray-300'}`}>
                {filter.label}
              </button>)}
          </div>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {filteredProjects.map(project => <div key={project.id} className="bg-white rounded-lg overflow-hidden shadow-lg border border-gray-200 transition-transform hover:scale-105">
              <div className="h-48 overflow-hidden">
                <img src={project.image} alt={project.title} className="w-full h-full object-cover transition-transform hover:scale-110" />
              </div>
              <div className="p-6">
                <h3 className="text-xl font-bold mb-2">{project.title}</h3>
                <p className="text-gray-600 mb-4">{project.description}</p>
                <div className="flex flex-wrap gap-2 mb-6">
                  {project.technologies.map((tech, index) => <span key={index} className="bg-indigo-100 text-indigo-800 px-2 py-1 rounded-md text-xs font-medium">
                      {tech}
                    </span>)}
                </div>
                <div className="flex justify-between">
                  {project.liveUrl && <a href={project.liveUrl} target="_blank" rel="noopener noreferrer" className="flex items-center text-indigo-600 hover:text-indigo-800 transition-colors">
                      <ExternalLinkIcon className="w-4 h-4 mr-1" />
                      <span>Live Demo</span>
                    </a>}
                  <a href={project.githubUrl} target="_blank" rel="noopener noreferrer" className="flex items-center text-indigo-600 hover:text-indigo-800 transition-colors"></a>
                </div>
              </div>
            </div>)}
        </div>
        <div className="text-center mt-12">
          <a href="https://github.com/OrazioP26" target="_blank" rel="noopener noreferrer" className="inline-flex items-center bg-gray-800 hover:bg-gray-900 text-white font-medium py-3 px-6 rounded-md transition-colors shadow-md">
            <CodeIcon className="w-5 h-5 mr-2" />
            View More on GitHub
          </a>
        </div>
      </div>
    </section>;
}