import React, { useState } from 'react';
import SpiderBackground from '../ui/SpiderBackground';

interface ProjectProps {
  theme: string;
}
const Projects: React.FC<ProjectProps> = ({
  theme
}) => {
  const [activeTab, setActiveTab] = useState('cs');
  const csProjects = [{
    id: 'cs1',
    title: 'Marketing Website',
    description: 'Developed a Node.js marketing website with key feature highlights and a feedback form for user input.',
    tags: ['Node js'],
    image: '/Marketing.png'
  }, {
    id: 'cs2',
    title: 'HopeBridge',
    description: 'Charity Donation Platform enabling secure,transparent donations with features like biometric authentication, evouchers, and job support.',
    tags: ['Spring Boot', 'Flutter'],
    image: '/Hope.jpg'
  }, {
    id: 'cs3',
    title: 'Realtime Event Ticketing System',
    description: 'Developed a real-time event ticketing system using Spring Boot andAngular, featuring live updates and easy ticket management.',
    tags: ['Java', 'Springboot', 'Angular'],
    image: '/real.jpg'
  }];
  const designProjects = [{
    id: 'design1',
    title: 'Logo & Brand Identity Design',
    description: 'Specialized in creating distinctive logos and comprehensive brand identities, including custom typography, color schemes, and brand guidelines for various businesses.',
    tags: ['Logo Design', 'Brand Identity', 'Typography', 'Color Theory'],
    image: 'https://images.unsplash.com/photo-1626785774573-4b799315345d?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=2071&q=80'
  }, {
    id: 'design2',
    title: 'UI/UX Redesign',
    description: 'Complete redesign of a mobile app interface focusing on usability and modern aesthetics.',
    tags: ['UI/UX', 'Mobile Design', 'Prototyping'],
    image: 'https://images.unsplash.com/photo-1586717791821-3f44a563fa4c?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=2070&q=80'
  }, {
    id: 'design3',
    title: 'Motion Graphics & Video Editing',
    description: 'Created dynamic motion graphics and video content using Adobe After Effects, featuring smooth animations and visual effects.',
    tags: ['After Effects', 'Motion Graphics', 'Video Editing'],
    image: 'https://images.unsplash.com/photo-1536240478700-b869070f9279?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=2070&q=80'
  }];
  return <section id="projects" className="py-20 w-full relative overflow-hidden">
      <SpiderBackground />
      <div className="container mx-auto px-4 relative z-10">
        <h2 className="text-3xl md:text-4xl font-bold mb-4 text-center">
          My Projects
        </h2>
        <p className="text-lg text-gray-600 dark:text-gray-300 max-w-3xl mx-auto text-center mb-12">
          A showcase of my work spanning both computer science and graphic
          design disciplines
        </p>
        {/* Tab Navigation */}
        <div className="flex justify-center mb-12">
          <div className="inline-flex p-1 bg-gray-100 dark:bg-gray-800 rounded-lg">
            <button onClick={() => setActiveTab('cs')} className={`px-6 py-2 rounded-md text-sm font-medium transition-colors duration-200 ${activeTab === 'cs' ? 'bg-blue-500 text-white' : 'text-gray-600 dark:text-gray-300 hover:bg-gray-200 dark:hover:bg-gray-700'}`}>
              Computer Science
            </button>
            <button onClick={() => setActiveTab('design')} className={`px-6 py-2 rounded-md text-sm font-medium transition-colors duration-200 ${activeTab === 'design' ? 'bg-pink-500 text-white' : 'text-gray-600 dark:text-gray-300 hover:bg-gray-200 dark:hover:bg-gray-700'}`}>
              Graphic Design
            </button>
          </div>
        </div>
        {/* Project Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {activeTab === 'cs' ? csProjects.map(project => <div key={project.id} className="group bg-white dark:bg-gray-800 rounded-lg overflow-hidden shadow-md hover:shadow-xl transition-shadow duration-300">
                  <div className="relative h-48 overflow-hidden">
                    <img 
                      src={project.image} 
                      alt={project.title} 
                      className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110" 
                      style={{ objectPosition: 'center 25%' }}
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-black/70 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-end">
                      <div className="p-4">
                        <h3 className="text-white font-bold text-lg">
                          {project.title}
                        </h3>
                      </div>
                    </div>
                  </div>
                  <div className="p-6">
                    <h3 className="font-bold text-xl mb-2">{project.title}</h3>
                    <p className="text-gray-600 dark:text-gray-300 mb-4">
                      {project.description}
                    </p>
                    <div className="flex flex-wrap gap-2">
                      {project.tags.map(tag => <span key={tag} className="text-xs px-2 py-1 bg-blue-100 dark:bg-blue-900/30 text-blue-600 dark:text-blue-400 rounded">
                          {tag}
                        </span>)}
                    </div>
                  </div>
                </div>) : designProjects.map(project => <div key={project.id} className="group bg-white dark:bg-gray-800 rounded-lg overflow-hidden shadow-md hover:shadow-xl transition-shadow duration-300">
                  <div className="relative h-48 overflow-hidden">
                    <img src={project.image} alt={project.title} className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110" />
                    <div className="absolute inset-0 bg-gradient-to-t from-black/70 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-end">
                      <div className="p-4">
                        <h3 className="text-white font-bold text-lg">
                          {project.title}
                        </h3>
                      </div>
                    </div>
                  </div>
                  <div className="p-6">
                    <h3 className="font-bold text-xl mb-2">{project.title}</h3>
                    <p className="text-gray-600 dark:text-gray-300 mb-4">
                      {project.description}
                    </p>
                    <div className="flex flex-wrap gap-2">
                      {project.tags.map(tag => <span key={tag} className="text-xs px-2 py-1 bg-pink-100 dark:bg-pink-900/30 text-pink-600 dark:text-pink-400 rounded">
                          {tag}
                        </span>)}
                    </div>
                  </div>
                </div>)}
        </div>
        <div className="text-center mt-12">
          <a href="#" className="inline-flex items-center px-6 py-3 border border-gray-300 dark:border-gray-700 rounded-md hover:bg-gray-100 dark:hover:bg-gray-800 transition-colors duration-300">
            View All Projects
            <svg className="ml-2 w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M14 5l7 7m0 0l-7 7m7-7H3" />
            </svg>
          </a>
        </div>
      </div>
    </section>;
};
export default Projects;