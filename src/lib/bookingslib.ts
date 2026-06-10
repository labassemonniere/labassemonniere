import { rooms } from "../data/rooms";
import { fetchICal } from "./ical";

export function formatBookings(events: any[]) {
  return events
    .filter((e) => e.type === "VEVENT")
    .map((e) => ({
      start: e.start,
      end: e.end,
      title: e.summary
    }));
}

export async function getRoomBookings(roomId: string) {
  const room = rooms.find(r => r.id === roomId);
  if (!room) return [];

  const raw = await fetchICal(room.ical);
  return formatBookings(raw);
}
