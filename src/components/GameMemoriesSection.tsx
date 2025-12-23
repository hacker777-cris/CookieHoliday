const memories = [
  {
    title: 'Among Us',
    text: 'Among Us nights  chaos, laughter, trust issues, and emergency meetings that never solved anything.',
  },
  {
    title: 'Roblox: Grow a Garden',
    text: 'Grow a Garden sessions where time disappeared and it was just us, talking and planting like nothing else mattered.',
  },
  {
    title: 'Roblox: Rivals',
    text: 'Rivals… the game where I somehow always win 😌\n(Yes, this is a fact. No debates allowed.)',
  },
];

export function GameMemoriesSection() {
  return (
    <div>
      <h2 className="text-4xl md:text-5xl font-serif text-text text-center mb-12">
        The Moments That Made the Distance Smaller
      </h2>

      <div className="space-y-6">
        {memories.map((memory, index) => (
          <div
            key={index}
            className="bg-white/50 p-6 rounded-lg shadow-md hover:shadow-lg transition-shadow duration-300"
            style={{ animationDelay: `${index * 0.15}s` }}
          >
            <h3 className="text-2xl font-serif text-text mb-3">
              {memory.title}
            </h3>
            <p className="text-text/80 text-lg leading-relaxed whitespace-pre-line">
              {memory.text}
            </p>
          </div>
        ))}
      </div>

      <p className="text-center text-text/60 text-lg mt-12 italic">
        These weren't just games they were moments I'll always be grateful
        for.
      </p>
    </div>
  );
}
