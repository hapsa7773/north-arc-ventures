import Link from "next/link";
import Image from "next/image";

const offerings = [
  { number: "01", title: "Frozen storage & space rental", text: "Sub-zero cold-storage space for businesses handling frozen goods, subject to product suitability, operating conditions and availability." },
  { number: "02", title: "Frozen-food trading", text: "Selected frozen-food categories including green peas, sweet corn, mushrooms and peppers for commercial buyers." },
];

export default function ColdChain() {
  return (
    <section className="bg-background py-28 sm:py-32">
      <div className="mx-auto w-[92%] max-w-7xl">
        <div className="grid items-center gap-12 lg:grid-cols-2 lg:gap-20">
          <div>
            <p className="text-sm font-medium uppercase tracking-[0.28em] text-primary">03 / Cold Chain & Frozen Foods</p>
            <h1 className="mt-5 text-4xl font-semibold leading-tight tracking-tight sm:text-5xl lg:text-6xl">The infrastructure behind the everyday.</h1>
            <p className="mt-7 max-w-xl text-base leading-8 text-muted">From dependable frozen storage to sourcing select frozen produce, we’re developing the capabilities that help commercial food supply move forward.</p>
          </div>
          <div className="relative overflow-hidden rounded-[2rem] bg-primary-light">
            <div className="relative aspect-[4/3]">
              <Image src="/images/icecream-bg.jpg" alt="Frozen food and cold-chain business" fill sizes="(max-width: 1024px) 100vw, 50vw" className="object-cover" />
              <div className="absolute inset-0 bg-primary/20" />
            </div>
          </div>
        </div>
        <div className="mt-12 grid gap-6 md:grid-cols-2">
          <div className="rounded-[2rem] bg-primary px-8 py-10 text-white sm:px-10 sm:py-12">
            <p className="text-xs uppercase tracking-[0.22em] text-white/60">Approximate sub-zero storage capacity</p>
            <p className="mt-4 text-6xl font-semibold tracking-tight sm:text-7xl">7,000 <span className="text-2xl font-medium">CFT</span></p>
            <p className="mt-5 text-base leading-7 text-white/70">Frozen-storage capacity in Jamshedpur, Jharkhand.</p>
          </div>
          <div className="flex flex-col justify-center rounded-[2rem] border border-border bg-white p-8 sm:p-10">
            <p className="text-sm font-medium uppercase tracking-[0.22em] text-primary">Built for business needs</p>
            <p className="mt-4 text-base leading-8 text-muted">Cold-chain storage and frozen-food trading support commercial buyers with practical, enquiry-led solutions.</p>
          </div>
        </div>
        <div className="mt-16 grid gap-6 lg:grid-cols-2">
          {offerings.map((item) => <article key={item.number} className="rounded-[2rem] border border-border bg-white p-8 sm:p-10"><p className="text-sm font-medium text-primary">{item.number} ↗</p><h2 className="mt-5 text-2xl font-semibold tracking-tight sm:text-3xl">{item.title}</h2><p className="mt-4 leading-7 text-muted">{item.text}</p><Link href="/contact" className="mt-7 inline-flex items-center gap-2 text-sm font-medium text-primary transition-all hover:gap-3">Enquire now <span>→</span></Link></article>)}
        </div>
        <p className="mt-8 max-w-4xl text-xs leading-6 text-muted">Capacity refers to the approximate facility volume, not a guarantee of immediately rentable space. Exact temperature specifications and products accepted are confirmed on enquiry.</p>
      </div>
    </section>
  );
}
