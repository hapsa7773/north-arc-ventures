"use client";

import { useState } from "react";
import type { FormEvent } from "react";

export default function Contact() {
  const [name, setName] = useState("");
  const [company, setCompany] = useState("");
  const [phone, setPhone] = useState("");
  const [email, setEmail] = useState("");
  const [interest, setInterest] = useState("Scoopsy / Bulk Orders");
  const [message, setMessage] = useState("");

  function submitEnquiry(event: FormEvent<HTMLFormElement>) {
    event.preventDefault();
    if (!phone.trim() && !email.trim()) {
      window.alert("Please provide at least one way to contact you.");
      return;
    }
    const body = [
      "Hello North Arc Ventures, I would like to enquire about:",
      `Name: ${name}`,
      company ? `Company / organization: ${company}` : "",
      phone ? `Phone / WhatsApp: ${phone}` : "",
      email ? `Email: ${email}` : "",
      `Interested in: ${interest}`,
      `Message: ${message}`,
    ].filter(Boolean).join("\n");
    window.location.href = `https://wa.me/919661149356?text=${encodeURIComponent(body)}`;
  }

  const fieldClass = "w-full border-b border-white/20 bg-transparent px-0 py-3 text-white outline-none placeholder:text-white/35 focus:border-white";
  const labelClass = "mb-2 block text-sm text-white/70";

  return (
    <section id="contact" className="bg-white py-24 sm:py-32">
      <div className="mx-auto w-[92%] max-w-7xl">
        <div className="grid gap-14 rounded-[2rem] bg-primary px-7 py-12 text-white sm:px-10 sm:py-14 lg:grid-cols-2 lg:gap-20 lg:px-16 lg:py-16">
          <div className="flex flex-col justify-between">
            <div>
              <p className="text-sm font-medium uppercase tracking-[0.28em] text-white/60">07 / Work With Us</p>
              <h1 className="mt-6 text-4xl font-semibold leading-tight tracking-tight sm:text-5xl lg:text-6xl">Let’s talk business.</h1>
              <p className="mt-7 max-w-md text-base leading-7 text-white/70">Planning a large event, exploring retail distribution, looking for frozen-storage space or sourcing frozen foods? We’re here to connect.</p>
              <h2 className="mt-10 text-xl font-semibold">Good businesses grow through great partnerships.</h2>
            </div>
            <div className="mt-10 space-y-4 text-sm text-white/70">
              <p><span className="block text-xs uppercase tracking-[0.18em] text-white/45">WhatsApp / Business enquiries</span><a href="https://wa.me/919661149356" className="mt-1 inline-block text-white hover:underline">+91 96611 49356 ↗</a></p>
              <p><span className="block text-xs uppercase tracking-[0.18em] text-white/45">Email</span><a href="mailto:northarcventures@gmail.com" className="mt-1 inline-block text-white hover:underline">northarcventures@gmail.com</a></p>
              <p><span className="block text-xs uppercase tracking-[0.18em] text-white/45">Based in</span><span className="mt-1 inline-block text-white">Jamshedpur, Jharkhand, India</span></p>
            </div>
          </div>
          <form onSubmit={submitEnquiry} className="space-y-6">
            <div><label htmlFor="name" className={labelClass}>Full name *</label><input id="name" required value={name} onChange={(e) => setName(e.target.value)} placeholder="Your full name" className={fieldClass} /></div>
            <div><label htmlFor="company" className={labelClass}>Company / organization</label><input id="company" value={company} onChange={(e) => setCompany(e.target.value)} placeholder="Company name (optional)" className={fieldClass} /></div>
            <div><label htmlFor="phone" className={labelClass}>Phone / WhatsApp</label><input id="phone" type="tel" value={phone} onChange={(e) => setPhone(e.target.value)} placeholder="Your phone number" className={fieldClass} /></div>
            <div><label htmlFor="email" className={labelClass}>Email address</label><input id="email" type="email" value={email} onChange={(e) => setEmail(e.target.value)} placeholder="you@company.com" className={fieldClass} /></div>
            <p className="-mt-3 text-xs text-white/55">Please provide at least one way to contact you.</p>
            <div><label htmlFor="interest" className={labelClass}>I’m interested in *</label><select id="interest" value={interest} onChange={(e) => setInterest(e.target.value)} className={`${fieldClass} [color-scheme:dark]`}><option>Scoopsy / Bulk Orders</option><option>Bliss / Retail & Distribution</option><option>Cold Storage / Rental</option><option>Frozen Foods / Trading</option><option>Supplier / Partnership</option><option>Other</option></select></div>
            <div><label htmlFor="message" className={labelClass}>Your message *</label><textarea id="message" required rows={4} value={message} onChange={(e) => setMessage(e.target.value)} placeholder="Tell us a little about your enquiry..." className={`${fieldClass} resize-none`} /></div>
            <button type="submit" className="rounded-full bg-white px-6 py-3 text-sm font-medium text-primary transition-transform duration-300 hover:scale-105">Continue to WhatsApp ↗</button>
            <p className="text-xs leading-5 text-white/45">This opens WhatsApp with a pre-filled message. Review and press Send there to deliver your enquiry; this site does not store form submissions.</p>
          </form>
        </div>
      </div>
    </section>
  );
}
