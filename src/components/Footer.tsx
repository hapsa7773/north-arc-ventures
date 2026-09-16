import Image from "next/image";
import Link from "next/link";

const footerLinks = [
  { name: "About", href: "#about" },
  { name: "Our Brands", href: "#brands" },
  { name: "Our Approach", href: "#approach" },
  { name: "Contact", href: "#contact" },
];

export default function Footer() {
  return (
    <footer className="relative overflow-hidden bg-[#0d3029] text-white">

      {/* Background */}
      <div className="absolute inset-0 -z-0">
        <div className="absolute inset-0 bg-[#0d3029]" />

        {/* Decorative Arc */}
        <div className="absolute -right-40 -top-40 h-[600px] w-[600px] rounded-full border-[70px] border-white/[0.035]" />

        <div className="absolute -bottom-48 -left-40 h-[550px] w-[550px] rounded-full border-[55px] border-white/[0.025]" />

        {/* Soft glow */}
        <div className="absolute left-1/3 top-1/2 h-[350px] w-[350px] -translate-y-1/2 rounded-full bg-[#4f8f7d]/10 blur-[100px]" />
      </div>

      {/* Content */}
      <div className="relative z-10 mx-auto w-[92%] max-w-7xl">

        {/* Main Footer */}
        <div className="grid gap-16 py-20 md:grid-cols-2 lg:grid-cols-[1.5fr_0.7fr_1fr] lg:py-24">

          {/* Brand */}
          <div>
            <Link href="/" className="inline-block">
              <Image
                src="/images/north-arc-logo.png"
                alt="North Arc Ventures"
                width={150}
                height={55}
                className="h-auto w-[145px] brightness-0 invert"
              />
            </Link>

            <p className="mt-7 max-w-sm text-sm leading-7 text-white/60">
              Building brands, businesses and possibilities for what&apos;s
              next.
            </p>

            <p className="mt-8 text-xs uppercase tracking-[0.2em] text-white/30">
              North Arc Ventures
            </p>
          </div>

          {/* Explore */}
          <div>
            <p className="mb-7 text-xs font-semibold uppercase tracking-[0.22em] text-white/40">
              Explore
            </p>

            <nav className="flex flex-col gap-4">
              {footerLinks.map((link) => (
                <Link
                  key={link.name}
                  href={link.href}
                  className="w-fit text-sm text-white/70 transition-all duration-300 hover:translate-x-1 hover:text-white"
                >
                  {link.name}
                </Link>
              ))}
            </nav>
          </div>

          {/* Contact */}
          <div>
            <p className="mb-7 text-xs font-semibold uppercase tracking-[0.22em] text-white/40">
              Get in Touch
            </p>

            <p className="max-w-xs text-sm leading-7 text-white/60">
              Business enquiries,
              <br />
              partnerships &amp; collaborations.
            </p>

            <a
              href="mailto:hello@northarcventures.com"
              className="mt-5 inline-block text-sm font-medium text-white transition-colors duration-300 hover:text-white/60"
            >
              hello@northarcventures.com
            </a>
          </div>

        </div>

        {/* Bottom */}
        <div className="flex flex-col gap-5 border-t border-white/10 py-7 text-xs text-white/35 sm:flex-row sm:items-center sm:justify-between">

          <p>
            © {new Date().getFullYear()} North Arc Ventures. All rights
            reserved.
          </p>

          <div className="flex gap-6">
            <Link
              href="#"
              className="transition-colors duration-300 hover:text-white"
            >
              Privacy Policy
            </Link>

            <Link
              href="#"
              className="transition-colors duration-300 hover:text-white"
            >
              Terms
            </Link>
          </div>

        </div>

      </div>
    </footer>
  );
}