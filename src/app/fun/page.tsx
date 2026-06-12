"use client";

import Image from "next/image";
import ScrollReveal from "@/components/ScrollReveal";

type FunSection = {
  title: string;
  photos: string[];
};

const sections: FunSection[] = [
  {
    title: "Adventures",
    photos: [
      "/images/fun/adventures/adventures-1.jpg",
      "/images/fun/adventures/adventures-2.jpg",
      "/images/fun/adventures/adventures-3.jpg",
      "/images/fun/adventures/adventures-4.jpg",
      "/images/fun/adventures/adventures-5.jpg",
      "/images/fun/adventures/adventures-6.jpg",
      "/images/fun/adventures/adventures-7.jpg",
    ],
  },
  {
    title: "Martial Arts",
    photos: [
      "/images/fun/martial-arts/martial-arts-1.jpg",
      "/images/fun/martial-arts/martial-arts-2.jpg",
      "/images/fun/martial-arts/martial-arts-3.jpg",
      "/images/fun/martial-arts/martial-arts-4.jpg",
      "/images/fun/martial-arts/martial-arts-5.jpg",
      "/images/fun/martial-arts/martial-arts-6.jpg",
    ],
  },
  {
    title: "Baking",
    photos: [
      "/images/fun/baking/baking-1.jpg",
      "/images/fun/baking/baking-2.jpg",
      "/images/fun/baking/baking-3.jpg",
      "/images/fun/baking/baking-4.jpg",
      "/images/fun/baking/baking-5.jpg",
      "/images/fun/baking/baking-6.jpg",
    ],
  },
  {
    title: "Painting",
    photos: [
      "/images/fun/painting/painting-1.jpg",
      "/images/fun/painting/painting-2.jpg",
      "/images/fun/painting/painting-3.jpg",
      "/images/fun/painting/painting-4.jpg",
    ],
  },
];

export default function FunPage() {
  return (
    <div className="max-w-6xl mx-auto px-6 py-16">
      <h1 className="text-4xl font-bold mb-2 animate-fade-in-up">
        The Fun Stuff
      </h1>
      <p className="text-muted mb-20 animate-fade-in-up stagger-1">
        Because life isn&apos;t all p-values and pull requests.
      </p>

      <div className="space-y-32">
        {sections.map((section) => (
          <FunSection key={section.title} section={section} />
        ))}
      </div>
    </div>
  );
}

function FunSection({ section }: { section: FunSection }) {
  const { title, photos } = section;

  return (
    <section>
      <ScrollReveal>
        <h2 className="text-3xl font-bold mb-8 text-accent">{title}</h2>
      </ScrollReveal>

      <div className="fun-photo-grid">
        {photos.map((src, i) => (
          <ScrollReveal
            key={src}
            delay={i * 0.1}
            className={i === 0 ? "fun-photo-hero" : ""}
          >
            <div
              style={{
                position: "relative",
                width: "100%",
                aspectRatio: i === 0 ? "4/3" : "1/1",
                overflow: "hidden",
              }}
              className="rounded-xl group"
            >
              <Image
                src={src}
                alt={`${title} photo ${i + 1}`}
                fill
                sizes={
                  i === 0
                    ? "(max-width: 768px) 100vw, 66vw"
                    : "(max-width: 768px) 100vw, 33vw"
                }
                className="object-cover transition-transform duration-500 group-hover:scale-105"
              />
            </div>
          </ScrollReveal>
        ))}
      </div>
    </section>
  );
}
