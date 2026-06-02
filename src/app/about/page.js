import AboutHero from "@/components/about/AboutHero";
import AboutMission from "@/components/about/AboutMission";
import AboutValues from "@/components/about/AboutValues";
import AboutCareRoutine from "@/components/about/AboutCareRoutine";
import AboutTeam from "@/components/about/AboutTeam";
import AboutCTA from "@/components/about/AboutCTA";

export default function AboutPage() {
  return (
    <div className="-mt-[72px]">
      <AboutHero />
      <AboutMission />
      <AboutValues />
      <AboutCareRoutine />
      <AboutTeam />
      <AboutCTA />
    </div>
  );
}
