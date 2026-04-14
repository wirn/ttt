import { TTTEvent } from './model';

export function sortEventsDescending(events: TTTEvent[]): TTTEvent[] {
  return events.slice().sort((a, b) => getEventTime(b) - getEventTime(a));
}

export function splitEventsByDate(
  events: TTTEvent[],
  today: Date
): { pastEvents: TTTEvent[]; upcomingEvents: TTTEvent[] } {
  return {
    pastEvents: events.filter((event) => event.date && getEventTime(event) < today.getTime()),
    upcomingEvents: events.filter(
      (event) => !event.date || getEventTime(event) >= today.getTime()
    ),
  };
}

function getEventTime(event: TTTEvent): number {
  return event.date ? new Date(event.date).getTime() : 0;
}
