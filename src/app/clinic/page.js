import ClinicHero from "@/components/clinic/ClinicHero";
import ClinicIntro from "@/components/clinic/ClinicIntro";
import ClinicGallery from "@/components/clinic/ClinicGallery";
import ClinicTech from "@/components/clinic/ClinicTech";
import ClinicSafety from "@/components/clinic/ClinicSafety";
import ClinicJourney from "@/components/clinic/ClinicJourney";
import ClinicStats from "@/components/clinic/ClinicStats";
import ClinicTour from "@/components/clinic/ClinicTour";
import ClinicCTA from "@/components/clinic/ClinicCTA";

export const metadata = {
  title: 'Our Clinic | Dentelle',
  description: 'Explore the modern, comfortable, and highly advanced dental facility at Dentelle.',
};

export default function ClinicPage() {
  return (
    <main className="bg-white dark:bg-[var(--color-bg-main)]">
      <ClinicHero />
      <ClinicIntro />
      <ClinicGallery />
      <ClinicTech />
      <ClinicSafety />
      {/* <ClinicJourney /> */}
      <ClinicStats />
      <ClinicTour />
      <ClinicCTA />
    </main>
  );
}
