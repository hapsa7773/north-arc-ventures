import Image from "next/image";
import Link from "next/link";

export default function Hero() {
  return (
    <section className="relative isolate overflow-hidden bg-background pt-32">
      
      {/* =========================
          3D / AESTHETIC BACKGROUND
         ========================= */}
      <div className="pointer-events-none absolute inset-0 -z-10 overflow-hidden">

        {/* Soft green glow - left */}
        <div className="absolute -left-40 top-20 h-[420px] w-[420px] rounded-full bg-primary/10 blur-3xl" />

        {/* Soft green glow - right */}
        <div className="absolute -right-40 -top-32 h-[520px] w-[520px] rounded-full bg-primary-light blur-3xl" />

        {/* Large North Arc inspired ring */}
        <div className="absolute left-[38%] top-[5%] h-[680px] w-[680px] rounded-full border-[70px] border-primary/[0.035]" />

        {/* Inner ring */}
        <div className="absolute left-[43%] top-[13%] h-[520px] w-[520px] rounded-full border border-primary/[0.08]" />

        {/* Small floating ring */}
        <div className="absolute right-[8%] top-[18%] h-32 w-32 rounded-full border-[18px] border-primary/[0.05]" />

        {/* Subtle grid */}
        <div
          className="absolute inset-0 opacity-[0.035]"
          style={{
            backgroundImage:
              "linear-gradient(rgba(15,81,69,0.8) 1px, transparent 1px), linear-gradient(90deg, rgba(15,81,69,0.8) 1px, transparent 1px)",
            backgroundSize: "70px 70px",
          }}
        />

        {/* Soft center glow */}
        <div className="absolute left-1/2 top-1/2 h-[300px] w-[300px] -translate-x-1/2 -translate-y-1/2 rounded-full bg-primary/5 blur-3xl" />

      </div>


      {/* =========================
          HERO CONTENT
         ========================= */}
      <div className="mx-auto grid min-h-[calc(100vh-2rem)] w-[92%] max-w-7xl items-center gap-12 pb-16 lg:grid-cols-2">

        {/* =========================
            LEFT CONTENT
           ========================= */}
        <div className="relative z-10 max-w-2xl">

          <p className="mb-6 text-sm font-medium uppercase tracking-[0.28em] text-primary">
            North Arc Ventures
          </p>

          <h1 className="text-5xl font-semibold leading-[1.05] tracking-tight sm:text-6xl lg:text-7xl">
            Building ambitious
            <br />
            businesses for a growing India.
          </h1>

          <p className="mt-7 max-w-xl text-lg leading-8 text-muted">
            From frozen desserts to cold-chain infrastructure, we build around real needs, thoughtful execution and relationships that last.
          </p>

          <div className="mt-9 flex flex-wrap gap-4">

            <Link
              href="/businesses"
              className="rounded-full bg-primary px-6 py-3 text-sm font-medium text-white transition-all duration-300 hover:scale-105 hover:shadow-lg"
            >
              Explore our businesses
            </Link>

            <Link
              href="/contact"
              className="rounded-full border border-border bg-white/80 px-6 py-3 text-sm font-medium text-foreground backdrop-blur-sm transition-all duration-300 hover:border-primary hover:text-primary"
            >
              Work with us
            </Link>

          </div>

        </div>


        {/* =========================
            RIGHT VISUAL
           ========================= */}
        <div className="relative [perspective:1200px]">

          {/* Soft shadow behind image */}
          <div className="absolute -inset-4 rounded-[2.5rem] bg-primary/10 blur-2xl" />

          {/* Image */}
          <div className="relative aspect-[16/10] overflow-hidden rounded-[2rem] border border-white/70 bg-primary-light shadow-[0_30px_80px_rgba(15,81,69,0.14)] transition-transform duration-700 hover:[transform:rotateY(-2deg)_rotateX(1deg)_translateY(-4px)]">

            <Image
              src="/images/hero-illustration.svg"
              alt="Illustration of frozen desserts and temperature-controlled storage"
              fill
              priority
              sizes="(max-width: 1024px) 100vw, 50vw"
              className="object-cover object-center"
            />

            {/* Image overlay */}
            <div className="pointer-events-none absolute inset-0 bg-gradient-to-tr from-primary/10 via-transparent to-white/10" />

          </div>


          {/* North Arc decorative ring */}
          <div className="absolute -bottom-10 -left-10 h-32 w-32 rounded-full border-[14px] border-primary/10" />

          {/* Small floating dot */}
          <div className="absolute -right-3 top-10 h-5 w-5 rounded-full bg-primary/20 blur-[1px]" />

        </div>

      </div>

    </section>
  );
}