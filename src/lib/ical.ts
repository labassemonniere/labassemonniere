import ical from "ical";

export async function fetchICal(url: string) {
  const response = await fetch(url);

  if (!response.ok) {
    throw new Error("Impossible de charger le calendrier iCal");
  }

  const text = await response.text();

  const data = ical.parseICS(text);

  return Object.values(data);
}