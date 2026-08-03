export type GalleryPhoto = {
  src: string;
  alt: string;
};

export type GalleryEvent = {
  id: string;
  date: string;
  title: string;
  highlight: string;
  photos: GalleryPhoto[];
};

/**
 * Drop images into public/gallery/<folder>/ and list the filenames here.
 * Example: files("Ataraxia", "Ataraxia 2.0", ["at1.jpg", "at2.jpg"])
 */
function files(
  folder: string,
  eventName: string,
  names: string[],
): GalleryPhoto[] {
  return names.map((name, index) => ({
    src: `/gallery/${folder}/${name}`,
    alt: `${eventName} — photo ${index + 1}`,
  }));
}

export const galleryCarouselSlides = [
  {
    id: "slide-1",
    src: "/gallery/carousel/carousel1.jpg",
    alt: "Cherry+ Network group photo",
  },
  {
    id: "slide-2",
    src: "/gallery/carousel/carousel4.jpeg",
    alt: "Cherry+ Network event highlight",
  },
  {
    id: "slide-3",
    src: "/gallery/carousel/carousel1.jpg",
    alt: "Cherry+ Network campus event",
  },
  {
    id: "slide-4",
    src: "/gallery/carousel/carousel4.jpeg",
    alt: "Cherry+ Network community gathering",
  },
];

export const galleryEvents: GalleryEvent[] = [
  {
    id: "ataraxia-20",
    date: "11th - 14th February 2026",
    title: "Ataraxia",
    highlight: "2.0",
    photos: files("Ataraxia", "Ataraxia 2.0", [
      "at1.jpg",
      "at2.jpg",
      "at3.jpg",
      "at4.jpg",
      "at5.jpg",
      "at6.jpg",
      "at7.jpg",
      "at8.jpg",
      "at9.jpg",
      "at10.jpg",
    ]),
  },
  {
    id: "the-last-commit",
    date: "23rd April 2026",
    title: "The Last",
    highlight: "Commit",
    photos: files("TheLastCommit", "The Last Commit '26", [
      "tlc1.jpg",
      "tlc2.jpg",
      "tlc3.jpg",
      "tlc4.jpg",
      "tlc5.jpg",
      "tlc6.jpg",
      "tlc7.jpg",
      "tlc8.jpg",
      "tlc9.jpg",
    ]),
  },
  {
    id: "orphanage-visit",
    date: "12th April 2026",
    title: "Orphanage",
    highlight: "Drive '26",
    photos: files("OrphanageVisit", "Orphanage Drive '26", [
      "orphanage3.jpg",
      "orphanage4.jpg",
      "or5.jpg",
      "or6.jpg",
      "or7.jpg",
      "or8.jpg",
      "or9.jpg",
      "or10.jpg",
      "or11.jpg",
      "or12.jpg",
    ]),
  },
  {
    id: "robofest",
    date: "10th - 11th September 2025",
    title: "Robofest",
    highlight: "'25 & DJ Night",
    photos: files("AppArchives/Foreword", "Robofest '25", [
      "for1.jpg",
      "for2.jpg",
      "for3.jpg",
      "for4.jpg",
      "for5.jpg",
      "for6.jpg",
      "for7.jpg",
    ]),
  },
  {
    id: "elysian-25",
    date: "7th August 2025",
    title: "Elysian",
    highlight: "'25",
    photos: files("Elysian", "Elysian '25", [
      "el1.jpg",
      "el2.jpg",
      "el3.jpg",
      "el4.jpg",
      "el5.jpg",
      "el6.jpg",
      "el7.jpg",
      "el8.jpg",
      "el9.jpg",
    ]),
  },
];
