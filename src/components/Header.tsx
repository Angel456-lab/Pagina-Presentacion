import React from 'react';
import { Code, Briefcase, User } from 'lucide-react';

const Header: React.FC = () => {
  return (
    <header className="bg-blue-600 text-white p-4">
      <div className="container mx-auto flex justify-between items-center">
        <h1 className="text-2xl font-bold">Juan Pérez</h1>
        <nav>
          <ul className="flex space-x-4">
            <li><a href="#sobre-mi" className="flex items-center"><User className="mr-1" size={18} /> Sobre mí</a></li>
            <li><a href="#tecnologias" className="flex items-center"><Code className="mr-1" size={18} /> Tecnologías</a></li>
            <li><a href="#proyectos" className="flex items-center"><Briefcase className="mr-1" size={18} /> Proyectos</a></li>
          </ul>
        </nav>
      </div>
    </header>
  );
};

export default Header;