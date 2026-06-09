import { fetchICal } from "../lib/ical";
import { formatBookings } from "../lib/bookings";
import { rooms } from "../data/rooms";



export async function GET({ url }: { url: URL }) {
  const roomId = url.searchParams.get("roomId");

  const room = rooms.find((r) => r.id === roomId);

  if (!room) {
    return new Response("Room not found", { status: 404 });
  }

  const raw = await fetchICal(room.ical);
  const bookings = formatBookings(raw);

  return new Response(JSON.stringify({
    room: room.name,
    bookings
  }));
}