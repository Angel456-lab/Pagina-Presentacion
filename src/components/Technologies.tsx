import React from 'react';
import { Database, Server, Globe, Code2 } from 'lucide-react';

const Technologies: React.FC = () => {
  const techs = [
    { name: 'Frontend', icon: Globe, skills: ['React', 'Vue.js', 'Angular', 'HTML5', 'CSS3', 'JavaScript'] },
    { name: 'Backend', icon: Server, skills: ['Node.js', 'Python', 'Java', 'C#', 'PHP'] },
    { name: 'Bases de datos', icon: Database, skills: ['MySQL', 'MongoDB', 'PostgreSQL', 'Redis'] },
    { name: 'Otros', icon: Code2, skills: ['Git', 'Docker', 'AWS', 'CI/CD', 'Agile/Scrum'] },
  ];

  return (
    <section id="tecnologias" className="py-16">
      <div className="container mx-auto px-4">
        <h2 className="text-3xl font-bold mb-8 text-center">Tecnologías</h2>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {techs.map((tech, index) => (
            <div key={index} className="bg-white p-6 rounded-lg shadow-md">
              <tech.icon className="w-12 h-12 mb-4 text-blue-600" />
              <h3 className="text-xl font-semibold mb-4">{tech.name}</h3>
              <ul className="list-disc list-inside">
                {tech.skills.map((skill, skillIndex) => (
                  <li key={skillIndex}>{skill}</li>
                ))}
              </ul>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Technologies;