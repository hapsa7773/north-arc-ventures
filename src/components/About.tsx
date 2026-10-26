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
    <section id="about" className="bg-background py-24 sm:py-32">
      <div className="mx-auto grid w-[92%] max-w-7xl items-center gap-14 lg:grid-cols-2 lg:gap-20">

        {/* Visual */}
        <div className="relative">
          <div className="relative aspect-[4/5] overflow-hidden rounded-[2rem] bg-primary-light">
           <Image
            src="/about-businesses.png"
            alt="Scoopsy frozen desserts and cold-chain business"
            width={700}
            height={500}
            className="h-full w-full object-cover"
            />
          </div>

          <div className="absolute -right-5 -top-5 h-24 w-24 rounded-full border-[12px] border-primary/15" />
        </div>

        {/* Content */}
        <div className="max-w-xl">
          <p className="text-sm font-medium uppercase tracking-[0.28em] text-primary">
            Who We Are
          </p>

          <h2 className="mt-5 text-4xl font-semibold leading-tight tracking-tight sm:text-5xl">
            One company.
            <br />
            Many possibilities.
          </h2>

          <p className="mt-7 text-base leading-8 text-muted">
            NorthArc Ventures is a Jamshedpur-based enterprise developing businesses that address everyday demand and practical operating needs.
          </p>

          <p className="mt-4 text-base leading-8 text-muted">
            We begin with two complementary sectors: ice cream and frozen desserts, and cold-chain storage and frozen-food trading. Through our brands and operations, we aim to serve consumers, businesses and partners across our home market and beyond.
          </p>

          <p className="mt-4 text-base leading-8 text-muted">
            As NorthArc evolves, our ambition is to build distinctive businesses under one shared umbrella—grounded in quality, execution and enduring relationships.
          </p>

          {/* Values */}
          <div className="mt-10 space-y-6">
            {values.map((value) => (
              <div
                key={value.title}
                className="flex gap-4 border-b border-border pb-5"
              >
                <span className="mt-1.5 h-2.5 w-2.5 shrink-0 rounded-full bg-primary" />

                <div>
                  <h3 className="font-medium">{value.title}</h3>
                  <p className="mt-1 text-sm leading-6 text-muted">
                    {value.text}
                  </p>
                </div>
              </div>
            ))}
          </div>

          <Link
            href="/approach"
            className="mt-9 inline-flex items-center gap-2 text-sm font-medium text-primary transition-all duration-300 hover:gap-3"
          >
            Our approach
            <span>→</span>
          </Link>
        </div>

      </div>
    </section>
  );
}