import Link from "next/link";
import Image from "next/image";

const values = [
  {
    title: "Purpose",
    text: "We start with a clear reason to build.",
  },
  {
    title: "Perspective",
    text: "We look beyond today to what can come next.",
  },
  {
    title: "Growth",
    text: "We build with the ambition to create lasting businesses.",
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
              src="/images/about.jpg"
              alt="North Arc Ventures"
              fill
              sizes="(max-width: 1024px) 100vw, 50vw"
              className="object-cover"
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
            Building brands
            <br />
            for what&apos;s next.
          </h2>

          <p className="mt-7 text-base leading-8 text-muted">
            North Arc Ventures is a growing business company focused on
            building, developing and growing brands with long-term potential.
          </p>

          <p className="mt-4 text-base leading-8 text-muted">
            We believe strong businesses are built by combining clear
            thinking, meaningful ideas and the willingness to keep moving
            forward.
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
            href="#approach"
            className="mt-9 inline-flex items-center gap-2 text-sm font-medium text-primary transition-all duration-300 hover:gap-3"
          >
            Know More
            <span>→</span>
          </Link>
        </div>

      </div>
    </section>
  );
}