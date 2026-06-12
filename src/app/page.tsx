import Link from "next/link";
import Image from "next/image";

export default function Home() {
  return (
    <div>
      {/* Hero banner image */}
      <div className="hero-banner animate-fade-in-up">
        <Image
          src="/images/hammock.jpg"
          alt="Morgan in a hammock in the mountains"
          width={2400}
          height={1195}
          priority
          className="hero-banner-img"
        />
      </div>

      <div className="max-w-5xl mx-auto px-6 py-16">
        <section>
          <h1 className="text-5xl md:text-7xl font-bold tracking-tight mb-10 animate-fade-in-up stagger-1">
            Hi, I&apos;m Morgan.
          </h1>

          <div className="flex flex-wrap gap-4 animate-fade-in-up stagger-2">
            <Link
              href="/cv"
              className="inline-flex items-center gap-2 bg-accent text-white px-6 py-3 rounded-full font-medium hover:bg-accent-light transition-colors"
            >
              CV
              <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 8l4 4m0 0l-4 4m4-4H3" />
              </svg>
            </Link>
            <Link
              href="/projects"
              className="inline-flex items-center gap-2 border border-card-border px-6 py-3 rounded-full font-medium hover:border-accent hover:text-accent transition-colors"
            >
              Projects
            </Link>
            <Link
              href="/fun"
              className="inline-flex items-center gap-2 border border-card-border px-6 py-3 rounded-full font-medium hover:border-accent hover:text-accent transition-colors"
            >
              Fun stuff
            </Link>
          </div>
        </section>
      </div>
    </div>
  );
}
