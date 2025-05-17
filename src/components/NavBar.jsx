import React from 'react';
export default function Navbar() {
  return (
    <nav className="bg-white/90 dark:bg-primary/90 fixed w-full backdrop-blur-sm shadow-md z-50">
      <div className="container mx-auto flex justify-between items-center py-4 px-6">
        <a href="#hero" className="text-2xl font-display">Nome</a>
        <ul className="space-x-6 hidden md:flex">
          <li><a href="#about" className="hover:text-accent">Sobre</a></li>
          <li><a href="#projects" className="hover:text-accent">Projetos</a></li>
          <li><a href="#gallery" className="hover:text-accent">Galeria</a></li>
          <li><a href="#footer" className="hover:text-accent">Contacto</a></li>
        </ul>
      </div>
    </nav>
  );
}
