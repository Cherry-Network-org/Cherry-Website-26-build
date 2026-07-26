import { HomeActivities } from "@/components/home/HomeActivities";
import { HomeCommunityCta } from "@/components/home/HomeCommunityCta";
import { HomeFooter } from "@/components/home/HomeFooter";
import { HomeHero } from "@/components/home/HomeHero";
import { HomeJourney } from "@/components/home/HomeJourney";
import { HomePillars } from "@/components/home/HomePillars";
import { HomeStats } from "@/components/home/HomeStats";
import { HomeVisionMission } from "@/components/home/HomeVisionMission";
import { NavBar } from "@/components/NavBar";

export function HomePageContent() {
  return (
    <main className="min-h-screen bg-[#0b0b0b] text-white">
      <NavBar activeLabel="HOME" />
      <HomeHero />
      <HomeVisionMission />
      <HomeJourney />
      <HomePillars />
      <HomeActivities />
      <HomeStats />
      <HomeCommunityCta />
      <HomeFooter />
    </main>
  );
}
