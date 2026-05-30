import Image from "next/image";

export default function FunPage() {
  return (
    <div className="max-w-5xl mx-auto px-6 py-16">
      <h1 className="text-4xl font-bold mb-2 animate-fade-in-up">
        The Fun Stuff
      </h1>
      <p className="text-muted mb-12 animate-fade-in-up stagger-1">
        Because life isn&apos;t all p-values and pull requests.
      </p>

      {/* Hobbies */}
      <section className="mb-16">
        <h2 className="text-2xl font-semibold mb-6 animate-fade-in-up stagger-2">
          Things I Love
        </h2>
        <div className="grid sm:grid-cols-2 md:grid-cols-4 gap-4">
          <HobbyCard
            emoji="🥊"
            title="MMA"
            note="Former jiu jitsu and kickboxing coach — still training when I can"
          />
          <HobbyCard
            emoji="🧁"
            title="Baking"
            note="Stress relief with a delicious payoff"
          />
          <HobbyCard
            emoji="🎨"
            title="Painting"
            note="Still learning, but that's the fun part"
          />
          <HobbyCard
            emoji="✈️"
            title="Travels"
            note="Greece, Tanzania, Dominican Republic, Alaska, and counting"
          />
        </div>
      </section>

      {/* Photo gallery placeholder */}
      <section className="mb-16">
        <h2 className="text-2xl font-semibold mb-6">Snapshots</h2>
        <p className="text-muted text-sm mb-6">
          Drop your favorite photos into <code className="text-accent">public/images/</code> and
          they&apos;ll show up here.
        </p>

        {/*
          To add photos: place images in public/images/ and add them to this grid.
          Example:
          <PhotoCard src="/images/greece-sunset.jpg" alt="Sunset in Greece" caption="Mitilini, Greece" />
        */}
        <div className="grid sm:grid-cols-2 md:grid-cols-3 gap-4">
          <PhotoPlaceholder label="Add a travel photo" />
          <PhotoPlaceholder label="Add a baking creation" />
          <PhotoPlaceholder label="Add a painting" />
          <PhotoPlaceholder label="Add an MMA moment" />
          <PhotoPlaceholder label="Add a favorite memory" />
          <PhotoPlaceholder label="Add another!" />
        </div>
      </section>

      {/* Currently */}
      <section>
        <h2 className="text-2xl font-semibold mb-6">Right Now I&apos;m...</h2>
        <ul className="space-y-3">
          <NowItem emoji="🎓" text="Finishing up my MS at Duke" />
          <NowItem emoji="🇹🇿" text="Wrapping up thesis research on pediatric nutrition in Tanzania" />
          <NowItem emoji="🏠" text="Based in Durham, NC" />
          <NowItem emoji="🌱" text="Training with the Red Cross Disaster Action Team" />
        </ul>
      </section>
    </div>
  );
}

function HobbyCard({
  emoji,
  title,
  note,
}: {
  emoji: string;
  title: string;
  note: string;
}) {
  return (
    <div className="group rounded-xl border border-card-border bg-card-bg p-4 transition-all hover:shadow-md hover:-translate-y-0.5 hover:border-accent/30">
      <span className="text-2xl mb-2 block group-hover:scale-110 transition-transform">
        {emoji}
      </span>
      <h3 className="font-medium text-sm">{title}</h3>
      <p className="text-muted text-xs mt-1">{note}</p>
    </div>
  );
}

function PhotoPlaceholder({ label }: { label: string }) {
  return (
    <div className="aspect-square rounded-xl border-2 border-dashed border-card-border flex items-center justify-center text-muted text-sm text-center p-4 hover:border-accent/30 transition-colors">
      {label}
    </div>
  );
}

{/*
  Use this component once you have real photos:

  function PhotoCard({ src, alt, caption }: { src: string; alt: string; caption?: string }) {
    return (
      <div className="group relative aspect-square rounded-xl overflow-hidden">
        <Image src={src} alt={alt} fill className="object-cover transition-transform group-hover:scale-105" />
        {caption && (
          <div className="absolute inset-x-0 bottom-0 bg-gradient-to-t from-black/60 to-transparent p-3">
            <p className="text-white text-sm">{caption}</p>
          </div>
        )}
      </div>
    );
  }
*/}

function NowItem({ emoji, text }: { emoji: string; text: string }) {
  return (
    <li className="flex items-center gap-3 text-muted">
      <span className="text-xl">{emoji}</span>
      <span>{text}</span>
    </li>
  );
}
