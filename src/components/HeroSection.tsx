import React from 'react';
import { ArrowDownIcon, GithubIcon, LinkedinIcon, FileTextIcon } from 'lucide-react';
export function HeroSection() {
  return <section id="home" className="pt-24 pb-16 md:pt-32 md:pb-24 bg-gradient-to-br from-indigo-50 to-white min-h-screen flex items-center">
      <div className="container mx-auto px-4 md:px-6">
        <div className="flex flex-col md:flex-row items-center justify-between gap-12">
          <div className="md:w-1/2 text-center md:text-left">
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold mb-4">
              <span className="text-gray-800">Hi, I'm </span>
              <span className="text-indigo-600">Orazio </span>
            </h1>
            <h2 className="text-2xl md:text-3xl font-medium text-gray-600 mb-6">
              Software Engineer & AI Entrepreneur
            </h2>
            <p className="text-lg text-gray-600 mb-8 max-w-lg mx-auto md:mx-0">
              Co-Founder, CEO & CTO at Pitchly AI, building a browser workspace
              where one prompt creates branded decks, edits images, links
              charts, and locks styles. Cornell University student passionate
              about creating impactful technology.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center md:justify-start">
              <a href="#contact" className="bg-indigo-600 hover:bg-indigo-700 text-white font-medium py-3 px-6 rounded-md transition-colors shadow-md">
                Contact Me
              </a>
              <a href="#projects" className="bg-white hover:bg-gray-100 text-indigo-600 font-medium py-3 px-6 rounded-md border border-indigo-200 transition-colors">
                View My Work
              </a>
            </div>
            <div className="flex mt-8 gap-6 justify-center md:justify-start">
              <a href="https://github.com/OrazioP26" target="_blank" rel="noopener noreferrer" className="text-gray-600 hover:text-indigo-600 transition-colors" aria-label="GitHub">
                <GithubIcon className="w-6 h-6" />
              </a>
              <a href="https://www.linkedin.com/in/orazio-petito/" target="_blank" rel="noopener noreferrer" className="text-gray-600 hover:text-indigo-600 transition-colors" aria-label="LinkedIn">
                <LinkedinIcon className="w-6 h-6" />
              </a>
              <a href="/resume.pdf" target="_blank" rel="noopener noreferrer" className="text-gray-600 hover:text-indigo-600 transition-colors" aria-label="Resume">
                <FileTextIcon className="w-6 h-6" />
              </a>
            </div>
          </div>
          <div className="md:w-1/2 flex justify-center md:justify-end">
            <div className="relative">
              <div className="w-64 h-64 md:w-80 md:h-80 rounded-full overflow-hidden border-4 border-white shadow-xl">
                <img src="/profile.jpg" alt="Orazio " className="w-full h-full object-cover" />
              </div>
            </div>
          </div>
        </div>
        <div className="flex justify-center mt-16 md:mt-24">
          <a href="#about" className="animate-bounce bg-white p-2 rounded-full shadow-md" aria-label="Scroll down to about section">
            <ArrowDownIcon className="w-6 h-6 text-indigo-600" />
          </a>
        </div>
      </div>
    </section>;
}