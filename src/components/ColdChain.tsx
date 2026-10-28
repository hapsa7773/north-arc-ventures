
import { Snowflake, Package } from "lucide-react";
import Link from "next/link";
import Image from "next/image";

const offerings = [
  {
    number: "01",
    title: "Frozen storage & space rental",
    text: "Sub-zero cold-storage space for businesses handling frozen goods, subject to product suitability, operating conditions and availability.",
    icon: Snowflake,
  },
  {
    number: "02",
    title: "Frozen-food trading",
    text: "Selected frozen-food categories including green peas, sweet corn, mushrooms and peppers for commercial buyers.",
    icon: Package,
  },
];

export default function ColdChain() {
  return (
    <section className="relative isolate overflow-hidden bg-gradient-to-br from-[#edf5f1] via-[#f8faf8] to-[#e1eee8] py-28 sm:py-32">
      {/* Background decorations */}
      <div
        aria-hidden="true"
        className="pointer-events-none absolute -left-32 top-24 -z-10 h-80 w-80 rounded-full bg-[#b9d8ca]/40 blur-3xl"
      />
      <div
        aria-hidden="true"
        className="pointer-events-none absolute -right-32 top-[28rem] -z-10 h-96 w-96 rounded-full bg-[#9fcbbb]/30 blur-3xl"
      />
      <div
        aria-hidden="true"
        className="pointer-events-none absolute right-[8%] top-36 -z-10 h-28 w-28 rounded-full border border-[#176454]/15"
      />
      <div
        aria-hidden="true"
        className="pointer-events-none absolute bottom-24 left-[12%] -z-10 h-20 w-20 rounded-full border border-[#176454]/10"
      />

      <div className="mx-auto w-[92%] max-w-7xl">
        {/* Hero */}
        <div className="grid items-center gap-12 lg:grid-cols-2 lg:gap-20">
          <div>
            <p className="text-sm font-medium uppercase tracking-[0.28em] text-[#176454]">
              03 / Cold Chain & Frozen Foods
            </p>

            <h1 className="mt-5 text-4xl font-semibold leading-tight tracking-tight text-[#123f36] sm:text-5xl lg:text-6xl">
              The infrastructure behind the everyday.
            </h1>

            <p className="mt-7 max-w-xl text-base leading-8 text-[#536b65]">
              From dependable frozen storage to sourcing select frozen
              produce, we’re developing the capabilities that help commercial
              food supply move forward.
            </p>
          </div>

          {/* Cold storage image */}
          <div className="relative rounded-[2rem] border border-white/80 bg-white/70 p-2 shadow-[0_20px_55px_rgba(18,78,65,0.12)] backdrop-blur-sm">
            <div className="relative aspect-[3/2] w-full overflow-hidden rounded-[1.5rem] bg-[#e5efeb]">
              <Image
                src="/images/cold-storage.png"
                alt="Modern refrigerated cold-storage warehouse for frozen-food operations"
                fill
                priority
                sizes="(max-width: 1024px) 92vw, 50vw"
                className="object-contain"
              />
            </div>
          </div>
        </div>

        {/* Storage capacity */}
        <div className="mt-14 grid gap-6 md:grid-cols-2">
          <div className="relative overflow-hidden rounded-[2rem] bg-gradient-to-br from-[#12584b] to-[#0b4037] px-8 py-10 text-white shadow-[0_18px_45px_rgba(18,78,65,0.16)] sm:px-10 sm:py-12">
            <div
              aria-hidden="true"
              className="pointer-events-none absolute -right-10 -top-12 h-48 w-48 rounded-full border-[24px] border-white/[0.06]"
            />

            <p className="relative text-xs uppercase tracking-[0.22em] text-white/65">
              Approximate sub-zero storage capacity
            </p>

            <p className="relative mt-4 text-6xl font-semibold tracking-tight sm:text-7xl">
              7,000 <span className="text-2xl font-medium">CFT</span>
            </p>

            <p className="relative mt-5 text-base leading-7 text-white/75">
              Frozen-storage capacity in Jamshedpur, Jharkhand.
            </p>
          </div>

          <div className="flex flex-col justify-center rounded-[2rem] border border-[#dce9e2] bg-white/85 p-8 shadow-[0_12px_35px_rgba(18,78,65,0.05)] backdrop-blur-sm sm:p-10">
            <p className="text-sm font-medium uppercase tracking-[0.22em] text-[#176454]">
              Built for business needs
            </p>

            <h2 className="mt-4 text-2xl font-semibold tracking-tight text-[#123f36] sm:text-3xl">
              Reliable storage. Practical solutions.
            </h2>

            <p className="mt-4 text-base leading-8 text-[#536b65]">
              Cold-chain storage and frozen-food trading support commercial
              buyers with practical, enquiry-led solutions.
            </p>

            <Link
              href="/contact"
              className="mt-6 inline-flex items-center gap-2 text-sm font-medium text-[#176454] transition-all duration-300 hover:gap-3"
            >
              Discuss your requirements <span>→</span>
            </Link>
          </div>
        </div>
        
        {/* 3D Cold Chain Infrastructure */}
        <section className="relative mt-24 overflow-hidden rounded-[2rem] border border-[#dce9e2] bg-white/80 shadow-[0_20px_60px_rgba(18,78,65,0.08)]">
          <div className="grid items-center gap-8 p-6 sm:p-10 lg:grid-cols-[0.8fr_1.2fr] lg:gap-10 lg:p-12">
            {/* Section content */}
            <div className="relative z-10">
              <p className="text-sm font-medium uppercase tracking-[0.24em] text-[#176454]">
                Our Infrastructure
              </p>

              <h2 className="mt-4 text-3xl font-semibold leading-tight tracking-tight text-[#123f36] sm:text-4xl lg:text-5xl">
                Built for Temperature.
                <span className="block">Designed for Trust.</span>
              </h2>

              <p className="mt-5 max-w-lg text-base leading-8 text-[#536b65]">
                Explore a visual representation of cold-chain infrastructure,
                including organized storage racks, insulated cold rooms,
                refrigeration equipment and goods-handling areas.
              </p>

              <div className="mt-8 flex flex-wrap gap-3">
                <span className="rounded-full border border-[#dce9e2] bg-[#edf5f1] px-4 py-2 text-sm text-[#176454]">
                  <Snowflake size={15} className="mr-2 inline" />
                  Frozen Storage
                </span>

                <span className="rounded-full border border-[#dce9e2] bg-[#edf5f1] px-4 py-2 text-sm text-[#176454]">
                  <Package size={15} className="mr-2 inline" />
                  Goods Handling
                </span>
              </div>

              <Link
                href="/contact"
                className="mt-8 inline-flex items-center gap-3 rounded-full bg-[#12584b] px-6 py-3 text-sm font-medium text-white transition-colors hover:bg-[#0b4037]"
              >
                Discuss Your Requirements <span>→</span>
              </Link>
            </div>

            {/* 3D warehouse visual */}
            <div className="relative min-w-0">
              <div
                aria-hidden="true"
                className="pointer-events-none absolute inset-8 rounded-full bg-[#b9d8ca]/40 blur-3xl"
              />

              <div className="relative overflow-hidden rounded-[1.5rem] border border-[#dce9e2] bg-[#edf5f1] p-2 sm:p-3">
                <Image
                  src="/images/cold-chain-3d.png"
                  alt="3D concept visualization of a cold storage warehouse, storage racks, cold rooms and refrigeration equipment"
                  width={1200}
                  height={900}
                  sizes="(max-width: 1024px) 92vw, 55vw"
                  className="relative h-auto w-full rounded-[1rem] object-contain"
                />
              </div>

              <p className="mt-3 text-center text-xs leading-5 text-[#667b74]">
                Illustrative infrastructure visualization
              </p>
            </div>
          </div>
        </section>


        {/* Service offerings */}
        <div className="mt-20">
          <div className="mb-8 max-w-2xl">
            <p className="text-sm font-medium uppercase tracking-[0.24em] text-[#176454]">
              What we offer
            </p>

            <h2 className="mt-3 text-3xl font-semibold tracking-tight text-[#123f36] sm:text-4xl">
              Cold-chain solutions for businesses.
            </h2>
          </div>

          <div className="grid gap-6 lg:grid-cols-2">
            {offerings.map((item) => (
              <article
                key={item.number}
                className="group relative overflow-hidden rounded-[2rem] border border-[#dce9e2] bg-white/85 p-8 shadow-[0_10px_35px_rgba(18,78,65,0.04)] transition-all duration-300 hover:-translate-y-1 hover:border-[#a9cfc0] hover:shadow-[0_18px_40px_rgba(18,78,65,0.09)] sm:p-10"
              >
                {/* Decorative circle */}
                <div
                  aria-hidden="true"
                  className="pointer-events-none absolute -right-8 -top-8 h-32 w-32 rounded-full bg-[#e1eee8]/60 transition-colors duration-300 group-hover:bg-[#cfe5da]/80"
                />

                {/* Number and icon */}
                <div className="relative flex items-center justify-between">
                  <span className="text-sm font-medium tracking-widest text-[#176454]">
                    {item.number}
                  </span>

                  <div className="flex h-14 w-14 items-center justify-center rounded-full bg-[#e1eee8] text-[#176454] transition-all duration-300 group-hover:scale-110 group-hover:bg-[#cfe5da]">
                    <item.icon size={26} strokeWidth={1.6} />
                  </div>
                </div>

                <h3 className="relative mt-6 text-2xl font-semibold tracking-tight text-[#123f36] sm:text-3xl">
                  {item.title}
                </h3>

                <p className="relative mt-4 leading-7 text-[#536b65]">
                  {item.text}
                </p>

                <Link
                  href="/contact"
                  className="relative mt-7 inline-flex items-center gap-2 text-sm font-medium text-[#176454] transition-all duration-300 group-hover:gap-3"
                >
                  Enquire now <span>→</span>
                </Link>

                <div className="relative mt-8 h-1 w-10 rounded-full bg-[#176454]/70 transition-all duration-300 group-hover:w-16 group-hover:bg-[#176454]" />
              </article>
            ))}
          </div>
        </div>

        {/* Capacity note */}
        <p className="mt-8 max-w-4xl text-xs leading-6 text-[#667b74]">
          Capacity refers to the approximate facility volume, not a guarantee
          of immediately rentable space. Exact temperature specifications
          and products accepted are confirmed on enquiry.
        </p>
      </div>
    </section>
  );
}
