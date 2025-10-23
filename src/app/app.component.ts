import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { events } from '../data/TTTEvents';
import { TTTEvent, Wish } from './model/model';
import { TttEventComponent } from './ttt-event/ttt-event.component';
import { wish } from '../data/Wish';
import { WishListComponent } from './wish-list/wish-list.component';

@Component({
  selector: 'app-root',
  imports: [RouterOutlet, TttEventComponent, WishListComponent],
  templateUrl: './app.component.html',
  styleUrl: './app.component.scss',
})
export class AppComponent {
  public tttEvents: TTTEvent[] = events;
  public wishList: Wish[] = wish;

  private today = new Date();

  public pastEvents = this.tttEvents.filter(
    (event) => event.date && new Date(event.date) < this.today
  );

  public pastEventsSinceLast = this.tttEvents.filter((event) => {
    if (!event.date) return false;
    const eventTime =
      event.date instanceof Date
        ? event.date.getTime()
        : new Date(event.date as any).getTime();
    const since = new Date('2024-08-01').getTime();
    return eventTime > since && eventTime < this.today.getTime();
  });

  public upcomingEvents = this.tttEvents.filter(
    (event) => !event.date || new Date(event.date) >= this.today
  );
}
