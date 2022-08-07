import { ComponentFixture, TestBed } from '@angular/core/testing';
import { RouterTestingModule } from '@angular/router/testing';
import { DetailedListItemComponent } from '../detailed-list-item/detailed-list-item.component';
import { DebugElement } from '@angular/core';
import { By } from '@angular/platform-browser';

import { PreviousNextBarComponent } from './previous-next-bar.component';
import { Observable } from 'rxjs';

describe('PreviousNextBarComponent', () => {
  let component: PreviousNextBarComponent;
  let fixture: ComponentFixture<PreviousNextBarComponent>;
  let de: DebugElement;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [PreviousNextBarComponent, DetailedListItemComponent],
      imports: [RouterTestingModule],
    }).compileComponents();

    fixture = TestBed.createComponent(PreviousNextBarComponent);
    component = fixture.componentInstance;
    de = fixture.debugElement;
    fixture.detectChanges();
  });

  it('should create the component', () => {
    expect(component).toBeTruthy();
  });
  it('should have previous and next buttons', () => {
    const preivousBtn = de.query(By.css('.previous-button'));
    const nextBtn = de.query(By.css('.next-button'));
    expect(preivousBtn).toBeTruthy();
    expect(nextBtn).toBeTruthy();
    expect(preivousBtn.nativeElement.textContent.includes('Previous')).toBe(
      true
    );
    expect(nextBtn.nativeElement.textContent.includes('Next')).toBe(true);
  });
  it("should not change page if there's no previous or next page", () => {
    component.id = 1;
    component.animalCount$ = new Observable((observer) => {
      observer.next(1);
      observer.complete();
    });
    component.previousAnimal();
    component.nextAnimal();
    expect(component.id).toBe(1);
  });
});
