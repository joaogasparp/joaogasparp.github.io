import React, { useEffect } from 'react';
export default function About() {
  useEffect(() => {
    // Lógica de animação (fade-in, barras de skills)
  }, []);

  const skills = [
    { name: 'React', level: 90 },
    { name: 'JavaScript', level: 85 },
    { name: 'HTML/CSS', level: 95 },
    { name: 'Tailwind CSS', level: 80 },
  ];

  return (
    <section id="about" className="py-20 bg-light dark:bg-dark">
      <div className="container mx-auto px-6">
        <h2 className="text-4xl font-display mb-8">Sobre Mim</h2>
        <p className="mb-12">Breve descrição sobre a experiência, formação e interesses...</p>
        <div className="space-y-6">
          {skills.map((skill) => (
            <div key={skill.name}>
              <div className="flex justify-between mb-1">
                <span>{skill.name}</span>
                <span>{skill.level}%</span>
              </div>
              <div className="w-full bg-gray-200 dark:bg-gray-700 rounded-full h-4">
                <div className="bg-accent h-4 rounded-full" style={{ width: `${skill.level}%` }}></div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
