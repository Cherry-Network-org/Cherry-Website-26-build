import { GalleryEventHeader } from "@/components/GalleryEventHeader";
import { PhotoMosaic } from "@/components/PhotoMosaic";
import type { GalleryEvent } from "@/data/gallery";

export function GallerySection({ event }: { event: GalleryEvent }) {
  return (
    <section id={event.id} className="px-4 py-12 sm:px-6 sm:py-16 lg:px-8">
      <div className="mx-auto max-w-7xl space-y-8 sm:space-y-10">
        <GalleryEventHeader
          date={event.date}
          title={event.title}
          highlight={event.highlight}
        />
        <PhotoMosaic photos={event.photos} />
      </div>
    </section>
  );
}
