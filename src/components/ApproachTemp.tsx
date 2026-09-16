const steps = [
  {
    number: "01",
    title: "Identify",
    description:
      "We look for ideas, opportunities and spaces where meaningful brands can be built.",
  },
  {
    number: "02",
    title: "Build",
    description:
      "We turn strong ideas into distinctive brands with a clear identity and purpose.",
  },
  {
    number: "03",
    title: "Grow",
    description:
      "We focus on creating products, experiences and strategies that help brands move forward.",
  },
  {
    number: "04",
    title: "Scale",
    description:
      "We build foundations that allow promising businesses to grow sustainably over time.",
  },
];

export default function Approach() {
  return (
    <section id="approach" className="bg-white py-24 sm:py-32">
      <div className="mx-auto w-[92%] max-w-7xl">

        {/* Heading */}
        <div className="max-w-3xl">
          <p className="text-sm font-medium uppercase tracking-[0.28em] text-primary">
            Our Approach
          </p>

          <h2 className="mt-5 text-4xl font-semibold leading-tight tracking-tight sm:text-5xl">
            From an idea
            <br />
            to what&apos;s next.
          </h2>

          <p className="mt-6 max-w-2xl text-base leading-7 text-muted">
            We take a thoughtful, long-term approach to building businesses —
            from identifying opportunities to creating brands that are built
            to grow.
          </p>
        </div>

        {/* Steps */}
        <div className="mt-16 grid border-t border-border sm:grid-cols-2 lg:grid-cols-4">
          {steps.map((step, index) => (
            <div
              key={step.number}
              className={`group py-8 lg:px-8 ${
                index !== 0 ? "lg:border-l lg:border-border" : ""
              }`}
            >
              <span className="text-sm font-medium text-primary">
                {step.number}
              </span>

              <h3 className="mt-8 text-2xl font-semibold tracking-tight transition-transform duration-300 group-hover:translate-x-1">
                {step.title}
              </h3>

              <p className="mt-4 max-w-xs text-sm leading-7 text-muted">
                {step.description}
              </p>

              <div className="mt-8 h-px w-8 bg-primary transition-all duration-300 group-hover:w-16" />
            </div>
          ))}
        </div>

      </div>
    </section>
  );
}