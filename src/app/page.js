import HeroSection from "@/components/home/HeroSection";
import AboutPreviewSection from "@/components/home/AboutPreviewSection";
import ServicesPreviewSection from "@/components/home/ServicesPreviewSection";
import ProcessSection from "@/components/home/ProcessSection";
import TestimonialSection from "@/components/home/TestimonialSection";
import StatisticsSection from "@/components/home/StatisticsSection";
import CTASection from "@/components/home/CTASection";

export default function Home() {
  return (
    <>
      <HeroSection />
      <AboutPreviewSection />
      <ServicesPreviewSection />
      <ProcessSection />
      <TestimonialSection />
      <CTASection />
    </>
  );
}
