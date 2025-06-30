import React from 'react';
import { UserIcon, BriefcaseIcon, GraduationCapIcon, AwardIcon, FileTextIcon } from 'lucide-react';
export function AboutSection() {
  return <section id="about" className="py-16 md:py-24 bg-white">
      <div className="container mx-auto px-4 md:px-6">
        <div className="text-center mb-12">
          <h2 className="text-3xl md:text-4xl font-bold mb-4">About Me</h2>
          <div className="w-20 h-1 bg-indigo-600 mx-auto mb-6"></div>
          <p className="text-lg text-gray-600 max-w-2xl mx-auto">
            Cornell University student and tech entrepreneur with experience in
            AI, software engineering, and algorithmic trading
          </p>
        </div>
        <div className="flex justify-center mb-10">
          <a href="/resume.pdf" target="_blank" rel="noopener noreferrer" className="flex items-center bg-indigo-600 hover:bg-indigo-700 text-white font-medium py-3 px-6 rounded-md transition-colors shadow-md">
            <FileTextIcon className="w-5 h-5 mr-2" />
            Download Resume
          </a>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
          <div>
            <h3 className="text-2xl font-bold mb-6 flex items-center">
              <UserIcon className="mr-2 text-indigo-600" />
              Get to know me!
            </h3>
            <div className="space-y-4 text-gray-700">
              <p>
                I'm a <strong>Computer Science student and entrepreneur</strong>{' '}
                building innovative AI solutions. As the CEO and CTO of Pitchly
                AI, I'm developing a generative-work platform that fuses slides,
                images, and spreadsheets into a single browser tab.
              </p>
              <p>
                Currently pursuing a{' '}
                <strong>
                  Bachelor of Arts in Computer Science with a Minor in Business
                </strong>{' '}
                at Cornell University. My coursework includes Functional
                Programming, Data Structures, Object-Oriented Programming,
                Mathematical Foundations of Computing, Calculus, and Linear
                Algebra.
              </p>
              <p>
                Beyond my technical work, I'm actively involved in the Cornell
                community as Captain of the Rugby Football Club, where I lead a
                team of 40+ players, coordinate with coaches, and organize
                competitive matches across the Northeast. Rugby has taught me
                valuable lessons about teamwork, resilience, and leadership
                under pressure.
              </p>
              <p>
                When I'm not coding or on the rugby pitch, I enjoy playing poker
                - a game that sharpens my strategic thinking, risk assessment,
                and decision-making skills. I find many parallels between poker
                strategy and business decision-making.
              </p>
              <p>
                I'm passionate about leveraging technology to solve real-world
                problems and am always open to new opportunities for
                collaboration and innovation.
              </p>
            </div>
            <a href="#contact" className="inline-block mt-6 bg-indigo-600 hover:bg-indigo-700 text-white font-medium py-3 px-6 rounded-md transition-colors shadow-md">
              Contact Me
            </a>
          </div>
          <div className="bg-gray-50 p-8 rounded-lg shadow-md">
            <h3 className="text-2xl font-bold mb-6 flex items-center">
              <BriefcaseIcon className="mr-2 text-indigo-600" />
              Experience
            </h3>
            <div className="space-y-6">
              <div className="border-l-4 border-indigo-600 pl-4">
                <h4 className="text-xl font-semibold">Co-Founder, CEO & CTO</h4>
                <p className="text-indigo-600">
                  Pitchly AI (May 2025 - Present)
                </p>
                <p className="text-gray-600 mt-2">
                  Founded and lead Pitchly AI — a browser workspace where one
                  prompt creates branded decks, edits images, links charts, and
                  locks styles behind SAML-secured permissions. Built on
                  TypeScript, Tailwind, Recharts, and HyperFormula. Designed
                  GPT-4o pipeline mapping JSON outlines into components, cutting
                  deck-prep time by ~70%.
                </p>
              </div>
              <div className="border-l-4 border-indigo-600 pl-4">
                <h4 className="text-xl font-semibold">
                  Software Engineering Intern
                </h4>
                <p className="text-indigo-600">
                  Dasion AI (Dec 2024 - Present)
                </p>
                <p className="text-gray-600 mt-2">
                  Built and deployed an internal image editing tool, enabling
                  users to visualize edits in real time. Applied bilinear
                  interpolation and projective geometry to improve workflows and
                  reduce manual effort by 50%.
                </p>
              </div>
              <div className="border-l-4 border-indigo-600 pl-4">
                <h4 className="text-xl font-semibold">
                  Software Engineering Intern
                </h4>
                <p className="text-indigo-600">
                  LinkedIn (Aug 2023 - May 2025)
                </p>
                <p className="text-gray-600 mt-2">
                  Selected for the prestigious ASCEND two-year program. Led a
                  cross-functional team of 4 using Agile to ship high-quality
                  features. Built scalable infrastructure for seamless
                  networking sessions.
                </p>
              </div>
            </div>
            <h3 className="text-2xl font-bold mt-10 mb-6 flex items-center">
              <GraduationCapIcon className="mr-2 text-indigo-600" />
              Education
            </h3>
            <div className="space-y-6">
              <div className="border-l-4 border-indigo-600 pl-4">
                <h4 className="text-xl font-semibold">
                  Bachelor of Arts in Computer Science
                </h4>
                <p className="text-indigo-600">
                  Cornell University, Ithaca, NY (Expected May 2027)
                </p>
                <p className="text-gray-600 mt-2">
                  Minor in Business. Coursework includes Functional Programming,
                  Data Structures, Object-Oriented Programming, Mathematical
                  Foundations, Calculus I & II, Linear Algebra.
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>;
}