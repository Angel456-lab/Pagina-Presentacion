import React from 'react';

const About: React.FC = () => {
  return (
    <section id="sobre-mi" className="py-16 bg-gray-100">
      <div className="container mx-auto px-4">
        <h2 className="text-3xl font-bold mb-8 text-center">Sobre mí</h2>
        <div className="flex flex-col md:flex-row items-center">
          <img
            src="https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?ixlib=rb-1.2.1&auto=format&fit=crop&w=300&q=80"
            alt="Juan Pérez"
            className="rounded-full w-64 h-64 object-cover mb-8 md:mb-0 md:mr-8"
          />
          <div>
            <p className="text-lg mb-4">
              Soy Juan Pérez, un apasionado ingeniero en computación con más de 5 años de experiencia en el desarrollo de software y soluciones tecnológicas innovadoras.
            </p>
            <p className="text-lg">
              Mi enfoque se centra en crear aplicaciones eficientes y escalables, siempre buscando aprender y aplicar las últimas tecnologías en mis proyectos.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;