
import Image from "next/image";
import Link from "next/link";


const navLinks = [
  { name: "About", href: "#about" },
  { name: "Our Brands", href: "#brands" },
  { name: "Our Approach", href: "#approach" },
  { name: "Contact", href: "#contact" },
];

export default function Navbar() {
  return (
    <header className="fixed top-0 left-0 z-50 w-full">
      <div className="mx-auto mt-4 flex w-[92%] max-w-7xl items-center justify-between rounded-full border border-border bg-white/90 px-6 py-3 shadow-sm backdrop-blur-md">
        
        {/* Logo */}
         <Link href="/" className="flex items-center">
  <Image
    src="/images/north-arc-logo.png"
    alt="North Arc Ventures"
    width={150}
    height={55}
    priority
    className="north-arc-logo h-auto w-[140px]"
  />
</Link>

        {/* Desktop Navigation */}
        <nav className="hidden items-center gap-8 md:flex">
          {navLinks.map((link) => (
            <Link
              key={link.name}
              href={link.href}
              className="text-sm text-foreground/80 transition-colors hover:text-primary"
            >
              {link.name}
            </Link>
          ))}
        </nav>

        {/* CTA */}
        <Link
          href="#contact"
          className="rounded-full bg-primary px-5 py-2.5 text-sm font-medium text-white transition-transform hover:scale-105"
        >
          Let&apos;s Connect
        </Link>
      </div>
    </header>
  );
}