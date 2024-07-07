import { Button } from "@/components/ui/button";
import { Check } from "lucide-react";
import Image from "next/image";
import Link from "next/link";


export function FeaturesSection() {
  return (
    <section className="container flex flex-col gap-10 md:flex-row md:items-center md:gap-24">
      <div className="flex flex-1 flex-col items-start gap-5">
        <div className="flex flex-col gap-3">
          <span className="text-left font-bold uppercase text-primary">Meet the instructor</span>
          <h2 className="text-left font-heading text-3xl font-semibold sm:text-4xl">
            Pranav Singhal
          </h2>
        </div>
        <p className="max-w-lg text-left text-lg text-muted-foreground">
          Pranav is a full stack web3 developer. He has helped web3 startups with token launches,
          app development, and building AI powered assistants
        </p>
        <p className="max-w-lg text-left text-lg text-muted-foreground">
          He is passionate about teaching. Having built his entire career on self-learning from the
          internet , he believes that anyone can be a web3 developer.
        </p>
        <p className="max-w-lg text-left text-lg text-muted-foreground">
          When he is not building, you can find him playing guitar, in the gym, or at a hackathon
        </p>
        <ul className="mt-4 hidden space-y-3">
          <li className="flex items-center gap-2">
            <Check size={20} className="text-primary" />
            <span className="text-muted-foreground" />
          </li>
          <li className="flex items-center gap-2">
            <Check size={20} className="text-primary" />
            <span className="text-muted-foreground">See your changes in real-time.</span>
          </li>
          <li className="flex items-center gap-2">
            <Check size={20} className="text-primary" />
            <span className="text-muted-foreground">Export code for full customization.</span>
          </li>
        </ul>
        <div className="mt-4 grid hidden grid-cols-2 gap-3">
          <Button size="lg" asChild variant="outline">
            <Link href="#" className="h-12 cursor-pointer border-border text-base md:px-9">
              Learn More
            </Link>
          </Button>
          <Button size="lg" asChild>
            <Link href="#" className="h-12 cursor-pointer text-base md:px-9">
              Get Started
            </Link>
          </Button>
        </div>
      </div>
      <div className="relative flex-1">
        <Image
          alt="SaaS Dashboard"
          src="/images/me.JPEG"
          width={713}
          height={497.7}
          className="rounded-xl border border-border shadow-2xl"
        />
      </div>
    </section>
  );
}
