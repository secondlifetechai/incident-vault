import FeatureSection from "@/components/Features";
import Hero from "@/components/Hero";
import Pricing from "@/components/Price";
import Testimonials from "@/components/Testimonials";
import Workflow from "@/components/Workflow";

export default function Home() {
  return (
    <>
      <div className='max-w-7xl mx-auto pt-20 px-6'>
        <Hero />
      </div>
      <FeatureSection />
      <Workflow />
      <Pricing />
      <Testimonials />
    </>
  );
}
