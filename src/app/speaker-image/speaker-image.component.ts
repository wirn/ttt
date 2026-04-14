import { CommonModule } from '@angular/common';
import { Component, Input } from '@angular/core';
import { Colleague } from '../model/model';

@Component({
  selector: 'app-speaker-image',
  imports: [CommonModule],
  templateUrl: './speaker-image.component.html',
  styleUrl: './speaker-image.component.scss',
})
export class SpeakerImageComponent {
  @Input({ required: true }) colleagues: Colleague[] = [];
  @Input() alt = '';

  get hasSplitImage(): boolean {
    return (
      this.colleagues.length === 2 &&
      this.colleagues.every((colleague) => !!colleague.image)
    );
  }

  get hasSingleImage(): boolean {
    return !!this.colleagues[0]?.image;
  }

  getImagePath(colleague: Colleague | undefined): string | null {
    return colleague?.image ? `assets/${colleague.image}` : null;
  }
}
