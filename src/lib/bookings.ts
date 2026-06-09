export function formatBookings(events: any[]) {
  return events
    .filter((e) => e.type === "VEVENT")
    .map((e) => ({
      start: e.start,
      end: e.end,
      title: e.summary
    }));
}