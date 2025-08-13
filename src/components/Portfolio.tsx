import React from 'react';
import { ExternalLink, Github } from 'lucide-react';

const Portfolio: React.FC = () => {
  const projects = [
    {
      id: 1,
      title: "Serenity Blog",
      description: "A minimalist blog platform with anime-inspired design elements",
      image: "https://images.pexels.com/photos/1779487/pexels-photo-1779487.jpeg?auto=compress&cs=tinysrgb&w=800",
      tags: ["React", "TypeScript", "Tailwind"],
      liveUrl: "#",
      githubUrl: "#"
    },
    {
      id: 2,
      title: "Sakura Dashboard",
      description: "Analytics dashboard with peaceful, nature-inspired UI",
      image: "https://images.pexels.com/photos/270348/pexels-photo-270348.jpeg?auto=compress&cs=tinysrgb&w=800",
      tags: ["Vue", "D3.js", "CSS"],
      liveUrl: "#",
      githubUrl: "#"
    },
    {
      id: 3,
      title: "Zen E-commerce",
      description: "Clean and calming online store with smooth animations",
      image: "https://images.pexels.com/photos/935756/pexels-photo-935756.jpeg?auto=compress&cs=tinysrgb&w=800",
      tags: ["Next.js", "Framer Motion", "Stripe"],
      liveUrl: "#",
      githubUrl: "#"
    },
    {
      id: 4,
      title: "Tranquil Tasks",
      description: "Task management app with gamification and anime aesthetics",
      image: "https://images.pexels.com/photos/1029141/pexels-photo-1029141.jpeg?auto=compress&cs=tinysrgb&w=800",
      tags: ["React Native", "Firebase", "Redux"],
      liveUrl: "#",
      githubUrl: "#"
    }
  ];

  return (
    <section id="portfolio" className="py-20 bg-white">
      <div className="container mx-auto px-6">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold text-slate-700 mb-4">My Work</h2>
          <div className="w-24 h-1 bg-sage-400 mx-auto rounded-full mb-6"></div>
          <p className="text-xl text-slate-500 max-w-2xl mx-auto">
            A collection of projects that showcase my passion for creating beautiful, functional experiences
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-2 gap-8 max-w-6xl mx-auto">
          {projects.map((project) => (
            <div
              key={project.id}
              className="group bg-white rounded-3xl shadow-soft hover:shadow-xl transition-all duration-500 hover:scale-105 overflow-hidden"
            >
              {/* Image */}
              <div className="relative overflow-hidden">
                <img
                  src={project.image}
                  alt={project.title}
                  className="w-full h-64 object-cover transition-transform duration-500 group-hover:scale-110"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/20 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
                
                {/* Overlay buttons */}
                <div className="absolute top-4 right-4 flex space-x-2 opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                  <a
                    href={project.liveUrl}
                    className="p-2 bg-white/90 hover:bg-white rounded-full transition-colors duration-300"
                    aria-label="View live project"
                  >
                    <ExternalLink size={18} className="text-slate-600" />
                  </a>
                  <a
                    href={project.githubUrl}
                    className="p-2 bg-white/90 hover:bg-white rounded-full transition-colors duration-300"
                    aria-label="View source code"
                  >
                    <Github size={18} className="text-slate-600" />
                  </a>
                </div>
              </div>

              {/* Content */}
              <div className="p-6">
                <h3 className="text-xl font-bold text-slate-700 mb-2 group-hover:text-sage-600 transition-colors duration-300">
                  {project.title}
                </h3>
                <p className="text-slate-500 mb-4 leading-relaxed">
                  {project.description}
                </p>
                
                {/* Tags */}
                <div className="flex flex-wrap gap-2">
                  {project.tags.map((tag) => (
                    <span
                      key={tag}
                      className="px-3 py-1 bg-sage-100 text-sage-700 text-sm rounded-full font-medium"
                    >
                      {tag}
                    </span>
                  ))}
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Portfolio;
