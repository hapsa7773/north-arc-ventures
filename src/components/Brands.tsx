import Image from "next/image";
import Link from "next/link";

const brands = [
  {
    number: "01",
    name: "Scoopsy",
    category: "Bulk & Foodservice",
    description:
      "Bulk, family and party-sized ice cream packs for caterers, hotels, restaurants, events and institutional buyers. Convenient formats designed around professional food-service needs."
  },
  {
    number: "02",
    name: "Bliss",
    category: "Consumer Retail",
    description:
      "Ice cream candies, kulfis, choco bars and other individual frozen treats for neighborhood retail, distributors and the little moments people look forward to."
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
            Our Businesses
          </p>

          <h2 className="mt-5 text-4xl font-semibold leading-tight tracking-tight sm:text-5xl">
            Different businesses.
            <br />
            One shared ambition.
          </h2>

          <p className="mt-6 max-w-xl text-base leading-7 text-muted">
            Our portfolio brings together focused offerings across food and the cold chain—serving everyone from catering professionals to local retail partners.
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
              <div className="relative aspect-[16/10] overflow-hidden bg-[#E7E6D9]">
                <Image
                  src={brand.name === "Scoopsy" ? "/images/scoopsy-illustration.svg" : "/images/bliss-illustration.svg"}
                  alt={brand.name === "Scoopsy" ? "Illustration of a Scoopsy multi-serve ice-cream tub" : "Illustration of Bliss frozen treats"}
                  fill
                  sizes="(max-width: 1024px) 100vw, 50vw"
                  className="object-contain p-5 transition-transform duration-700 group-hover:scale-[1.03]"
                />
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
                  href="/contact"
                  className="mt-7 inline-flex items-center gap-2 text-sm font-medium text-primary transition-all duration-300 group-hover:gap-3"
                >
                  Enquire about this business
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
                More possibilities are on the horizon.
              </h3>

              <p className="mt-4 max-w-xl leading-7 text-white/70">
                Frozen desserts and cold-chain solutions are where we start, with room to grow thoughtfully over time.
              </p>
            </div>

            <Link
              href="/contact"
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