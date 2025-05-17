import React from 'react';
export default function Footer() {
  return (
    <footer id="footer" className="py-6 text-center text-secondary">
      <p>© {new Date().getFullYear()} Nome. Todos os direitos reservados.</p>
      <div className="space-x-4 mt-2">
        <a href="#" aria-label="GitHub"><i className="fab fa-github fa-lg"></i></a>
        <a href="#" aria-label="LinkedIn"><i className="fab fa-linkedin fa-lg"></i></a>
        <a href="#" aria-label="Twitter"><i className="fab fa-twitter fa-lg"></i></a>
      </div>
    </footer>
  );
}
