import { CtaSection } from "@/components/cta-section";
import { Faq } from "@/components/faq";
import { Features } from "@/components/features";
import { FeaturesSection } from "@/components/features-section";
import { Footer } from "@/components/footer";
import { Header } from "@/components/header";
import { Hero } from "@/components/hero";
import { SocialProof } from "@/components/social-proof";
import { Technologies } from "@/components/technologies";
import { Testimonials } from "@/components/testimonials";

export default function Home() {
  return (
    <>
      <Header />
      <Hero />
      <SocialProof />
      <Technologies />
      <Features />
      <FeaturesSection />
      <Testimonials />
      <Faq />
      <CtaSection />
      <Footer />
    </>
  );
}
