export default function Contact() {
  return (
    <section id="contact" className="bg-white py-24 sm:py-32">
      <div className="mx-auto w-[92%] max-w-7xl">

        <div className="grid gap-14 rounded-[2rem] bg-primary px-7 py-12 text-white sm:px-10 sm:py-14 lg:grid-cols-2 lg:gap-20 lg:px-16 lg:py-16">

          {/* Left */}
          <div className="flex flex-col justify-between">
            <div>
              <p className="text-sm font-medium uppercase tracking-[0.28em] text-white/60">
                Let&apos;s Connect
              </p>

              <h2 className="mt-6 text-4xl font-semibold leading-tight tracking-tight sm:text-5xl lg:text-6xl">
                Have an idea?
                <br />
                Let&apos;s build
                <br />
                what&apos;s next.
              </h2>

              <p className="mt-7 max-w-md text-base leading-7 text-white/70">
                We&apos;re open to conversations around businesses, brands,
                partnerships and new opportunities.
              </p>
            </div>

            <div className="mt-10 text-sm text-white/60">
              <p>Business enquiries</p>
              <p className="mt-2 text-white">
                hello@northarcventures.com
              </p>
            </div>
          </div>

          {/* Form */}
          <form className="space-y-6">

            <div>
              <label
                htmlFor="name"
                className="mb-2 block text-sm text-white/70"
              >
                Name
              </label>

              <input
                id="name"
                type="text"
                placeholder="Your name"
                className="w-full border-b border-white/20 bg-transparent px-0 py-3 text-white outline-none placeholder:text-white/35 focus:border-white"
              />
            </div>

            <div>
              <label
                htmlFor="email"
                className="mb-2 block text-sm text-white/70"
              >
                Email
              </label>

              <input
                id="email"
                type="email"
                placeholder="you@example.com"
                className="w-full border-b border-white/20 bg-transparent px-0 py-3 text-white outline-none placeholder:text-white/35 focus:border-white"
              />
            </div>

            <div>
              <label
                htmlFor="message"
                className="mb-2 block text-sm text-white/70"
              >
                Message
              </label>

              <textarea
                id="message"
                rows={4}
                placeholder="Tell us a little about your idea..."
                className="w-full resize-none border-b border-white/20 bg-transparent px-0 py-3 text-white outline-none placeholder:text-white/35 focus:border-white"
              />
            </div>

            <button
              type="submit"
              className="rounded-full bg-white px-6 py-3 text-sm font-medium text-primary transition-transform duration-300 hover:scale-105"
            >
              Send Enquiry →
            </button>

          </form>

        </div>

      </div>
    </section>
  );
}