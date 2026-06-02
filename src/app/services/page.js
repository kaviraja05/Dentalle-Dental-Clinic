import ServicesHero from "@/components/services/ServicesHero";
import ServicesList from "@/components/services/ServicesList";
import ServicesFAQ from "@/components/services/ServicesFAQ";

export default function ServicesPage() {
  return (
    <div className="-mt-[72px]">
      <ServicesHero />
      <ServicesList />
      <ServicesFAQ />
    </div>
  );
}
