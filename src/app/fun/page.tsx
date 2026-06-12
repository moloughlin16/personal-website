"use client";

import Image from "next/image";
import { useState, useEffect, useCallback } from "react";
import ScrollReveal from "@/components/ScrollReveal";

type FunCategory = {
  title: string;
  photos: string[];
};

const categories: FunCategory[] = [
  {
    title: "Martial Arts",
    photos: [
      "/images/fun/martial-arts/martial-arts-1.jpg",
      "/images/fun/martial-arts/martial-arts-2.jpg",
      "/images/fun/martial-arts/martial-arts-3.jpg",
      "/images/fun/martial-arts/martial-arts-4.jpg",
      "/images/fun/martial-arts/martial-arts-5.jpg",
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
      "/images/fun/painting/painting-5.jpg",
    ],
  },
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
      "/images/fun/adventures/adventures-8.jpg",
    ],
  },
];

export default function FunPage() {
  const [activeIndex, setActiveIndex] = useState(0);
  const [isPaused, setIsPaused] = useState(false);

  const advance = useCallback(() => {
    setActiveIndex((prev) => (prev + 1) % categories.length);
  }, []);

  // Auto-cycle every 10 seconds unless paused
  useEffect(() => {
    if (isPaused) return;
    const timer = setInterval(advance, 10000);
    return () => clearInterval(timer);
  }, [isPaused, advance]);

  const handleTabClick = (index: number) => {
    setActiveIndex(index);
    setIsPaused(true);
    // Resume auto-cycling after 15 seconds of inactivity
    setTimeout(() => setIsPaused(false), 15000);
  };

  const active = categories[activeIndex];

  return (
    <div className="max-w-6xl mx-auto px-6 py-16">
      <h1 className="text-4xl font-bold mb-2 animate-fade-in-up">
        Fun Stuff
      </h1>
      <p className="text-muted mb-12 animate-fade-in-up stagger-1">
        A few things I love to do in my free time
      </p>

      {/* Category tabs */}
      <div className="flex flex-wrap gap-3 mb-10 animate-fade-in-up stagger-2">
        {categories.map((cat, i) => (
          <button
            key={cat.title}
            onClick={() => handleTabClick(i)}
            className={`px-5 py-2.5 rounded-full text-sm font-semibold transition-all duration-300 ${
              i === activeIndex
                ? "bg-accent text-white shadow-md scale-105"
                : "bg-card-bg border border-card-border text-muted hover:border-accent/40 hover:text-foreground"
            }`}
          >
            {cat.title}
          </button>
        ))}

        {/* Auto-cycle indicator */}
        <div
          className="flex items-center gap-1.5 ml-2 text-xs text-muted/50"
          style={{ alignSelf: "center" }}
        >
          {!isPaused && (
            <>
              <span
                className="inline-block w-1.5 h-1.5 rounded-full bg-accent/40"
                style={{ animation: "pulse 2s ease-in-out infinite" }}
              />
              <span>auto</span>
            </>
          )}
        </div>
      </div>

      {/* Photo grid for active category */}
      <div key={active.title} className="fun-photo-grid fun-photo-fade-in">
        {active.photos.map((src, i) => (
          <ScrollReveal
            key={src}
            delay={i * 0.08}
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
                alt={`${active.title} photo ${i + 1}`}
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
    </div>
  );
}
