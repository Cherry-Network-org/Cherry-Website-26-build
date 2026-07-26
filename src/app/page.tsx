import type { Metadata } from "next";
import { HomePageContent } from "@/components/home/HomePageContent";

export const metadata: Metadata = {
  title: "Cherry+ Network",
  description:
    "The coolest club on campus for events, domains, collaboration, and unforgettable student experiences.",
};

export default function HomePage() {
  return <HomePageContent />;
}
