import ical from "ical";

export async function fetchICal(url: string) {
  const res = await fetch(url, {
    headers: {
      "User-Agent": "Mozilla/5.0",
    },
  });

  if (!res.ok) {
    throw new Error("Impossible de charger l'iCal");
  }

  const text = await res.text();

  const data = ical.parseICS(text);

  return Object.values(data);
}