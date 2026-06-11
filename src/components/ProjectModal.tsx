"use client";

import Image from "next/image";
import { useState, useEffect, useCallback } from "react";

export type Project = {
  title: string;
  shortDescription: string;
  fullDescription: string;
  tags: string[];
  link?: string;
  linkLabel?: string;
  caption?: string;
  images?: string[];
};

export function ProjectCard({
  project,
  onClick,
}: {
  project: Project;
  onClick: () => void;
}) {
  return (
    <button
      onClick={(e) => {
        e.stopPropagation();
        onClick();
      }}
      className="group block w-full text-left rounded-2xl border border-card-border bg-card-bg p-6 transition-all hover:shadow-lg hover:-translate-y-1 hover:border-accent/30"
    >
      <h2 className="text-xl font-semibold mb-2 group-hover:text-accent transition-colors">
        {project.title}
      </h2>
      <p className="text-muted text-sm leading-relaxed mb-4">
        {project.shortDescription}...
      </p>
      <div className="flex flex-wrap gap-2">
        {project.tags.slice(0, 4).map((tag) => (
          <span
            key={tag}
            className="px-2 py-0.5 rounded-full text-xs bg-accent/10 text-accent font-medium"
          >
            {tag}
          </span>
        ))}
        {project.tags.length > 4 && (
          <span className="px-2 py-0.5 rounded-full text-xs bg-accent/10 text-accent font-medium">
            +{project.tags.length - 4} more
          </span>
        )}
      </div>
    </button>
  );
}

export function ProjectModal({
  project,
  onClose,
}: {
  project: Project;
  onClose: () => void;
}) {
  const [currentImage, setCurrentImage] = useState(0);

  const handleKeyDown = useCallback(
    (e: KeyboardEvent) => {
      if (e.key === "Escape") onClose();
      if (e.key === "ArrowLeft" && project.images) {
        setCurrentImage((prev) =>
          prev === 0 ? project.images!.length - 1 : prev - 1
        );
      }
      if (e.key === "ArrowRight" && project.images) {
        setCurrentImage((prev) =>
          prev === project.images!.length - 1 ? 0 : prev + 1
        );
      }
    },
    [onClose, project.images]
  );

  useEffect(() => {
    document.addEventListener("keydown", handleKeyDown);
    document.body.style.overflow = "hidden";
    return () => {
      document.removeEventListener("keydown", handleKeyDown);
      document.body.style.overflow = "";
    };
  }, [handleKeyDown]);

  return (
    <div
      style={{
        position: "fixed",
        top: 0,
        left: 0,
        right: 0,
        bottom: 0,
        zIndex: 9999,
        display: "flex",
        alignItems: "center",
        justifyContent: "center",
        padding: 16,
      }}
      onClick={(e) => {
        if (e.target === e.currentTarget) onClose();
      }}
    >
      {/* Backdrop */}
      <div
        style={{
          position: "absolute",
          top: 0,
          left: 0,
          right: 0,
          bottom: 0,
          backgroundColor: "rgba(0,0,0,0.6)",
          backdropFilter: "blur(4px)",
        }}
      />

      {/* Modal */}
      <div
        style={{
          position: "relative",
          maxHeight: "90vh",
          overflowY: "auto",
          width: "100%",
          maxWidth: 672,
        }}
        className="bg-card-bg border border-card-border rounded-2xl shadow-2xl"
      >
        {/* Close button */}
        <button
          onClick={onClose}
          style={{ position: "absolute", top: 16, right: 16, zIndex: 10 }}
          className="w-8 h-8 flex items-center justify-center rounded-full bg-card-bg/80 border border-card-border hover:border-accent transition-colors"
        >
          <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
          </svg>
        </button>

        {/* Image carousel */}
        {project.images && project.images.length > 0 && (
          <div
            style={{ position: "relative", width: "100%", aspectRatio: "16/9", overflow: "hidden" }}
            className="bg-zinc-900 rounded-t-2xl"
          >
            <Image
              src={project.images[currentImage]}
              alt={`${project.title} image ${currentImage + 1}`}
              fill
              sizes="(max-width: 672px) 100vw, 672px"
              className="object-contain"
            />

            {project.images.length > 1 && (
              <>
                <button
                  onClick={() =>
                    setCurrentImage((prev) =>
                      prev === 0 ? project.images!.length - 1 : prev - 1
                    )
                  }
                  style={{ position: "absolute", left: 12, top: "50%", transform: "translateY(-50%)" }}
                  className="w-8 h-8 flex items-center justify-center rounded-full bg-black/50 text-white hover:bg-black/70 transition-colors"
                >
                  <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 19l-7-7 7-7" />
                  </svg>
                </button>
                <button
                  onClick={() =>
                    setCurrentImage((prev) =>
                      prev === project.images!.length - 1 ? 0 : prev + 1
                    )
                  }
                  style={{ position: "absolute", right: 12, top: "50%", transform: "translateY(-50%)" }}
                  className="w-8 h-8 flex items-center justify-center rounded-full bg-black/50 text-white hover:bg-black/70 transition-colors"
                >
                  <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                  </svg>
                </button>

                {/* Dots */}
                <div
                  style={{ position: "absolute", bottom: 12, left: "50%", transform: "translateX(-50%)" }}
                  className="flex gap-1.5"
                >
                  {project.images.map((_, i) => (
                    <button
                      key={i}
                      onClick={() => setCurrentImage(i)}
                      className={`w-2 h-2 rounded-full transition-colors ${
                        i === currentImage ? "bg-white" : "bg-white/40"
                      }`}
                    />
                  ))}
                </div>
              </>
            )}
          </div>
        )}

        {/* Content */}
        <div className="p-6">
          <h2 className="text-2xl font-bold mb-4">{project.title}</h2>
          <p className="text-muted text-sm leading-relaxed mb-4 whitespace-pre-line">
            {project.fullDescription}
          </p>

          {project.caption && (
            <p className="text-xs text-muted/70 italic mb-4">
              {project.caption}
            </p>
          )}

          <div className="flex flex-wrap gap-2 mb-4">
            {project.tags.map((tag) => (
              <span
                key={tag}
                className="px-2 py-0.5 rounded-full text-xs bg-accent/10 text-accent font-medium"
              >
                {tag}
              </span>
            ))}
          </div>

          {project.link && (
            <a
              href={project.link}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2 text-accent text-sm font-medium hover:underline"
            >
              {project.linkLabel || "Learn more"}
              <svg className="w-3 h-3" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M10 6H6a2 2 0 00-2 2v10a2 2 0 002 2h10a2 2 0 002-2v-4M14 4h6m0 0v6m0-6L10 14" />
              </svg>
            </a>
          )}
        </div>
      </div>
    </div>
  );
}
