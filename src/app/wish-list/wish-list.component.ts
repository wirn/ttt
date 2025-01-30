import { Component, Input } from '@angular/core';
import { Wish } from '../model/model';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-wish-list',
  imports: [CommonModule],
  templateUrl: './wish-list.component.html',
  styleUrl: './wish-list.component.scss',
})
export class WishListComponent {
  @Input() wishList: Wish[] = [];
  sortedGroups: { date: string; wishes: Wish[] }[] = [];

  ngOnChanges(): void {
    this.groupAndSortWishes();
  }

  private groupAndSortWishes(): void {
    const grouped: { [key: string]: Wish[] } = {};

    this.wishList.forEach((wish) => {
      if (!wish.date) return;
      const dateKey = new Date(wish.date).toISOString().split('T')[0];
      if (!grouped[dateKey]) {
        grouped[dateKey] = [];
      }
      grouped[dateKey].push(wish);
    });

    this.sortedGroups = Object.entries(grouped)
      .map(([date, wishes]) => ({ date, wishes }))
      .sort((a, b) => new Date(b.date).getTime() - new Date(a.date).getTime());
  }
}
