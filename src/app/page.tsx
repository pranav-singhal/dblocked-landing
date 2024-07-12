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
import type { Metadata } from 'next';
 
export const metadata: Metadata = {
  title: 'DBlockEd | 0 To Web3',
  description: '0 to Web3 is a continuous developer education program. It is a never ending program that makes you a full stack web3 developer',
  openGraph: {
    images: ['https://www.dblocked.io/images/banner.jpg']
  },
  twitter: {
    images: ['https://www.dblocked.io/images/banner.jpg']
  },
}

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
