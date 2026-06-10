import type { APIRoute } from "astro";

import { rooms } from "../../data/rooms";
import { formatBookings } from "../../lib/bookingslib";
import { fetchICal } from "../../lib/ical";

export const GET: APIRoute = async ({ url }) => {
  try {
    const roomId = url.searchParams.get("roomId");

    if (!roomId) {
      return new Response(
        JSON.stringify({ error: "Missing roomId" }),
        { status: 400 }
      );
    }

    const room = rooms.find((r) => r.id === roomId);

    if (!room) {
      return new Response(
        JSON.stringify({ error: "Room not found" }),
        { status: 404 }
      );
    }

    // 🔥 iCal → raw events
    const rawEvents = await fetchICal(room.ical);

    // 🔥 formatage
    const bookings = formatBookings(rawEvents);

    return new Response(
      JSON.stringify({
        room: room.name,
        bookings,
      }),
      {
        headers: {
          "Content-Type": "application/json",
        },
      }
    );

  } catch (err) {
    console.error("API bookings error:", err);

    return new Response(
      JSON.stringify({ error: "Internal server error" }),
      { status: 500 }
    );
  }
};