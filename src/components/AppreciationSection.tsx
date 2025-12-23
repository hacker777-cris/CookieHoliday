import { LoveLetterCard } from './LoveLetterCard';

export function AppreciationSection() {
  return (
    <div className="text-center">
      <h2 className="text-4xl md:text-5xl font-serif text-text mb-12">
        Just So You Know
      </h2>

      <LoveLetterCard>
        <p>
          There's something rare about finding someone who just gets it who
          makes things feel lighter without even trying. That's you. Your
          kindness isn't loud or showy; it's just there, steady and genuine,
          in the way you listen, the way you care, the way you show up.
        </p>
        <p>
          Being around you (even if it's just online) feels easy. There's no
          pressure to be anything other than myself, and that kind of comfort
          is hard to come by. You make distance feel smaller, and time spent
          together whether we're talking, playing, or just existing in the
          same space always feels like time well spent.
        </p>
        <p>
          I'm grateful for you, Cookie. For your presence, your humor, your
          warmth. For making life feel a little brighter, even from far away.
        </p>
      </LoveLetterCard>
    </div>
  );
}
