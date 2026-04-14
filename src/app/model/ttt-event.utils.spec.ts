import { TTTEvent } from './model';
import { splitEventsByDate } from './ttt-event.utils';

describe('ttt-event utils', () => {
  it('normaliserade events i datafilen ska alltid ha heldBy som array', async () => {
    const { events } = await import('../../data/TTTEvents');

    expect(events.length).toBeGreaterThan(0);
    expect(events.every((event) => Array.isArray(event.heldBy))).toBeTrue();
    expect(events.every((event) => event.heldBy.length > 0)).toBeTrue();
  });

  it('delar upp events i tidigare och kommande', () => {
    const today = new Date('2026-04-14T12:00:00Z');
    const events: TTTEvent[] = [
      {
        heldBy: [{ name: 'Anna' }],
        topic: 'Past',
        date: new Date('2026-04-10T12:00:00Z'),
      },
      {
        heldBy: [{ name: 'Bo' }],
        topic: 'Upcoming',
        date: new Date('2026-04-20T12:00:00Z'),
      },
      {
        heldBy: [{ name: 'Carin' }],
        topic: 'Idea',
        date: null,
      },
    ];

    const result = splitEventsByDate(events, today);

    expect(result.pastEvents.map((event) => event.topic)).toEqual(['Past']);
    expect(result.upcomingEvents.map((event) => event.topic)).toEqual([
      'Upcoming',
      'Idea',
    ]);
  });
});
