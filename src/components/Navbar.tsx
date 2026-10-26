import Image from "next/image";
import Link from "next/link";

const navLinks = [
  { name: "About us", href: "/about" },
  { name: "Our businesses", href: "/businesses" },
  { name: "Cold chain", href: "/cold-chain" },
  { name: "Our approach", href: "/approach" },
  { name: "Contact", href: "/contact" },
];

export default function Navbar() {
  return (
    <header className="fixed left-0 top-0 z-50 w-full">
      <div className="mx-auto mt-4 flex w-[92%] max-w-7xl items-center justify-between rounded-full border border-border bg-white/90 px-4 py-3 shadow-sm backdrop-blur-md sm:px-6">
        <Link href="/" className="flex shrink-0 items-center" aria-label="North Arc Ventures home">
          <Image src="/images/north-arc-logo.png" alt="North Arc Ventures" width={150} height={55} priority className="north-arc-logo h-auto w-[125px] sm:w-[140px]" />
        </Link>
        <nav aria-label="Main navigation" className="hidden items-center gap-5 lg:flex xl:gap-7">
          {navLinks.map((link) => (
            <Link key={link.name} href={link.href} className="text-sm text-foreground/80 transition-colors hover:text-primary">
              {link.name}
            </Link>
          ))}
        </nav>
        <Link href="/contact" className="rounded-full bg-primary px-4 py-2.5 text-xs font-medium text-white transition-transform hover:scale-105 sm:px-5 sm:text-sm">
          Business enquiry ↗
        </Link>
      </div>
      <nav aria-label="Mobile navigation" className="mx-auto mt-2 flex w-[92%] max-w-7xl gap-4 overflow-x-auto rounded-2xl border border-border bg-white/95 px-4 py-2 backdrop-blur-md lg:hidden">
        {navLinks.map((link) => (
          <Link key={link.name} href={link.href} className="shrink-0 text-xs text-foreground/80 transition-colors hover:text-primary">
            {link.name}
          </Link>
        ))}
      </nav>
    </header>
  );
}
