"use client";

import Image from "next/image";
import { useEffect, useRef, useState } from "react";
import ScrollReveal from "@/components/ScrollReveal";

type FunPhoto = {
  src: string;
  alt: string;
  /** Spans two grid columns instead of one, in a category that uses the grid. */
  featured?: boolean;
  /** Natural size, as displayed. Required for photos laid out by the grid,
   *  which derives each tile's row span from the aspect ratio. */
  width?: number;
  height?: number;
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
        src: "/images/fun/martial-arts/ma-9.jpg",
        alt: "Throwing a kick that a training partner blocks, under the Elevate MMA Academy banner",
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
        src: "/images/fun/painting/pt-8.jpg",
        alt: "Painting of canoes moored at a dock on a turquoise lake below snow-streaked peaks",
        width: 1686,
        height: 2576,
        featured: true,
      },
      {
        src: "/images/fun/painting/pt-1.jpg",
        alt: "Painting in progress on the easel: red waterfront buildings on pilings at sunset",
        width: 1242,
        height: 1963,
      },
      {
        src: "/images/fun/painting/pt-4.jpg",
        alt: "Painted study of an anatomical heart on a small canvas",
        width: 3024,
        height: 4032,
      },
      {
        src: "/images/fun/painting/pt-7.jpg",
        alt: "Painting of a park path in autumn, city towers rising behind orange trees",
        width: 1186,
        height: 893,
        featured: true,
      },
      {
        src: "/images/fun/painting/pt-9.jpg",
        alt: "Filling in a stained-glass style mural on a cinder-block wall",
        width: 2534,
        height: 2576,
      },
      {
        src: "/images/fun/painting/pt-6.jpg",
        alt: "Painting of a single rose in bloom, pink petals fading to yellow at the center",
        width: 2576,
        height: 2090,
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

/* Grid geometry, kept in sync with .fun-photo-grid in globals.css. */
const GRID_GAP = 16;
const GRID_ROW = 8;
/* max-w-6xl (1152px) less the page's px-6 gutters. Used only for the first
   paint, before the grid has been measured in the browser. */
const GRID_ASSUMED_WIDTH = 1104;

function PhotoTile({ photo }: { photo: FunPhoto }) {
  return (
    <div className="rounded-xl overflow-hidden group h-full">
      <Image
        src={photo.src}
        alt={photo.alt}
        width={photo.width ?? 800}
        height={photo.height ?? 600}
        sizes={
          photo.featured
            ? "(max-width: 768px) 100vw, 656px"
            : "(max-width: 768px) 50vw, 432px"
        }
        className="w-full h-auto object-cover transition-transform duration-500 group-hover:scale-105"
      />
    </div>
  );
}

/**
 * Masonry grid where featured photos span two columns. Row height is a fixed
 * 8px unit and each tile spans however many of those its aspect ratio needs,
 * which is what lets a tall photo sit beside a stack of shorter ones instead
 * of forcing a row of its own.
 */
function SpotlightGrid({ photos }: { photos: FunPhoto[] }) {
  const ref = useRef<HTMLDivElement>(null);
  const [columns, setColumns] = useState(5);
  const [columnWidth, setColumnWidth] = useState(
    (GRID_ASSUMED_WIDTH - 4 * GRID_GAP) / 5
  );

  useEffect(() => {
    const el = ref.current;
    if (!el) return;
    const measure = () => {
      const count = getComputedStyle(el)
        .gridTemplateColumns.split(" ")
        .filter(Boolean).length;
      setColumns(count);
      setColumnWidth((el.clientWidth - (count - 1) * GRID_GAP) / count);
    };
    measure();
    const observer = new ResizeObserver(measure);
    observer.observe(el);
    return () => observer.disconnect();
  }, []);

  return (
    <div ref={ref} className="fun-photo-grid fun-photo-fade-in">
      {photos.map((photo, i) => {
        const wide = columns >= 5;
        const colSpan = Math.min(
          photo.featured ? (wide ? 3 : 2) : wide ? 2 : 1,
          columns
        );
        const width = columnWidth * colSpan + GRID_GAP * (colSpan - 1);
        const height = (width * (photo.height ?? 3)) / (photo.width ?? 4);
        const rowSpan = Math.max(
          1,
          Math.ceil((height + GRID_GAP) / (GRID_ROW + GRID_GAP))
        );
        return (
          <ScrollReveal
            key={photo.src}
            delay={i * 0.08}
            style={{ gridColumn: `span ${colSpan}`, gridRow: `span ${rowSpan}` }}
          >
            <PhotoTile photo={photo} />
          </ScrollReveal>
        );
      })}
    </div>
  );
}

function ColumnGallery({ photos }: { photos: FunPhoto[] }) {
  return (
    <div className="fun-photo-masonry fun-photo-fade-in">
      {photos.map((photo, i) => (
        <ScrollReveal key={photo.src} delay={i * 0.08}>
          <div className="mb-4">
            <PhotoTile photo={photo} />
          </div>
        </ScrollReveal>
      ))}
    </div>
  );
}

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
      {hasFeatured ? (
        <SpotlightGrid key={active.title} photos={active.photos} />
      ) : (
        <ColumnGallery key={active.title} photos={active.photos} />
      )}
    </div>
  );
}
