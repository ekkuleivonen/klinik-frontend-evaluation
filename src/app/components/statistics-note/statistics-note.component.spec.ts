import { HttpClientModule } from '@angular/common/http';
import { DebugElement } from '@angular/core';
import { ComponentFixture, TestBed } from '@angular/core/testing';
import { By } from '@angular/platform-browser';

import { StatisticsNoteComponent } from './statistics-note.component';

describe('StatisticsNoteComponent', () => {
  let component: StatisticsNoteComponent;
  let fixture: ComponentFixture<StatisticsNoteComponent>;
  let de: DebugElement;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [StatisticsNoteComponent],
      imports: [HttpClientModule],
    }).compileComponents();

    fixture = TestBed.createComponent(StatisticsNoteComponent);
    component = fixture.componentInstance;
    de = fixture.debugElement;
    fixture.detectChanges();
  });

  it('should create the component', () => {
    expect(component).toBeTruthy();
  });
  it('should have a set of p tags for text prompts', () => {
    const pTags = de.queryAll(By.css('p'));
    expect(pTags.length).toBeGreaterThan(0);
    pTags.forEach((pTag) => {
      expect(pTag.nativeElement.classList.contains('welcome-text-prompt')).toBe(
        true
      );
      expect(pTag.nativeElement.id.includes('tw')).toBe(true);
    });
  });
  it('should have a button tag leading to animals page', () => {
    const button = de.query(By.css('button'));
    expect(button.nativeElement.classList.contains('welcome-button')).toBe(
      true
    );
    expect(button.nativeElement.textContent).toContain('Show me the animals!');
    expect(button.nativeElement.getAttribute('routerLink')).toBe('./animals');
  });
});
