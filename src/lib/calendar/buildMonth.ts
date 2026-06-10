export function buildMonth(date: Date) {
  const year = date.getFullYear();
  const month = date.getMonth();

  const firstDay = new Date(year, month, 1);
  const lastDay = new Date(year, month + 1, 0);

  const days: Date[] = [];

  // padding début mois
  const startPadding = firstDay.getDay() === 0 ? 6 : firstDay.getDay() - 1;

  for (let i = startPadding; i > 0; i--) {
    const d = new Date(year, month, 1 - i);
    days.push(d);
  }

  // jours du mois
  for (let d = 1; d <= lastDay.getDate(); d++) {
    days.push(new Date(year, month, d));
  }

  return days;
}