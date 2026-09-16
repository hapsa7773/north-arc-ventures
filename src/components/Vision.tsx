import Link from "next/link";

export default function Vision() {
  return (
    <section className="relative overflow-hidden bg-primary py-28 text-white sm:py-36">
      {/* Decorative Arc */}
      <div className="pointer-events-none absolute -right-24 -top-24 h-72 w-72 rounded-full border-[32px] border-white/10" />

      <div className="pointer-events-none absolute -bottom-32 -left-32 h-80 w-80 rounded-full border-[28px] border-white/5" />

      <div className="relative mx-auto w-[92%] max-w-7xl">
        <p className="text-sm font-medium uppercase tracking-[0.28em] text-white/60">
          Our Vision
        </p>

        <h2 className="mt-8 max-w-5xl text-5xl font-semibold leading-[1.05] tracking-tight sm:text-6xl lg:text-8xl">
          Building today
          <br />
          for what&apos;s next.
        </h2>

        <div className="mt-10 flex flex-col justify-between gap-8 border-t border-white/15 pt-8 md:flex-row md:items-end">
          <p className="max-w-xl text-base leading-8 text-white/70 sm:text-lg">
            We want to build businesses that evolve with people, create
            meaningful experiences and have the potential to go further.
          </p>

          <Link
            href="#contact"
            className="w-fit rounded-full bg-white px-6 py-3 text-sm font-medium text-primary transition-transform duration-300 hover:scale-105"
          >
            Let&apos;s Build Together
          </Link>
        </div>
      </div>
    </section>
  );
}