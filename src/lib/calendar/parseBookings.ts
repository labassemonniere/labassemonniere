export function parseBookings(bookings: any[]) {
  const closed = new Set<string>();

  for (const b of bookings) {
    const start = new Date(b.start);
    const end = new Date(b.end);

    let d = new Date(start);

    while (d < end) {
      closed.add(d.toISOString().split("T")[0]);
      d.setDate(d.getDate() + 1);
    }
  }

  return closed;
}