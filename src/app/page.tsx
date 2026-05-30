import Link from "next/link";

export default function Home() {
  return (
    <div className="max-w-5xl mx-auto px-6 py-20">
      {/* Hero */}
      <section className="min-h-[60vh] flex flex-col justify-center">
        <p className="text-accent font-medium mb-4 animate-fade-in-up">
          <span className="animate-wave">👋</span> Hi, I&apos;m
        </p>
        <h1 className="text-5xl md:text-7xl font-bold tracking-tight mb-6 animate-fade-in-up stagger-1">
          Morgan O&apos;Loughlin
        </h1>
        <p className="text-xl md:text-2xl text-muted max-w-2xl leading-relaxed animate-fade-in-up stagger-2">
          Global health researcher and data nerd at Duke, turning messy data
          into real-world impact — from pediatric nutrition in Tanzania to
          prosthetics in the Dominican Republic.
        </p>

        <div className="flex flex-wrap gap-4 mt-10 animate-fade-in-up stagger-3">
          <Link
            href="/projects"
            className="inline-flex items-center gap-2 bg-accent text-white px-6 py-3 rounded-full font-medium hover:bg-accent-light transition-colors"
          >
            See my work
            <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 8l4 4m0 0l-4 4m4-4H3" />
            </svg>
          </Link>
          <Link
            href="/fun"
            className="inline-flex items-center gap-2 border border-card-border px-6 py-3 rounded-full font-medium hover:border-accent hover:text-accent transition-colors"
          >
            The fun stuff
          </Link>
        </div>
      </section>

      {/* Quick about */}
      <section className="py-20 grid md:grid-cols-3 gap-8">
        <QuickCard
          emoji="🌍"
          title="Global Health"
          description="MS at Duke with a focus on implementation science, nutrition, and health equity — from CDC research to fieldwork in Tanzania."
        />
        <QuickCard
          emoji="📊"
          title="Data + Impact"
          description="Building dashboards, optimizing meal plans with linear programming, and making data useful for organizations that need it."
        />
        <QuickCard
          emoji="🥊"
          title="Always Moving"
          description="Former MMA coach, world traveler, and someone who thinks the best ideas come when you're slightly uncomfortable."
        />
      </section>
    </div>
  );
}

function QuickCard({
  emoji,
  title,
  description,
}: {
  emoji: string;
  title: string;
  description: string;
}) {
  return (
    <div className="group rounded-2xl border border-card-border bg-card-bg p-6 transition-all hover:shadow-lg hover:-translate-y-1 hover:border-accent/30">
      <span className="text-3xl mb-4 block group-hover:scale-110 transition-transform">
        {emoji}
      </span>
      <h3 className="text-lg font-semibold mb-2">{title}</h3>
      <p className="text-muted text-sm leading-relaxed">{description}</p>
    </div>
  );
}
