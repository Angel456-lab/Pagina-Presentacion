import React from 'react';
import { ExternalLink } from 'lucide-react';

const Projects: React.FC = () => {
  const projects = [
    {
      title: 'Sistema de Gestión de Inventario',
      description: 'Aplicación web para gestionar inventarios de pequeñas y medianas empresas.',
      technologies: ['React', 'Node.js', 'MongoDB'],
      link: 'https://github.com/juanperez/inventory-system'
    },
    {
      title: 'App de Seguimiento de Fitness',
      description: 'Aplicación móvil para seguimiento de rutinas de ejercicio y nutrición.',
      technologies: ['React Native', 'Firebase', 'Redux'],
      link: 'https://github.com/juanperez/fitness-tracker'
    },
    {
      title: 'Plataforma de E-learning',
      description: 'Plataforma web para cursos en línea con sistema de videoconferencias integrado.',
      technologies: ['Vue.js', 'Django', 'PostgreSQL', 'WebRTC'],
      link: 'https://github.com/juanperez/e-learning-platform'
    }
  ];

  return (
    <section id="proyectos" className="py-16 bg-gray-100">
      <div className="container mx-auto px-4">
        <h2 className="text-3xl font-bold mb-8 text-center">Proyectos Destacados</h2>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {projects.map((project, index) => (
            <div key={index} className="bg-white p-6 rounded-lg shadow-md">
              <h3 className="text-xl font-semibold mb-2">{project.title}</h3>
              <p className="text-gray-600 mb-4">{project.description}</p>
              <div className="mb-4">
                <strong className="text-sm text-gray-500">Tecnologías:</strong>
                <ul className="list-disc list-inside mt-1">
                  {project.technologies.map((tech, techIndex) => (
                    <li key={techIndex} className="text-sm">{tech}</li>
                  ))}
                </ul>
              </div>
              <a
                href={project.link}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center text-blue-600 hover:text-blue-800"
              >
                Ver proyecto <ExternalLink className="ml-1" size={16} />
              </a>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Projects;