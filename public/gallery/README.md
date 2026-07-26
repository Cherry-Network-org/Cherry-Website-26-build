# Gallery images

Each subfolder here is one event section on the `/gallery` page.

## How to add photos

1. Drop image files (jpg/png/webp) into the matching event folder, e.g.
   `public/gallery/ataraxia-23/1.jpg`
2. Open `src/data/gallery.ts` and list the filenames for that event:

   ```ts
   photos: files("ataraxia-23", "Ataraxia ‘23", ["1.jpg", "2.jpg", "group.png"]),
   ```

3. Photos render in the order listed. Events with an empty list show
   placeholder boxes.

## Adding a new event

Create a new folder here, then add an entry to `galleryEvents` in
`src/data/gallery.ts` with a matching `id`.
