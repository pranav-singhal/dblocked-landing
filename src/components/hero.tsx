'use client'  
import { ArrowRight } from "lucide-react";
import Link from "next/link";
import { Button } from "./ui/button";

export function Hero() {
  
  return (
    <section className="container flex flex-col items-center gap-8 pt-20 sm:gap-10">

      <a href="https://discord.gg/8xHAFsCeZj" target="_blank">
        <div className="flex cursor-pointer items-center gap-1 rounded-full border bg-secondary px-3 py-0.5 hover:bg-secondary/60">
          <span className="text-sm text-secondary-foreground">
            Join DblockEd&rsquo;s Discord today
          </span>
          <ArrowRight size={16} />
        </div>
      </a>
      <h1 className="max-w-3xl text-center font-heading text-4xl font-semibold sm:text-5xl sm:leading-tight">
        Become a Fullstack Web3 Developer
      </h1>
      <p className="max-w-lg text-center text-lg text-muted-foreground sm:text-xl">
        Get access to a free, continuous developer education program that grows and evolves with the
        industry.
      </p>

      <p className="max-w-lg text-center text-lg text-muted-foreground sm:text-xl">
        Stand a chance to win travel scholarships to the biggest Ethereum Hackathon
      </p>
      
      <Button
        size="lg"
        asChild
        className="h-12 cursor-pointer border-border text-base sm:h-14 sm:px-10"
      >
        <Link target="_blank" href="https://bit.ly/4c5uk4c">Enroll Now!</Link>
      </Button>

      <p className="max-w-lg text-center text-lg text-muted-foreground sm:text-xl">
        Watch the intro video 👇
      </p>
      <div className="h-96 w-full md:px-48 ">
      <iframe 
      className="h-96 w-full shadow-xl"
        
        src="https://www.youtube.com/embed/VExUXzaNWkU?si=tvOeXm1O68LbGbac" 
        title="YouTube video player" 
        frameBorder="0" 
        allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" 
        referrerPolicy="strict-origin-when-cross-origin" 
        allowFullScreen 
      />
        {/* <Image
          alt="SaaS Dashboard"
          src="/images/dashboard.png"
          width={1000}
          height={698}
          priority
          className="rounded-xl border border-border shadow-lg"
        /> */}
        <div className="absolute inset-0 -z-10 bg-primary/20 [filter:blur(180px)]" />
      </div>
    </section>
  );
}
