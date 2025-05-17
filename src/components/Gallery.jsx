import React from 'react';
const fotos = [
  '/assets/gallery1.jpg',
  '/assets/gallery2.jpg',
  '/assets/gallery3.jpg',
  // ... mais imagens
];

export default function Gallery() {
  return (
    <section id="gallery" className="py-20 bg-gray-50 dark:bg-gray-800">
      <div className="container mx-auto px-6">
        <h2 className="text-4xl font-display mb-8">Galeria</h2>
        <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4">
          {fotos.map((src, i) => (
            <div key={i} className="overflow-hidden rounded-lg shadow-md">
              <img src={src} alt={`Foto ${i+1}`} className="w-full h-48 object-cover" />
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
