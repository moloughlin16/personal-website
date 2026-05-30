import Link from "next/link";

export default function Home() {
  return (
    <div className="max-w-5xl mx-auto px-6 py-20">
      <section className="min-h-[70vh] flex flex-col justify-center">
        <h1 className="text-5xl md:text-7xl font-bold tracking-tight mb-10 animate-fade-in-up">
          Hi, I&apos;m Morgan.
        </h1>

        <div className="flex flex-wrap gap-4 animate-fade-in-up stagger-1">
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
            href="/cv"
            className="inline-flex items-center gap-2 border border-card-border px-6 py-3 rounded-full font-medium hover:border-accent hover:text-accent transition-colors"
          >
            CV
          </Link>
          <Link
            href="/fun"
            className="inline-flex items-center gap-2 border border-card-border px-6 py-3 rounded-full font-medium hover:border-accent hover:text-accent transition-colors"
          >
            The fun stuff
          </Link>
        </div>
      </section>
    </div>
  );
}
