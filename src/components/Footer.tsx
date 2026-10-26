import Image from "next/image";
import Link from "next/link";

const footerLinks = [
  { name: "About us", href: "/about" },
  { name: "Our businesses", href: "/businesses" },
  { name: "Cold chain", href: "/cold-chain" },
  { name: "Our approach", href: "/approach" },
  { name: "Contact", href: "/contact" },
];

export default function Footer() {
  return (
    <footer className="relative overflow-hidden bg-[#0d3029] text-white">
      <div className="absolute inset-0">
        <div className="absolute inset-0 bg-[#0d3029]" />
        <div className="absolute -right-40 -top-40 h-[600px] w-[600px] rounded-full border-[70px] border-white/[0.035]" />
        <div className="absolute -bottom-48 -left-40 h-[550px] w-[550px] rounded-full border-[55px] border-white/[0.025]" />
        <div className="absolute left-1/3 top-1/2 h-[350px] w-[350px] -translate-y-1/2 rounded-full bg-[#4f8f7d]/10 blur-[100px]" />
      </div>
      <div className="relative z-10 mx-auto w-[92%] max-w-7xl">
        <div className="grid gap-12 py-16 md:grid-cols-2 lg:grid-cols-[1.5fr_0.9fr_1fr] lg:gap-16 lg:py-20">
          <div>
            <Link href="/" className="inline-block">
              <Image src="/images/north-arc-logo-white.png" alt="North Arc Ventures" width={150} height={55} className="h-auto w-[145px]" />
            </Link>
            <p className="mt-7 max-w-sm text-sm leading-7 text-white/60">Building ambitious businesses for a growing India.</p>
            <p className="mt-8 text-xs uppercase tracking-[0.2em] text-white/40">Jamshedpur, Jharkhand, India</p>
          </div>
          <div>
            <p className="mb-6 text-xs font-semibold uppercase tracking-[0.22em] text-white/40">Explore</p>
            <nav className="flex flex-col gap-4">
              {footerLinks.map((link) => <Link key={link.name} href={link.href} className="w-fit text-sm text-white/70 transition-all duration-300 hover:translate-x-1 hover:text-white">{link.name}</Link>)}
            </nav>
          </div>
          <div>
            <p className="mb-6 text-xs font-semibold uppercase tracking-[0.22em] text-white/40">Connect</p>
            <p className="max-w-xs text-sm leading-7 text-white/60">Business enquiries, frozen foods and cold storage.</p>
            <a href="https://wa.me/919661149356" className="mt-5 inline-block text-sm font-medium text-white transition-colors hover:text-white/60">WhatsApp ↗ · +91 96611 49356</a>
            <a href="mailto:northarcventures@gmail.com" className="mt-3 block text-sm font-medium text-white transition-colors hover:text-white/60">northarcventures@gmail.com</a>
          </div>
        </div>
        <div className="flex flex-col gap-4 border-t border-white/10 py-7 text-xs text-white/35 sm:flex-row sm:items-center sm:justify-between">
          <p>© {new Date().getFullYear()} North Arc Ventures. All rights reserved.</p>
          <Link href="/" className="transition-colors hover:text-white">Back to home ↑</Link>
        </div>
      </div>
    </footer>
  );
}
