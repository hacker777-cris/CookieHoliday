import { useState } from 'react';
import { X } from 'lucide-react';

const photos = [
  'https://images.pexels.com/photos/3861458/pexels-photo-3861458.jpeg?auto=compress&cs=tinysrgb&w=800',
  'https://images.pexels.com/photos/3822906/pexels-photo-3822906.jpeg?auto=compress&cs=tinysrgb&w=800',
  'https://images.pexels.com/photos/3769999/pexels-photo-3769999.jpeg?auto=compress&cs=tinysrgb&w=800',
  'https://images.pexels.com/photos/3785079/pexels-photo-3785079.jpeg?auto=compress&cs=tinysrgb&w=800',
  'https://images.pexels.com/photos/4429291/pexels-photo-4429291.jpeg?auto=compress&cs=tinysrgb&w=800',
  'https://images.pexels.com/photos/3812944/pexels-photo-3812944.jpeg?auto=compress&cs=tinysrgb&w=800',
];

export function PhotoSection() {
  const [selectedPhoto, setSelectedPhoto] = useState<string | null>(null);

  return (
    <div className="text-center">
      <h2 className="text-4xl md:text-5xl font-serif text-text mb-4">
        Some of My Favorite Pictures of You
      </h2>
      <p className="text-text/60 mb-12 text-sm">
        I hope it's okay that I used a few of my favorite pictures of you 💙
      </p>

      <div className="grid grid-cols-2 md:grid-cols-3 gap-4">
        {photos.map((photo, index) => (
          <div
            key={index}
            className="aspect-square rounded-lg overflow-hidden cursor-pointer group"
            style={{ animationDelay: `${index * 0.1}s` }}
            onClick={() => setSelectedPhoto(photo)}
          >
            <img
              src={photo}
              alt={`Memory ${index + 1}`}
              className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110 border-4 border-white rounded-lg shadow-sm"
            />
          </div>
        ))}
      </div>

      {selectedPhoto && (
        <div
          className="fixed inset-0 z-50 bg-background/80 backdrop-blur-md flex items-center justify-center p-4 animate-fade-in"
          onClick={() => setSelectedPhoto(null)}
        >
          <button
            className="absolute top-4 right-4 text-text/80 hover:text-text transition-colors"
            onClick={() => setSelectedPhoto(null)}
          >
            <X size={32} />
          </button>
          <img
            src={selectedPhoto}
            alt="Expanded view"
            className="max-w-full max-h-full rounded-lg shadow-2xl border-4 border-white"
          />
        </div>
      )}
    </div>
  );
}
