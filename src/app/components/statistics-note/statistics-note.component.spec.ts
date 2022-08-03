import { ComponentFixture, TestBed } from '@angular/core/testing';

import { StatisticsNoteComponent } from './statistics-note.component';

describe('StatisticsNoteComponent', () => {
  let component: StatisticsNoteComponent;
  let fixture: ComponentFixture<StatisticsNoteComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ StatisticsNoteComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(StatisticsNoteComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
