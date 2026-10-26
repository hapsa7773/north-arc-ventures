"use client";

import { useEffect, useRef, useState } from "react";

export default function AtGlance() {
  const sectionRef = useRef<HTMLElement>(null);
  const [started, setStarted] = useState(false);
  const [verticals, setVerticals] = useState(0);
  const [brands, setBrands] = useState(0);
  const [capacity, setCapacity] = useState(0);

  useEffect(() => {
    const node = sectionRef.current;
    if (!node) return;
    const observer = new IntersectionObserver(([entry]) => {
      if (entry.isIntersecting) {
        setStarted(true);
        observer.disconnect();
      }
    }, { threshold: 0.25 });
    observer.observe(node);
    return () => observer.disconnect();
  }, []);

  useEffect(() => {
    if (!started) return;
    let frame = 0;
    let start: number | null = null;
    const duration = 1500;
    const animate = (now: number) => {
      if (start === null) start = now;
      const progress = Math.min((now - start) / duration, 1);
      const eased = 1 - Math.pow(1 - progress, 3);
      setVerticals(Math.round(2 * eased));
      setBrands(Math.round(2 * eased));
      setCapacity(Math.round(7000 * eased));
      if (progress < 1) frame = requestAnimationFrame(animate);
    };
    frame = requestAnimationFrame(animate);
    return () => cancelAnimationFrame(frame);
  }, [started]);

  const numberStyle = "text-[2.25rem] font-semibold leading-none tracking-[-0.045em] text-white sm:text-[2.75rem]";
  const labelStyle = "mt-4 text-[10px] font-semibold uppercase leading-5 tracking-[0.16em] text-white/65";

  return (
    <section ref={sectionRef} aria-labelledby="at-a-glance-title" className="w-full">
      <div className="flex items-center justify-between gap-4 bg-[#F7F5EF] px-[6%] py-5 text-[9px] font-semibold uppercase tracking-[0.2em] text-[#56756B] sm:px-[9.2%]">
        <div className="flex items-center gap-4"><span>Scroll to Discover</span><span className="h-px w-10 bg-[#B9C9C0] sm:w-14" /></div>
        <p id="at-a-glance-title">01 / NorthArc at a Glance</p>
      </div>
      <div className="grid grid-cols-1 divide-y divide-white/10 bg-[#06483E] px-[6%] sm:grid-cols-2 sm:px-[9.2%] sm:divide-y-0 sm:divide-x lg:grid-cols-4">
        <div className="py-8 sm:px-5 sm:py-10 lg:pl-0 lg:pr-7"><p className={numberStyle}>{String(verticals).padStart(2, "0")}</p><p className={labelStyle}>Core business verticals</p></div>
        <div className="py-8 sm:px-5 sm:py-10 lg:px-7"><p className={numberStyle}>{String(brands).padStart(2, "0")}</p><p className={labelStyle}>Frozen dessert brands</p></div>
        <div className="py-8 sm:px-5 sm:py-10 lg:px-7"><p className={numberStyle}>~{capacity.toLocaleString("en-IN")} <span className="text-base tracking-normal">CFT</span></p><p className={labelStyle}>Sub-zero storage capacity</p></div>
        <div className="py-8 sm:px-5 sm:py-10 lg:pl-7 lg:pr-0"><p className={`${numberStyle} transition-opacity duration-700 ${started ? "opacity-100" : "opacity-0"}`}>Jamshedpur</p><p className={labelStyle}>Our home &amp; operating base</p></div>
      </div>
    </section>
  );
}
