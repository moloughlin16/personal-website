import Image from "next/image";

export default function Polaroid({
  src,
  caption,
  rotate = "right",
  portrait = false,
}: {
  src: string;
  caption: string;
  rotate?: "left" | "right" | "none";
  portrait?: boolean;
}) {
  const rotateClass =
    rotate === "left"
      ? "-rotate-2"
      : rotate === "right"
        ? "rotate-2"
        : "";

  const sizeClass = portrait
    ? "w-32 h-44 sm:w-36 sm:h-48"
    : "w-40 h-32 sm:w-48 sm:h-36";

  return (
    <div
      className={`inline-block bg-white dark:bg-zinc-100 p-2 pb-3 shadow-md hover:shadow-xl transition-all hover:scale-105 ${rotateClass}`}
    >
      <div className={`relative ${sizeClass} overflow-hidden bg-zinc-200`}>
        <Image
          src={src}
          alt={caption}
          fill
          className="object-cover"
        />
      </div>
    </div>
  );
}

export function PolaroidPlaceholder({
  caption,
  rotate = "right",
}: {
  caption: string;
  rotate?: "left" | "right" | "none";
}) {
  const rotateClass =
    rotate === "left"
      ? "-rotate-2"
      : rotate === "right"
        ? "rotate-2"
        : "";

  return (
    <div
      className={`inline-block bg-white dark:bg-zinc-100 p-2 pb-8 shadow-md hover:shadow-xl transition-all hover:scale-105 ${rotateClass}`}
    >
      <div className="w-40 h-32 sm:w-48 sm:h-36 bg-zinc-200 flex items-center justify-center">
        <span className="text-zinc-400 text-xs text-center px-2">
          add photo
        </span>
      </div>
      <p className="text-xs text-zinc-500 mt-2 text-center">
        {caption}
      </p>
    </div>
  );
}
