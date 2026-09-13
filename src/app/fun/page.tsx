"use client";

import Image from "next/image";
import { useState } from "react";
import ScrollReveal from "@/components/ScrollReveal";

type FunPhoto = {
  src: string;
  alt: string;
  /** Shown at the full width of the gallery column instead of half. */
  featured?: boolean;
};

type FunCategory = {
  title: string;
  photos: FunPhoto[];
};

const categories: FunCategory[] = [
  {
    title: "Martial Arts",
    photos: [
      {
        src: "/images/fun/martial-arts/ma-4.jpg",
        alt: "Working from top position during an open mat, other pairs rolling in the background",
      },
      {
        src: "/images/fun/martial-arts/ma-7.jpg",
        alt: "Trading strikes with a training partner during stand-up sparring",
      },
      {
        src: "/images/fun/martial-arts/ma-1.jpg",
        alt: "Grappling with a training partner on the mats",
      },
      {
        src: "/images/fun/martial-arts/ma-3.jpg",
        alt: "Throwing a kick into a partner's guard under the Elevate MMA Academy banner",
      },
      {
        src: "/images/fun/martial-arts/ma-6.jpg",
        alt: "Controlling top position in MMA gloves and shin guards",
      },
      {
        src: "/images/fun/martial-arts/ma-2.jpg",
        alt: "A belt promotion, teammates lined up in their gis applauding",
      },
      {
        src: "/images/fun/martial-arts/ma-5.jpg",
        alt: "Working for a submission during live rolling",
      },
    ],
  },
  {
    title: "Baking",
    photos: [
      {
        src: "/images/fun/baking/bk-1.jpg",
        alt: "Stacking the tiers of a naked wedding cake",
      },
      {
        src: "/images/fun/baking/bk-2.jpg",
        alt: "A batch of homemade bagels cooling on a wire rack",
      },
      {
        src: "/images/fun/baking/bk-3.jpg",
        alt: "A homemade chocolate croissant, with the rest of the batch on a tea towel",
      },
      {
        src: "/images/fun/baking/bk-4.jpg",
        alt: "A slice lifted from a layer cake filled with jam and cinnamon crumb",
      },
      {
        src: "/images/fun/baking/bk-5.jpg",
        alt: "A thick chocolate chip cookie held over the baking sheet",
      },
      {
        src: "/images/fun/baking/bk-6.jpg",
        alt: "A chocolate layer cake with ganache drip, piped buttercream and chopped hazelnuts",
      },
      {
        src: "/images/fun/baking/bk-7.jpg",
        alt: "Salted pretzel rolls, scored and baked on a sheet pan",
      },
    ],
  },
  {
    title: "Painting",
    photos: [
      {
        src: "/images/fun/painting/pt-2.jpg",
        alt: "Painting of a park path in autumn, city towers rising behind orange trees",
        featured: true,
      },
      {
        src: "/images/fun/painting/pt-5.jpg",
        alt: "Painting of canoes moored at a dock on a turquoise lake below snow-streaked peaks",
        featured: true,
      },
      {
        src: "/images/fun/painting/pt-1.jpg",
        alt: "Painting in progress on the easel: red waterfront buildings on pilings at sunset",
      },
      {
        src: "/images/fun/painting/pt-4.jpg",
        alt: "Painted study of an anatomical heart on a small canvas",
      },
      {
        src: "/images/fun/painting/pt-3.jpg",
        alt: "Painting of a single rose in bloom, pink petals fading to yellow at the center",
        featured: true,
      },
    ],
  },
  {
    title: "Adventures",
    photos: [
      {
        src: "/images/fun/adventures/adv-1.jpg",
        alt: "Climbing down a narrow sandstone crevice, seen from above",
      },
      {
        src: "/images/fun/adventures/adv-9.jpg",
        alt: "Hydrangeas along a ridge above a green volcanic crater lake",
      },
      {
        src: "/images/fun/adventures/adv-2.jpg",
        alt: "Paddling through whitewater rapids with a raft crew",
      },
      {
        src: "/images/fun/adventures/adv-3.jpg",
        alt: "Underwater selfie mid-dive, bubbles rising past a yellow mask",
      },
      {
        src: "/images/fun/adventures/adv-10.jpg",
        alt: "Papel picado strung above a yellow colonial town square",
      },
      {
        src: "/images/fun/adventures/adv-4.jpg",
        alt: "Crossing a rope canopy walkway high above the rainforest",
      },
      {
        src: "/images/fun/adventures/adv-5.jpg",
        alt: "A tarpon cruising past two divers silhouetted against the sunlit surface",
      },
      {
        src: "/images/fun/adventures/adv-11.jpg",
        alt: "A braided river winding through an autumn valley below snowy peaks",
      },
      {
        src: "/images/fun/adventures/adv-12.jpg",
        alt: "Pausing at a waterfall overlook with a toddler in a hiking carrier",
      },
      {
        src: "/images/fun/adventures/adv-6.jpg",
        alt: "Trailside selfie on a ridge above a wide mountain valley",
      },
      {
        src: "/images/fun/adventures/adv-7.jpg",
        alt: "Sitting on a seawall at sunset as a pelican passes overhead",
      },
      {
        src: "/images/fun/adventures/adv-8.jpg",
        alt: "On deck in a glacial fjord, camera raised toward the shoreline",
      },
    ],
  },
];

export default function FunPage() {
  const [activeIndex, setActiveIndex] = useState(0);

  const active = categories[activeIndex];
  const hasFeatured = active.photos.some((photo) => photo.featured);

  return (
    <div className="max-w-6xl mx-auto px-6 py-16">
      <h1 className="text-4xl font-bold mb-2 animate-fade-in-up">
        Life Outside Work
      </h1>
      <p className="text-muted mb-12 animate-fade-in-up stagger-1">
        A few things I love to do in my free time.
      </p>

      {/* Category tabs */}
      <div className="flex flex-wrap gap-3 mb-10 animate-fade-in-up stagger-2">
        {categories.map((cat, i) => (
          <button
            key={cat.title}
            onClick={() => setActiveIndex(i)}
            className={`px-5 py-2.5 rounded-full text-sm font-semibold transition-all duration-300 ${
              i === activeIndex
                ? "bg-accent text-white shadow-md scale-105"
                : "bg-card-bg border border-card-border text-muted hover:border-accent/40 hover:text-foreground"
            }`}
          >
            {cat.title}
          </button>
        ))}
      </div>

      {/* Photo grid for active category */}
      <div
        key={active.title}
        className={`fun-photo-masonry fun-photo-fade-in${
          hasFeatured ? " fun-photo-masonry--spotlight" : ""
        }`}
      >
        {active.photos.map((photo, i) => (
          <ScrollReveal
            key={photo.src}
            delay={i * 0.08}
            className={photo.featured ? "fun-photo-featured" : ""}
          >
            <div className="rounded-xl overflow-hidden group mb-4">
              <Image
                src={photo.src}
                alt={photo.alt}
                width={800}
                height={600}
                sizes={
                  photo.featured
                    ? "(max-width: 768px) 100vw, 760px"
                    : "(max-width: 480px) 50vw, (max-width: 768px) 50vw, 33vw"
                }
                className="w-full h-auto object-cover transition-transform duration-500 group-hover:scale-105"
              />
            </div>
          </ScrollReveal>
        ))}
      </div>
    </div>
  );
}
