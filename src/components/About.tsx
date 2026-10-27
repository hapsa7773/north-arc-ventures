
import Link from "next/link";
import Image from "next/image";

const values = [
  {
    title: "Products",
    text: "We serve everyday needs through frozen desserts and selected frozen-food categories.",
  },
  {
    title: "Infrastructure",
    text: "We are developing cold-chain capabilities to support commercial frozen goods operations.",
  },
  {
    title: "Partnerships",
    text: "We value enduring relationships with customers, suppliers and business partners.",
  },
];

export default function About() {
  return (
    <section
      id="about"
      className="relative isolate overflow-hidden bg-[#eaf3ef] py-24 sm:py-32"
    >
      {/* Background building image */}
      <div
        className="pointer-events-none absolute inset-0 -z-20 bg-cover bg-center bg-no-repeat"
        style={{ backgroundImage: "url('/images/northarc-building.png')" }}
        aria-hidden="true"
      />

      {/* Soft green-white overlay */}
      <div
        className="pointer-events-none absolute inset-0 -z-10 bg-[#eaf3ef]/80"
        aria-hidden="true"
      />

      {/* About content card */}
      <div className="relative mx-auto grid w-[92%] max-w-7xl items-center gap-10 rounded-[2rem] border border-white/70 bg-white/90 p-5 shadow-[0_20px_60px_rgba(18,78,65,0.10)] backdrop-blur-sm sm:p-8 lg:grid-cols-2 lg:gap-16 lg:p-12">
        {/* Office image */}
        <div className="relative min-w-0 w-full">
          <div className="relative aspect-[5/4] w-full overflow-hidden rounded-[1.5rem] bg-[#dcebe4] shadow-lg">
            <Image
              src="/images/north-arc-office.png"
              alt="NorthArc Ventures office reception"
              fill
              priority
              sizes="(max-width: 1024px) 92vw, 50vw"
              className="object-cover object-center"
            />
          </div>

          <div className="pointer-events-none absolute -right-3 -top-3 h-20 w-20 rounded-full border-[10px] border-[#176454]/20" />
        </div>

        {/* About text */}
        <div className="min-w-0">
          <p className="text-sm font-medium uppercase tracking-[0.28em] text-[#176454]">
            Who We Are
          </p>

          <h2 className="mt-5 text-4xl font-semibold leading-tight tracking-tight text-[#123f36] sm:text-5xl">
            One company.
            <br />
            Many possibilities.
          </h2>

          <p className="mt-7 text-base leading-8 text-[#536b65]">
            NorthArc Ventures is a Jamshedpur-based enterprise developing
            businesses that address everyday demand and practical operating
            needs.
          </p>

          <p className="mt-4 text-base leading-8 text-[#536b65]">
            We begin with two complementary sectors: ice cream and frozen
            desserts, and cold-chain storage and frozen-food trading. Through
            our brands and operations, we aim to serve consumers, businesses
            and partners across our home market and beyond.
          </p>

          <p className="mt-4 text-base leading-8 text-[#536b65]">
            As NorthArc evolves, our ambition is to build distinctive
            businesses under one shared umbrella—grounded in quality,
            execution and enduring relationships.
          </p>

          {/* Values */}
          <div className="mt-8 space-y-5">
            {values.map((value) => (
              <div
                key={value.title}
                className="flex gap-4 border-b border-[#dce8e2] pb-5"
              >
                <span className="mt-2 h-2.5 w-2.5 shrink-0 rounded-full bg-[#176454]" />

                <div>
                  <h3 className="font-medium text-[#123f36]">
                    {value.title}
                  </h3>
                  <p className="mt-1 text-sm leading-6 text-[#536b65]">
                    {value.text}
                  </p>
                </div>
              </div>
            ))}
          </div>

          <Link
            href="/approach"
            className="mt-8 inline-flex items-center gap-2 text-sm font-medium text-[#176454] transition-all duration-300 hover:gap-3"
          >
            Our approach <span>→</span>
          </Link>
        </div>
      </div>
    </section>
  );
}
