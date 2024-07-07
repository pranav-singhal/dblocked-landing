import { Button } from "@/components/ui/button";
import Image from "next/image";
import Link from "next/link";


export function Header() {
  return (
    <header className="container flex items-center justify-between gap-10 py-4">
      <Link href="https://www.dblocked.io" className="flex items-center gap-3">
      <Image
                  alt="Picture"
                  src="/images/logo.jpg"
                  width={30}
                  height={30}
                  className="rounded-sm object-cover"
                />
        <span className="font-heading text-xl font-bold">DBlockEd</span>
      </Link>
      <div className="flex hidden items-center gap-10">
        <nav className="hidden items-center justify-end gap-10 md:flex">
          <Link
            href="#"
            className="flex cursor-pointer items-center text-lg font-medium text-muted-foreground transition-colors hover:text-foreground sm:text-sm"
          >
            Docs
          </Link>
          <Link
            href="#"
            className="flex cursor-pointer items-center text-lg font-medium text-muted-foreground transition-colors hover:text-foreground sm:text-sm"
          >
            Blog
          </Link>
          <Link
            href="#"
            className="flex cursor-pointer items-center text-lg font-medium text-muted-foreground transition-colors hover:text-foreground sm:text-sm"
          >
            Pricing
          </Link>
        </nav>
        <div className="hidden items-center gap-2 md:flex">
          <Button asChild>
            <Link href="#" className="cursor-pointer">
              Get Started
            </Link>
          </Button>
        </div>
      </div>
      {/* <MobileNavbar className="hidden">
        <div className="container hidden rounded-b-lg bg-background py-4 text-foreground shadow-xl">
          <nav className="flex flex-col gap-1 pt-2">
            <Link
              href="#"
              className="flex w-full cursor-pointer items-center rounded-md p-2 font-medium text-muted-foreground hover:text-foreground"
            >
              About
            </Link>
            <Link
              href="#"
              className="flex w-full cursor-pointer items-center rounded-md p-2 font-medium text-muted-foreground hover:text-foreground"
            >
              Blog
            </Link>
            <Link
              href="#"
              className="flex w-full cursor-pointer items-center rounded-md p-2 font-medium text-muted-foreground hover:text-foreground"
            >
              Pricing
            </Link>
            <Button size="lg" asChild className="mt-2 w-full">
              <Link href="#" className="cursor-pointer">
                Get Started
              </Link>
            </Button>
          </nav>
        </div>
      </MobileNavbar> */}
    </header>
  );
}
