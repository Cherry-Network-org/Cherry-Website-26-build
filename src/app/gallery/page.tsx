import type { Metadata } from "next";
import { GalleryPageContent } from "@/components/GalleryPageContent";

export const metadata: Metadata = {
  title: "Gallery | Cherry+ Network",
  description:
    "Browse photos from Cherry+ Network events including App Archives, Ataraxia, Elysian, and more.",
};

export default function GalleryPage() {
  return <GalleryPageContent />;
}
