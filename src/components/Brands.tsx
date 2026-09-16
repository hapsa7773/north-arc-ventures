import Image from "next/image";
import Link from "next/link";

const brands = [
  {
    number: "01",
    name: "Brand One",
    category: "Ice Cream",
    description:
      "A growing consumer brand built with a focus on product, experience and everyday delight.",
  },
  {
    number: "02",
    name: "Brand Two",
    category: "Ice Cream",
    description:
      "Another brand in the North Arc portfolio, built to create memorable products and experiences.",
  },
];

export default function Brands() {
  return (
    <section
      id="brands"
      className="relative overflow-hidden py-24 sm:py-32"
    >
      {/* =========================
          BACKGROUND IMAGE
         ========================= */}
      <div className="pointer-events-none absolute inset-0 -z-10">
        <Image
          src="/images/icecream-bg.jpg"
          alt=""
          fill
          sizes="100vw"
          className="object-cover"
        />

        {/* Soft white overlay */}
        <div className="absolute inset-0 bg-white/40" />

        {/* Green tint */}
        <div className="absolute inset-0 bg-primary/[0.04]" />
      </div>

      <div className="mx-auto w-[92%] max-w-7xl">

        {/* Section Intro */}
        <div className="max-w-2xl">
          <p className="text-sm font-medium uppercase tracking-[0.28em] text-primary">
            Our Brands
          </p>

          <h2 className="mt-5 text-4xl font-semibold leading-tight tracking-tight sm:text-5xl">
            Brands we build,
            <br />
            grow &amp; take forward.
          </h2>

          <p className="mt-6 max-w-xl text-base leading-7 text-muted">
            North Arc Ventures brings together brands with the ambition to
            create meaningful products and lasting businesses.
          </p>
        </div>

        {/* Brand Cards */}
        <div className="mt-16 grid gap-6 lg:grid-cols-2">

          {brands.map((brand) => (
            <article
              key={brand.number}
              className="group overflow-hidden rounded-[2rem] border border-white/70 bg-white/80 shadow-sm backdrop-blur-md transition-all duration-500 hover:-translate-y-1 hover:shadow-xl"
            >
              {/* Brand Visual */}
              <div className="relative aspect-[16/10] overflow-hidden bg-primary-light">
                <div className="absolute inset-0 flex items-center justify-center">
                  <span className="text-6xl font-semibold text-primary/20">
                    {brand.number}
                  </span>
                </div>

                <div className="absolute right-6 top-6 rounded-full bg-white/90 px-4 py-2 text-xs font-medium text-primary shadow-sm backdrop-blur-sm">
                  {brand.category}
                </div>
              </div>

              {/* Content */}
              <div className="p-7 sm:p-9">
                <p className="text-sm text-muted">
                  {brand.number}
                </p>

                <h3 className="mt-3 text-3xl font-semibold tracking-tight">
                  {brand.name}
                </h3>

                <p className="mt-4 max-w-lg leading-7 text-muted">
                  {brand.description}
                </p>

                <Link
                  href="#contact"
                  className="mt-7 inline-flex items-center gap-2 text-sm font-medium text-primary transition-all duration-300 group-hover:gap-3"
                >
                  Explore Brand
                  <span aria-hidden="true">→</span>
                </Link>
              </div>
            </article>
          ))}

        </div>

        {/* Future Brands */}
        <div className="mt-6 rounded-[2rem] bg-primary/95 px-7 py-10 text-white shadow-lg backdrop-blur-sm sm:px-10 sm:py-12">
          <p className="text-sm uppercase tracking-[0.25em] text-white/60">
            What&apos;s next
          </p>

          <div className="mt-5 flex flex-col justify-between gap-6 md:flex-row md:items-end">
            <div>
              <h3 className="text-3xl font-semibold sm:text-4xl">
                More brands are on the horizon.
              </h3>

              <p className="mt-4 max-w-xl leading-7 text-white/70">
                North Arc is built to grow beyond what exists today.
              </p>
            </div>

            <Link
              href="#contact"
              className="w-fit rounded-full bg-white px-6 py-3 text-sm font-medium text-primary transition-transform duration-300 hover:scale-105"
            >
              Work With Us
            </Link>
          </div>
        </div>

      </div>
    </section>
  );
}