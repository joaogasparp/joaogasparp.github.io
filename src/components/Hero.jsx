import React from 'react';
export default function Hero() {
  return (
    <section id="hero" className="min-h-screen flex items-center justify-center bg-cover bg-center" style={{ backgroundImage: "url('/assets/hero.jpg')" }}>
      <div className="text-center text-light">
        <h1 className="text-5xl font-display mb-4">Olá, eu sou o Nome</h1>
        <p className="text-xl mb-6">Desenvolvedor Front‑end & Designer</p>
        <a href="#projects" className="px-6 py-3 bg-accent rounded-full hover:bg-accent/80">Ver Projetos</a>
      </div>
    </section>
  );
}
