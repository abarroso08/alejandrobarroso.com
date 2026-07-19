import type { CollectionEntry } from 'astro:content';

export function byNewest<T extends { data: { date: Date } }>(a: T, b: T) {
  return b.data.date.valueOf() - a.data.date.valueOf();
}

export function formatDate(date: Date) {
  return new Intl.DateTimeFormat('en', {
    month: 'short',
    day: 'numeric',
    year: 'numeric',
  }).format(date);
}

export function readingProgress(readings: CollectionEntry<'readings'>[]) {
  return {
    finished: readings.filter((item) => item.data.status === 'finished').length,
    reading: readings.filter((item) => item.data.status === 'reading').length,
    queued: readings.filter((item) => item.data.status === 'queued').length,
  };
}

export function activityByDay(dates: Date[], days = 84) {
  const today = new Date();
  today.setHours(0, 0, 0, 0);
  const counts = new Map<string, number>();

  for (const date of dates) {
    const key = date.toISOString().slice(0, 10);
    counts.set(key, (counts.get(key) ?? 0) + 1);
  }

  return Array.from({ length: days }, (_, index) => {
    const date = new Date(today);
    date.setDate(today.getDate() - (days - index - 1));
    const key = date.toISOString().slice(0, 10);
    return { date, count: counts.get(key) ?? 0 };
  });
}
