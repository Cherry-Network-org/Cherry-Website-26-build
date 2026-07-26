import { CommunityCTA } from "@/components/CommunityCTA";
import { Footer } from "@/components/Footer";
import { GalleryHero } from "@/components/GalleryHero";
import { GallerySection } from "@/components/GallerySection";
import { NavBar } from "@/components/NavBar";
import { galleryEvents } from "@/data/gallery";

export function GalleryPageContent() {
  return (
    <main className="min-h-screen bg-[#0b0b0b]">
      <NavBar activeLabel="GALLERY" />
      <GalleryHero />

      <div className="relative spiderweb-bg">
        <div className="pointer-events-none absolute inset-0 bg-[#0b0b0b]/75" />
        <div className="relative">
          {galleryEvents.map((event) => (
            <GallerySection key={event.id} event={event} />
          ))}
        </div>
      </div>

      <CommunityCTA />
      <Footer />
    </main>
  );
}
