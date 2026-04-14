import { ComponentFixture, TestBed } from '@angular/core/testing';
import { SpeakerImageComponent } from './speaker-image.component';

describe('SpeakerImageComponent', () => {
  let component: SpeakerImageComponent;
  let fixture: ComponentFixture<SpeakerImageComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [SpeakerImageComponent],
    }).compileComponents();

    fixture = TestBed.createComponent(SpeakerImageComponent);
    component = fixture.componentInstance;
  });

  it('visar en vanlig bild för en kollega', () => {
    component.colleagues = [{ name: 'Anna', image: 'anna.webp' }];
    component.alt = 'Anna';
    fixture.detectChanges();

    const element = fixture.nativeElement as HTMLElement;

    expect(element.querySelector('img.speaker-image')).not.toBeNull();
    expect(element.querySelector('.speaker-image--split')).toBeNull();
  });

  it('visar diagonal split för två kollegor med bilder', () => {
    component.colleagues = [
      { name: 'Anna', image: 'anna.webp' },
      { name: 'Bo', image: 'bo.webp' },
    ];
    component.alt = 'Anna och Bo';
    fixture.detectChanges();

    const element = fixture.nativeElement as HTMLElement;

    expect(element.querySelector('.speaker-image--split')).not.toBeNull();
    expect(element.querySelectorAll('.speaker-image__half').length).toBe(2);
  });
});
