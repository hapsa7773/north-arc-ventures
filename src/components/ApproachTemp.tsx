
const steps = [
  {
    number: "01",
    title: "Customer-led thinking.",
    description:
      "We shape our products and services around real customer needs—not assumptions.",
  },
  {
    number: "02",
    title: "Strong operating foundations.",
    description:
      "We invest attention in the systems, infrastructure and execution that keep businesses running.",
  },
  {
    number: "03",
    title: "Partnerships built to last.",
    description:
      "We value meaningful relationships with suppliers, customers, retailers and business partners.",
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

        {/* Principles */}
        <div className="mt-14 grid gap-5 md:grid-cols-2 lg:grid-cols-3">
          {steps.map((step) => (
            <article
              key={step.number}
              className="group relative overflow-hidden rounded-[1.75rem] border border-white/80 bg-white/80 p-7 shadow-[0_12px_35px_rgba(18,78,65,0.05)] backdrop-blur-sm transition-all duration-300 hover:-translate-y-1 hover:border-[#b9d8ca] hover:bg-white hover:shadow-[0_20px_45px_rgba(18,78,65,0.10)] sm:p-9"
            >
              <div
                aria-hidden="true"
                className="pointer-events-none absolute -right-5 -top-5 h-28 w-28 rounded-full bg-[#e1eee8]/70 transition-colors group-hover:bg-[#cfe5da]/80"
              />

              <div className="relative">
                <div className="flex items-center justify-between">
                  <span className="text-sm font-medium tracking-widest text-[#176454]">
                    {step.number}
                  </span>

                  <span className="text-lg text-[#176454] transition-transform duration-300 group-hover:-translate-y-1 group-hover:translate-x-1">
                    ↗
                  </span>
                </div>

                <h2 className="mt-10 text-xl font-semibold leading-snug tracking-tight text-[#123f36] sm:text-2xl">
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

        {/* Our Roots */}
        <div className="relative mt-16 overflow-hidden rounded-[2rem] border border-white/70 bg-gradient-to-br from-[#dcece4] via-[#edf5f1] to-white p-7 shadow-[0_18px_45px_rgba(18,78,65,0.07)] sm:p-10 lg:mt-20 lg:p-14">
          <div
            aria-hidden="true"
            className="pointer-events-none absolute -right-16 -top-16 h-64 w-64 rounded-full border-[30px] border-[#176454]/[0.05]"
          />

          <div className="relative grid items-center gap-8 lg:grid-cols-2 lg:gap-16">
            <div>
              <p className="text-sm font-medium uppercase tracking-[0.28em] text-[#176454]">
                05 / Our Roots
              </p>

              <h2 className="mt-5 text-4xl font-semibold leading-tight tracking-tight text-[#123f36] sm:text-5xl">
                Our home is Jamshedpur.
              </h2>

              <div className="mt-7 h-1 w-16 rounded-full bg-[#176454]" />
            </div>

            <div>
              <p className="text-base leading-8 text-[#536b65]">
                Based in Jharkhand’s industrial heartland, NorthArc serves
                Jamshedpur and surrounding markets. We’re building strong
                regional foundations with the ambition to grow thoughtfully
                over time.
              </p>

              <p className="mt-7 inline-flex rounded-full border border-[#c9dfd4] bg-white/80 px-5 py-3 text-xs font-medium uppercase tracking-[0.16em] text-[#176454] sm:text-sm">
                Jamshedpur · Jharkhand · India
              </p>
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
