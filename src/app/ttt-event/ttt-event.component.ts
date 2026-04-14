import { Component, Input } from '@angular/core';
import { Colleague, TTTEvent } from '../model/model';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-ttt-event',
  imports: [CommonModule],
  templateUrl: './ttt-event.component.html',
  styleUrl: './ttt-event.component.scss',
})
export class TttEventComponent {
  private _tttEvents: TTTEvent[] = [];

  @Input()
  set tttEvents(events: TTTEvent[] | undefined) {
    this._tttEvents = (events ?? []).slice().sort((a, b) => {
      const ta = a?.date ? new Date(a.date).getTime() : 0;
      const tb = b?.date ? new Date(b.date).getTime() : 0;
      const eventsSortedByDate = tb - ta;
      return eventsSortedByDate;
    });
  }

  get tttEvents(): TTTEvent[] {
    return this._tttEvents;
  }

  getColleagues(event: TTTEvent): Colleague[] {
    return Array.isArray(event.heldBy) ? event.heldBy : [event.heldBy];
  }

  getColleagueNames(event: TTTEvent): string {
    return this.getColleagues(event)
      .map((colleague) => colleague.name)
      .join(', ');
  }

  getImagePath(colleague: Colleague | undefined): string | null {
    return colleague?.image ? `assets/${colleague.image}` : null;
  }

  hasSplitImage(event: TTTEvent): boolean {
    const colleagues = this.getColleagues(event);
    return (
      colleagues.length === 2 &&
      colleagues.every((colleague) => !!colleague.image)
    );
  }
}
