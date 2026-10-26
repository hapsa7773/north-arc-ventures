import Image from "next/image";
import Link from "next/link";

export default function HomeBusinesses() {
  return (
    <section className="bg-[#F7F5EF] py-20 sm:py-28">
      <div className="mx-auto w-[88%] max-w-7xl">
        <div className="flex flex-col justify-between gap-7 md:flex-row md:items-end">
          <div className="max-w-2xl">
            <p className="text-[10px] font-semibold uppercase tracking-[0.22em] text-[#527469]">Explore our businesses</p>
            <h2 className="mt-5 text-4xl font-medium leading-[1.08] tracking-[-0.04em] text-[#173F36] sm:text-5xl">Different businesses.<br />One shared ambition.</h2>
            <p className="mt-5 max-w-xl text-base leading-7 text-[#62736C]">From frozen desserts to cold-chain infrastructure, we build around real needs and lasting relationships.</p>
          </div>
          <Link href="/businesses" className="inline-flex w-fit items-center gap-3 border-b border-[#527469]/40 pb-2 text-sm font-semibold text-[#174B40] transition-colors hover:border-[#174B40]">Explore our businesses <span aria-hidden="true">↗</span></Link>
        </div>
        <div className="mt-12 grid gap-5 md:grid-cols-2">
          <Link href="/businesses" className="group relative min-h-[250px] overflow-hidden bg-[#E7E6D9] sm:min-h-[320px]">
            <Image src="/images/scoopsy-illustration.svg" alt="Illustration representing Scoopsy frozen desserts" fill sizes="(max-width: 768px) 100vw, 50vw" className="object-contain p-5 transition-transform duration-700 group-hover:scale-[1.03]" />
            <div className="absolute inset-x-0 bottom-0 bg-gradient-to-t from-[#173F36]/90 via-[#173F36]/35 to-transparent px-7 pb-6 pt-16 text-white"><p className="text-[10px] uppercase tracking-[0.2em] text-white/70">Vertical 01</p><h3 className="mt-2 text-2xl font-medium">Frozen desserts</h3></div>
          </Link>
          <Link href="/cold-chain" className="group relative min-h-[250px] overflow-hidden bg-[#E7E6D9] sm:min-h-[320px]">
            <Image src="/images/cold-storage-illustration.svg" alt="Illustration representing cold storage and frozen produce" fill sizes="(max-width: 768px) 100vw, 50vw" className="object-contain p-5 transition-transform duration-700 group-hover:scale-[1.03]" />
            <div className="absolute inset-x-0 bottom-0 bg-gradient-to-t from-[#173F36]/90 via-[#173F36]/35 to-transparent px-7 pb-6 pt-16 text-white"><p className="text-[10px] uppercase tracking-[0.2em] text-white/70">Vertical 02</p><h3 className="mt-2 text-2xl font-medium">Cold chain &amp; frozen foods</h3></div>
          </Link>
        </div>
      </div>
    </section>
  );
}
