import { useState } from 'react';
import { X } from 'lucide-react';

import photo1 from '../assets/IMG-20251207-WA0011.jpg';
import photo2 from '../assets/IMG-20251218-WA0010.jpg';
import photo3 from '../assets/IMG-20251219-WA0005.jpg';
import video1 from '../assets/VID_20251115_065621_126.mp4';
import video2 from '../assets/Screenrecorder-2025-12-23-14-22-24-910.mp4';
import video3 from '../assets/Screenrecorder-2025-12-23-14-22-57-645.mp4';

const media = [
  { type: 'image', src: photo1 },
  { type: 'video', src: video1 },
  { type: 'image', src: photo2 },
  { type: 'image', src: photo3 },
  { type: 'video', src: video2 },
  { type: 'video', src: video3 },
];

export function PhotoSection() {
  const [selectedMedia, setSelectedMedia] = useState<{
    type: string;
    src: string;
  } | null>(null);

  return (
    <div className="text-center">
      <h2 className="text-4xl md:text-5xl font-serif text-text mb-4">
        Some of My Favorite Pictures & Videos of You
      </h2>
      <p className="text-text/60 mb-12 text-sm">
        I hope it's okay that I used a few of my favorite pictures and videos of
        you 💙
      </p>

      <div className="grid grid-cols-2 md:grid-cols-3 gap-4">
        {media.map((item, index) => (
          <div
            key={index}
            className="aspect-square rounded-lg overflow-hidden cursor-pointer group relative"
            style={{ animationDelay: `${index * 0.1}s` }}
            onClick={() => setSelectedMedia(item)}
          >
            {item.type === 'image' ? (
              <img
                src={item.src}
                alt={`Memory ${index + 1}`}
                className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110 border-4 border-white rounded-lg shadow-sm"
              />
            ) : (
              <video
                src={item.src}
                muted
                loop
                className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110 border-4 border-white rounded-lg shadow-sm"
              />
            )}
            {item.type === 'video' && (
              <div className="absolute inset-0 flex items-center justify-center bg-black/30 group-hover:bg-black/50 transition-colors">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  fill="none"
                  viewBox="0 0 24 24"
                  strokeWidth="1.5"
                  stroke="currentColor"
                  className="w-12 h-12 text-white"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    d="M21 12a9 9 0 1 1-18 0 9 9 0 0 1 18 0Z"
                  />
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    d="M15.97 8.47a.75.75 0 0 0-1.12.02L10.5 13.5l-2.25-2.25a.75.75 0 0 0-1.12 1.06l3 3a.75.75 0 0 0 1.12-.02l5.25-5.25a.75.75 0 0 0-.02-1.12Z"
                  />
                </svg>
              </div>
            )}
          </div>
        ))}
      </div>

      {selectedMedia && (
        <div
          className="fixed inset-0 z-50 bg-background/80 backdrop-blur-md flex items-center justify-center p-4 animate-fade-in"
          onClick={() => setSelectedMedia(null)}
        >
          <button
            className="absolute top-4 right-4 text-text/80 hover:text-text transition-colors"
            onClick={() => setSelectedMedia(null)}
          >
            <X size={32} />
          </button>
          {selectedMedia.type === 'image' ? (
            <img
              src={selectedMedia.src}
              alt="Expanded view"
              className="max-w-full max-h-full rounded-lg shadow-2xl border-4 border-white"
            />
          ) : (
            <video
              src={selectedMedia.src}
              controls
              loop
              autoPlay
              className="max-w-full max-h-full rounded-lg shadow-2xl border-4 border-white"
            />
          )}
        </div>
      )}
    </div>
  );
}
