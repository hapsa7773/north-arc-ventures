
"use client";

import { useEffect, useState } from "react";

type Festival = {
  name: string;
  message: string;
  start: string;
  end: string;
};

const FESTIVALS: Festival[] = [
  {
    name: "diwali",
    message: "Wishing You a Bright & Prosperous Diwali",
    start: "2026-11-08",
    end: "2026-11-10",
  },
];

function getFestival(date: Date): Festival | null {
  const current = [
    date.getFullYear(),
    String(date.getMonth() + 1).padStart(2, "0"),
    String(date.getDate()).padStart(2, "0"),
  ].join("-");

  return (
    FESTIVALS.find(
      (festival) => current >= festival.start && current <= festival.end
    ) ?? null
  );
}

export default function FestivalTheme() {
  const [festival, setFestival] = useState<Festival | null>(null);

  useEffect(() => {
    const updateTheme = () => setFestival(getFestival(new Date()));

    updateTheme();

    // Recheck periodically so the theme switches without a redeployment.
    const timer = window.setInterval(updateTheme, 60_000);

    return () => window.clearInterval(timer);
  }, []);

  useEffect(() => {
    if (festival?.name) {
      document.documentElement.dataset.festival = festival.name;
    } else {
      delete document.documentElement.dataset.festival;
    }

    return () => {
      delete document.documentElement.dataset.festival;
    };
  }, [festival]);

  if (!festival) return null;

  return (
    <aside
      className="festival-banner"
      aria-label={`${festival.name} celebration`}
    >
      <span className="festival-banner__ornament" aria-hidden="true">
        ✨
      </span>
      <p>{festival.message}</p>
      <span className="festival-banner__ornament" aria-hidden="true">
        🪔
      </span>
    </aside>
  );
}
