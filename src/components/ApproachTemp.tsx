const steps = [
  { number: "01", title: "Customer-led thinking.", description: "We shape our products and services around real customer needs—not assumptions." },
  { number: "02", title: "Strong operating foundations.", description: "We invest attention in the systems, infrastructure and execution that keep businesses running." },
  { number: "03", title: "Partnerships built to last.", description: "We value meaningful relationships with suppliers, customers, retailers and business partners." },
];

export default function Approach() {
  return (
    <section id="approach" className="bg-white py-24 sm:py-32">
      <div className="mx-auto w-[92%] max-w-7xl">
        <div className="max-w-3xl">
          <p className="text-sm font-medium uppercase tracking-[0.28em] text-primary">04 / How We Work</p>
          <h1 className="mt-5 text-4xl font-semibold leading-tight tracking-tight sm:text-5xl">Built on things that matter.</h1>
          <p className="mt-6 max-w-2xl text-base leading-7 text-muted">Good businesses are built with focus, consistency and people who believe in the work.</p>
        </div>
        <div className="mt-16 grid border-t border-border sm:grid-cols-2 lg:grid-cols-3">
          {steps.map((step, index) => (
            <div key={step.number} className={`group py-8 lg:px-8 ${index !== 0 ? "lg:border-l lg:border-border" : ""}`}>
              <span className="text-sm font-medium text-primary">{step.number} ↗</span>
              <h2 className="mt-8 text-2xl font-semibold tracking-tight transition-transform duration-300 group-hover:translate-x-1">{step.title}</h2>
              <p className="mt-4 max-w-xs text-sm leading-7 text-muted">{step.description}</p>
              <div className="mt-8 h-px w-8 bg-primary transition-all duration-300 group-hover:w-16" />
            </div>
          ))}
        </div>
        <div className="mt-20 grid items-center gap-10 rounded-[2rem] bg-primary-light p-8 sm:p-12 lg:grid-cols-2 lg:p-16">
          <div>
            <p className="text-sm font-medium uppercase tracking-[0.28em] text-primary">05 / Our Roots</p>
            <h2 className="mt-5 text-4xl font-semibold leading-tight tracking-tight sm:text-5xl">Our home is Jamshedpur.</h2>
          </div>
          <div>
            <p className="text-base leading-8 text-muted">Based in Jharkhand’s industrial heartland, NorthArc serves Jamshedpur and surrounding markets. We’re building strong regional foundations with the ambition to grow thoughtfully over time.</p>
            <p className="mt-6 text-sm font-medium uppercase tracking-[0.18em] text-primary">Jamshedpur · Jharkhand · India</p>
          </div>
        </div>
        <div className="mt-12 rounded-[2rem] bg-primary px-8 py-10 text-white sm:px-12 sm:py-14">
          <p className="text-sm uppercase tracking-[0.25em] text-white/60">06 / Looking Ahead</p>
          <h2 className="mt-5 max-w-3xl text-3xl font-semibold leading-tight sm:text-4xl">Our first chapter is just the beginning.</h2>
          <p className="mt-5 max-w-2xl leading-7 text-white/70">Frozen desserts and cold-chain solutions are where we start. The future of NorthArc will be shaped by opportunities to build, operate and grow businesses that create lasting value.</p>
          <a href="/contact" className="mt-7 inline-flex rounded-full bg-white px-6 py-3 text-sm font-medium text-primary transition-transform hover:scale-105">Let’s build together ↗</a>
        </div>
      </div>
    </section>
  );
}
