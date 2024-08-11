import { MobileNavbar } from "@/components/mobile-navbar";
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
      <div className="flex items-center gap-10">
        <nav className="hidden items-center justify-end gap-10 md:flex">
          {/* <Link
            href="/students"
            className="flex cursor-pointer items-center text-lg font-medium text-muted-foreground transition-colors hover:text-foreground sm:text-sm"
          >
            Students
          </Link> */}
          <Link
            href="/faucet"
            className="flex cursor-pointer items-center text-lg font-medium text-muted-foreground transition-colors hover:text-foreground sm:text-sm"
          >
            Faucet
          </Link>
        </nav>
        
      </div>
      <MobileNavbar>
        <div className="container rounded-b-lg bg-background py-4 text-foreground shadow-xl">
          <nav className="flex flex-col gap-1 pt-2">
            <Link
              href="/faucet"
              className="flex w-full cursor-pointer items-center rounded-md p-2 font-medium text-muted-foreground hover:text-foreground"
            >
              Faucet
            </Link>

            {/* <Link
              href="/students"
              className="flex w-full cursor-pointer items-center rounded-md p-2 font-medium text-muted-foreground hover:text-foreground"
            >
              Students
            </Link> */}
          </nav>
        </div>
      </MobileNavbar>
    </header>
  );
}
