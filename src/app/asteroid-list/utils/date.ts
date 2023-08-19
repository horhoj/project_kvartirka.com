import { addDays, formatISO } from 'date-fns';

export function formatDate(date: Date) {
  return formatISO(date, { representation: 'date' });
}

export function nextDate(date: string) {
  const nextDate = addDays(new Date(date), 1);

  return formatDate(nextDate);
}

export function prevDate(date: string) {
  const nextDate = addDays(new Date(date), -1);

  return formatDate(nextDate);
}
