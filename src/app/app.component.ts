import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { CommonModule } from '@angular/common';
import { events } from '../data/TTTEvents';
import { TTTEvent } from './model/model';
import { TttEventComponent } from './ttt-event/ttt-event.component';

@Component({
  selector: 'app-root',
  imports: [RouterOutlet, CommonModule, TttEventComponent],
  templateUrl: './app.component.html',
  styleUrl: './app.component.scss',
})
export class AppComponent {
  public tttEvents: TTTEvent[] = events;

  private today = new Date();

  public pastEvents = this.tttEvents.filter(
    (event) => event.date && new Date(event.date) < this.today
  );

  public upcomingEvents = this.tttEvents.filter(
    (event) => !event.date || new Date(event.date) >= this.today
  );
}
