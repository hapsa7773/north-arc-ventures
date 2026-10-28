
import {
  MapPin,
  ExternalLink,
  UsersRound,
  Building2,
  Handshake,
} from "lucide-react";

const steps = [
  {
    number: "01",
    title: "Customer-led thinking.",
    description:
      "We shape our products and services around real customer needs—not assumptions.",
    icon: UsersRound,
  },
  {
    number: "02",
    title: "Strong operating foundations.",
    description:
      "We invest attention in the systems, infrastructure and execution that keep businesses running.",
    icon: Building2,
  },
  {
    number: "03",
    title: "Partnerships built to last.",
    description:
      "We value meaningful relationships with suppliers, customers, retailers and business partners.",
    icon: Handshake,
  },
];

export default function Approach() {
  return (
    <section
      id="approach"
      className="relative isolate overflow-hidden bg-gradient-to-br from-[#edf5f1] via-[#f8faf8] to-[#e1eee8] py-24 sm:py-32"
    >
      {/* Background decorations */}
      <div
        aria-hidden="true"
        className="pointer-events-none absolute -left-32 top-20 -z-10 h-80 w-80 rounded-full bg-[#b9d8ca]/40 blur-3xl"
      />
      <div
        aria-hidden="true"
        className="pointer-events-none absolute -right-32 top-[35rem] -z-10 h-96 w-96 rounded-full bg-[#9fcbbb]/30 blur-3xl"
      />
      <div
        aria-hidden="true"
        className="pointer-events-none absolute right-[10%] top-32 -z-10 h-28 w-28 rounded-full border border-[#176454]/15"
      />

      <div className="mx-auto w-[92%] max-w-7xl">
        {/* Heading */}
        <div className="max-w-3xl">
          <p className="text-sm font-medium uppercase tracking-[0.28em] text-[#176454]">
            04 / How We Work
          </p>

          <h1 className="mt-5 text-4xl font-semibold leading-tight tracking-tight text-[#123f36] sm:text-5xl lg:text-6xl">
            Built on things that matter.
          </h1>

          <p className="mt-6 max-w-2xl text-base leading-8 text-[#536b65] sm:text-lg">
            Good businesses are built with focus, consistency and people who
            believe in the work.
          </p>
        </div>

        {/* Three principles */}
        <div className="mt-14 grid gap-5 md:grid-cols-2 lg:grid-cols-3">
          {steps.map((step) => (
            <article
              key={step.number}
              className="group relative overflow-hidden rounded-[1.75rem] border border-white/80 bg-white/80 p-7 shadow-[0_12px_35px_rgba(18,78,65,0.05)] backdrop-blur-sm transition-all duration-300 hover:-translate-y-1 hover:border-[#b9d8ca] hover:bg-white hover:shadow-[0_20px_45px_rgba(18,78,65,0.10)] sm:p-9"
            >
              <div
                aria-hidden="true"
                className="pointer-events-none absolute -right-5 -top-5 h-28 w-28 rounded-full bg-[#e1eee8]/70 transition-colors duration-300 group-hover:bg-[#cfe5da]/80"
              />

              <div className="relative">
                <div className="flex items-center justify-between">
                  <span className="text-sm font-medium tracking-widest text-[#176454]">
                    {step.number}
                  </span>

                  <div className="flex h-14 w-14 items-center justify-center rounded-full bg-[#e1eee8] text-[#176454] transition-all duration-300 group-hover:scale-110 group-hover:bg-[#cfe5da]">
                    <step.icon size={27} strokeWidth={1.6} />
                  </div>
                </div>

                <h2 className="mt-8 text-xl font-semibold leading-snug tracking-tight text-[#123f36] sm:text-2xl">
                  {step.title}
                </h2>

                <p className="mt-4 text-sm leading-7 text-[#536b65] sm:text-base">
                  {step.description}
                </p>

                <div className="mt-8 h-1 w-10 rounded-full bg-[#176454]/70 transition-all duration-300 group-hover:w-16 group-hover:bg-[#176454]" />
              </div>
            </article>
          ))}
        </div>

        {/* Our Roots - Jamshedpur Map */}
        <div className="relative mt-16 overflow-hidden rounded-[2rem] border border-white/80 bg-white/75 shadow-[0_18px_45px_rgba(18,78,65,0.08)] backdrop-blur-sm sm:mt-20">
          <div className="grid lg:grid-cols-[0.85fr_1.15fr]">
            {/* Location information */}
            <div className="flex flex-col justify-center p-7 sm:p-10 lg:p-12">
              <p className="text-sm font-medium uppercase tracking-[0.28em] text-[#176454]">
                05 / Our Roots
              </p>

              <h2 className="mt-5 text-4xl font-semibold leading-tight tracking-tight text-[#123f36] sm:text-5xl">
                Our home is Jamshedpur.
              </h2>

              <p className="mt-6 text-base leading-8 text-[#536b65]">
                Based in Jharkhand’s industrial heartland, NorthArc serves
                Jamshedpur and surrounding markets. We’re building strong
                regional foundations with the ambition to grow thoughtfully
                over time.
              </p>

              <div className="mt-6 inline-flex w-fit items-center gap-2 rounded-full border border-[#c9dfd4] bg-[#edf5f1] px-4 py-3 text-xs font-medium uppercase tracking-wider text-[#176454] sm:text-sm">
                <MapPin size={17} />
                Jamshedpur · Jharkhand · India
              </div>

              <a
                href="https://www.google.com/maps/search/?api=1&query=Jamshedpur%2C%20Jharkhand%2C%20India"
                target="_blank"
                rel="noreferrer"
                className="mt-7 inline-flex w-fit items-center gap-2 rounded-full bg-[#12584b] px-5 py-3 text-sm font-medium text-white transition-all hover:-translate-y-0.5 hover:bg-[#0b4037]"
              >
                Explore on Google Maps
                <ExternalLink size={15} />
              </a>
            </div>

            {/* Interactive Google Map */}
            <div className="relative min-h-[320px] overflow-hidden bg-[#e1eee8] sm:min-h-[400px] lg:min-h-[470px]">
              <iframe
                title="Map showing Jamshedpur, Jharkhand"
                src="https://maps.google.com/maps?q=Jamshedpur%2C%20Jharkhand%2C%20India&z=12&output=embed"
                width="100%"
                height="100%"
                className="absolute inset-0 h-full min-h-[320px] w-full border-0"
                loading="lazy"
                referrerPolicy="no-referrer-when-downgrade"
                allowFullScreen
              />

              <div
                aria-hidden="true"
                className="pointer-events-none absolute inset-0 ring-1 ring-inset ring-[#176454]/10"
              />
            </div>
          </div>
        </div>

        {/* Looking Ahead */}
        <div className="relative mt-8 overflow-hidden rounded-[2rem] bg-gradient-to-br from-[#12584b] to-[#0b4037] px-7 py-10 text-white shadow-[0_20px_50px_rgba(18,78,65,0.16)] sm:px-10 sm:py-12 lg:px-14 lg:py-16">
          <div
            aria-hidden="true"
            className="pointer-events-none absolute -right-16 -top-16 h-72 w-72 rounded-full border-[32px] border-white/[0.06]"
          />

          <div className="relative">
            <p className="text-sm font-medium uppercase tracking-[0.25em] text-white/60">
              06 / Looking Ahead
            </p>

            <h2 className="mt-5 max-w-3xl text-3xl font-semibold leading-tight tracking-tight sm:text-4xl lg:text-5xl">
              Our first chapter is just the beginning.
            </h2>

            <p className="mt-5 max-w-2xl text-base leading-8 text-white/75">
              Frozen desserts and cold-chain solutions are where we start.
              The future of NorthArc will be shaped by opportunities to build,
              operate and grow businesses that create lasting value.
            </p>

            <a
              href="/contact"
              className="mt-8 inline-flex items-center gap-2 rounded-full bg-white px-6 py-3 text-sm font-medium text-[#12584b] transition-all duration-300 hover:-translate-y-0.5 hover:shadow-lg"
            >
              Let’s build together <span>↗</span>
            </a>
          </div>
        </div>
      </div>
    </section>
  );
}
