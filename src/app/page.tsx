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
          height={976}
          priority
          className="hero-banner-img"
        />
      </div>

      <div className="max-w-5xl mx-auto px-6 py-16">
        <section>
          <h1 className="text-5xl md:text-7xl font-bold tracking-tight mb-6 animate-fade-in-up stagger-1">
            Hi, I&apos;m Morgan.
          </h1>

          <p className="text-muted text-lg leading-relaxed mb-10 max-w-2xl animate-fade-in-up stagger-2">
            I&apos;m a recent global health graduate with 4+ years of research and project management experience spanning nutrition, oncology, disability, education, and refugee health. What I care about more than cause area is the <em>way</em> global health work is done. I&apos;m drawn to organizations and initiatives that center transparency, accountability, and local ownership in their approach.
          </p>

          <div className="flex flex-wrap gap-4 animate-fade-in-up stagger-3">
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
              Life Outside Work
            </Link>
          </div>
        </section>
      </div>
    </div>
  );
}
