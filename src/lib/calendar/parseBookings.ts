  function formatLocalDate(date: Date) {
    const year = date.getFullYear();

    const month = String(
      date.getMonth() + 1
    ).padStart(2, "0");

    const day = String(
      date.getDate()
    ).padStart(2, "0");

    return `${year}-${month}-${day}`;
  }


export function parseBookings(bookings: any[]) {
  const closed = new Set<string>();

  for (const b of bookings) {
    const start = new Date(b.start);
    const end = new Date(b.end);

    let d = new Date(start);

    while (d < end) {
      closed.add(formatLocalDate(d));
      d.setDate(d.getDate() + 1);
    }
  }

  return closed;
}
