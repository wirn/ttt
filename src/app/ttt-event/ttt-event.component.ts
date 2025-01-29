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
  @Input() tttEvents: TTTEvent[] = [];
}
