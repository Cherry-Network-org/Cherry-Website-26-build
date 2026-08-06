"use client";

import Image from "next/image";
import { useCallback, useEffect, useState } from "react";
import type { GalleryPhoto } from "@/data/gallery";

type PhotoMosaicProps = {
  photos: GalleryPhoto[];
};

/** Shown until an event has real photos listed in src/data/gallery.ts */
function PlaceholderGrid() {
  return (
    <div className="grid grid-cols-2 gap-3 sm:gap-4 lg:grid-cols-4">
      {Array.from({ length: 4 }, (_, index) => (
        <div
          key={`placeholder-${index}`}
          className="aspect-4/3 rounded-sm bg-[#232323]"
        />
      ))}
    </div>
  );
}

function Lightbox({
  photo,
  onClose,
}: {
  photo: GalleryPhoto;
  onClose: () => void;
}) {
  useEffect(() => {
    function onKeyDown(event: KeyboardEvent) {
      if (event.key === "Escape") onClose();
    }
    document.addEventListener("keydown", onKeyDown);
    document.body.style.overflow = "hidden";
    return () => {
      document.removeEventListener("keydown", onKeyDown);
      document.body.style.overflow = "";
    };
  }, [onClose]);

  return (
    <div
      className="fixed inset-0 z-50 flex items-center justify-center bg-black/85 p-4 sm:p-8"
      onClick={onClose}
      role="dialog"
      aria-modal="true"
      aria-label={photo.alt}
    >
      <button
        type="button"
        onClick={onClose}
        aria-label="Close"
        className="press-feedback absolute right-4 top-4 z-10 flex h-9 w-9 items-center justify-center rounded-full bg-white/10 text-xl leading-none text-white transition hover:scale-110 hover:bg-white/25"
      >
        ×
      </button>
      <div
        className="relative h-full max-h-[85vh] w-full max-w-5xl"
        onClick={(event) => event.stopPropagation()}
      >
        <Image
          src={photo.src}
          alt={photo.alt}
          fill
          sizes="100vw"
          className="object-contain"
        />
      </div>
    </div>
  );
}

function ZoomIcon() {
  return (
    <svg width="22" height="22" viewBox="0 0 24 24" fill="none" aria-hidden>
      <circle cx="11" cy="11" r="7" stroke="white" strokeWidth="2" />
      <path d="M21 21l-4.35-4.35" stroke="white" strokeWidth="2" strokeLinecap="round" />
      <path d="M11 8v6M8 11h6" stroke="white" strokeWidth="2" strokeLinecap="round" />
    </svg>
  );
}

export function PhotoMosaic({ photos }: PhotoMosaicProps) {
  const [selected, setSelected] = useState<GalleryPhoto | null>(null);
  const close = useCallback(() => setSelected(null), []);

  if (photos.length === 0) {
    return <PlaceholderGrid />;
  }

  return (
    <>
      <div className="grid grid-cols-2 gap-3 sm:grid-cols-3 sm:gap-4 lg:grid-cols-4">
        {photos.map((photo, index) => (
          <button
            key={`${photo.src}-${index}`}
            type="button"
            onClick={() => setSelected(photo)}
            aria-label={`View ${photo.alt}`}
            className="group relative aspect-4/3 cursor-pointer overflow-hidden rounded-sm bg-[#232323]"
          >
            <Image
              src={photo.src}
              alt={photo.alt}
              fill
              sizes="(max-width: 640px) 50vw, (max-width: 1024px) 33vw, 25vw"
              className="object-cover transition-transform duration-500 group-hover:scale-110"
            />
            <span className="absolute inset-0 flex items-center justify-center bg-black/0 opacity-0 transition-all duration-300 group-hover:bg-black/30 group-hover:opacity-100">
              <ZoomIcon />
            </span>
          </button>
        ))}
      </div>

      {selected && <Lightbox photo={selected} onClose={close} />}
    </>
  );
}
