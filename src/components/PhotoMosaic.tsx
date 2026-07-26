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
        className="absolute right-4 top-4 z-10 flex h-9 w-9 items-center justify-center rounded-full bg-white/10 text-xl leading-none text-white transition hover:bg-white/25"
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
            className="relative aspect-4/3 cursor-pointer overflow-hidden rounded-sm bg-[#232323] transition hover:opacity-80"
          >
            <Image
              src={photo.src}
              alt={photo.alt}
              fill
              sizes="(max-width: 640px) 50vw, (max-width: 1024px) 33vw, 25vw"
              className="object-cover"
            />
          </button>
        ))}
      </div>

      {selected && <Lightbox photo={selected} onClose={close} />}
    </>
  );
}
