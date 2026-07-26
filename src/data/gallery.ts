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
 * Example: files("Ataraxia", "Ataraxia ‘23", ["at1.jpg", "at2.jpg"])
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
    id: "app-archives",
    date: "1st March 2024",
    title: "App",
    highlight: "Archives",
    photos: [
      ...files("AppArchives/Foreword", "App Archives — Foreword", [
        "for1.jpg",
        "for2.jpg",
        "for3.jpg",
        "for4.jpg",
        "for5.jpg",
      ]),
      ...files("AppArchives/Preface", "App Archives — Preface", [
        "pre1.jpg",
        "pre2.jpg",
        "pre3.jpg",
        "pre4.jpg",
        "pre5.jpg",
        "pre6.jpg",
      ]),
      ...files("AppArchives/PostScript", "App Archives — PostScript", [
        "pos1.jpg",
        "pos2.jpg",
        "pos3.jpg",
        "pos4.jpg",
        "pos5.jpg",
      ]),
    ],
  },
  {
    id: "ataraxia-23",
    date: "11th September 2023",
    title: "Ataraxia",
    highlight: "‘23",
    photos: files("Ataraxia", "Ataraxia ‘23", [
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
    id: "elysian-23",
    date: "19th August 2023",
    title: "Elysian",
    highlight: "‘23",
    photos: files("Elysian", "Elysian ‘23", [
      "el1.jpg",
      "el2.jpg",
      "el3.jpg",
      "el4.jpg",
      "el5.jpg",
      "el6.jpg",
    ]),
  },
  {
    id: "orphanage-visit",
    date: "26th February 2023",
    title: "Orphanage",
    highlight: "Visit",
    photos: files("OrphanageVisit", "Orphanage Visit", [
      "orphanage1.jpg",
      "orphanage2.jpg",
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
    id: "301-redirect",
    date: "28th September 2022",
    title: "301",
    highlight: "Redirect",
    photos: files("Redirect", "301 Redirect", [
      "3011.jpg",
      "3012.jpg",
      "3013.jpg",
      "3014.jpg",
      "3015.jpg",
      "3016.jpg",
      "3017.jpg",
      "3018.jpg",
      "3019.jpg",
    ]),
  },
];
