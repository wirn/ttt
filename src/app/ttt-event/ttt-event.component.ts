import { Component, Input } from '@angular/core';
import { TTTEvent } from '../model/model';
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
}
