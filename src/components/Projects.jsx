import React from 'react';
const projetos = [
  { title: 'Projeto 1', image: '/assets/project1.jpg', link: '#' },
  { title: 'Projeto 2', image: '/assets/project2.jpg', link: '#' },
  // ... mais projetos
];

export default function Projects() {
  return (
    <section id="projects" className="py-20">
      <div className="container mx-auto px-6">
        <h2 className="text-4xl font-display mb-8">Projetos</h2>
        <div className="grid gap-8 md:grid-cols-2 lg:grid-cols-3">
          {projetos.map((proj) => (
            <a key={proj.title} href={proj.link} className="block group">
              <div className="overflow-hidden rounded-2xl shadow-lg">
                <img src={proj.image} alt={proj.title} className="w-full h-48 object-cover group-hover:scale-105 transition" />
              </div>
              <h3 className="mt-4 text-2xl">{proj.title}</h3>
            </a>
          ))}
        </div>
      </div>
    </section>
  );
}
