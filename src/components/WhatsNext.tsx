import Link from "next/link";

export default function WhatsNext() {
  return (
    <section className="bg-background py-24 sm:py-32">
      <div className="mx-auto w-[92%] max-w-7xl">

        <div className="grid items-end gap-12 lg:grid-cols-2">

          <div>
            <p className="text-sm font-medium uppercase tracking-[0.28em] text-primary">
              What&apos;s Next
            </p>

            <h2 className="mt-5 text-4xl font-semibold leading-tight tracking-tight sm:text-5xl lg:text-6xl">
              The next chapter
              <br />
              is already taking shape.
            </h2>
          </div>

          <div>
            <p className="max-w-xl text-base leading-8 text-muted sm:text-lg">
              North Arc is designed to keep evolving. As new ideas, categories
              and opportunities emerge, we see them as possibilities to build
              something meaningful.
            </p>

            <Link
              href="#contact"
              className="mt-8 inline-flex items-center gap-2 rounded-full bg-primary px-6 py-3 text-sm font-medium text-white transition-all duration-300 hover:scale-105"
            >
              Start a Conversation
              <span>→</span>
            </Link>
          </div>

        </div>

        <div className="relative mt-16 overflow-hidden rounded-[2rem] bg-primary-light p-8 sm:p-12 lg:p-16">

          <div className="pointer-events-none absolute -right-16 -top-16 h-64 w-64 rounded-full border-[24px] border-primary/10" />

          <div className="relative">
            <p className="text-sm uppercase tracking-[0.25em] text-primary/60">
              Beyond Today
            </p>

            <div className="mt-8 grid gap-8 md:grid-cols-3">

              <div>
                <span className="text-3xl font-semibold text-primary">
                  01
                </span>

                <h3 className="mt-4 text-xl font-semibold">
                  New Ideas
                </h3>

                <p className="mt-2 text-sm leading-6 text-muted">
                  Exploring opportunities that have the potential to become
                  meaningful brands.
                </p>
              </div>

              <div>
                <span className="text-3xl font-semibold text-primary">
                  02
                </span>

                <h3 className="mt-4 text-xl font-semibold">
                  New Categories
                </h3>

                <p className="mt-2 text-sm leading-6 text-muted">
                  Looking beyond existing businesses and discovering new
                  spaces to build in.
                </p>
              </div>

              <div>
                <span className="text-3xl font-semibold text-primary">
                  03
                </span>

                <h3 className="mt-4 text-xl font-semibold">
                  New Possibilities
                </h3>

                <p className="mt-2 text-sm leading-6 text-muted">
                  Creating a portfolio that can grow and evolve over time.
                </p>
              </div>

            </div>
          </div>
        </div>

      </div>
    </section>
  );
}