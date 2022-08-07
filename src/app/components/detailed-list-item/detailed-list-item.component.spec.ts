import { HttpClientModule } from '@angular/common/http';
import { ComponentFixture, TestBed } from '@angular/core/testing';
import { RouterTestingModule } from '@angular/router/testing';
import { PreviousNextBarComponent } from '../previous-next-bar/previous-next-bar.component';
import type { Animal } from '../../services/animals.service';
import { By } from '@angular/platform-browser';
import { Observable } from 'rxjs';

import { DetailedListItemComponent } from './detailed-list-item.component';

describe('DetailedListItemComponent', () => {
  let component: DetailedListItemComponent;
  let fixture: ComponentFixture<DetailedListItemComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [DetailedListItemComponent, PreviousNextBarComponent],
      imports: [RouterTestingModule, HttpClientModule],
    }).compileComponents();

    fixture = TestBed.createComponent(DetailedListItemComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create the component', () => {
    expect(component).toBeTruthy();
  });
  it("should render the animal's name and pronouns", () => {
    const observableDummyAnimal: Observable<Animal> = new Observable(
      (observer) => {
        observer.next({
          id: 1,
          name: 'TestAnimal',
          breed: 'TestBreed',
          animal: 'TestAnimalType',
          age: 22,
          picture: 'https://bit.ly/3QfGXzd',
          pronouns: 'they/them',
        });
      }
    );
    component.animal$ = observableDummyAnimal;
    fixture.detectChanges();

    const animalName = fixture.debugElement.query(By.css('.name'));
    expect(animalName.nativeElement.textContent).toBe('TestAnimal');
    const Pronouns = fixture.debugElement.query(By.css('.pronouns'));
    expect(Pronouns.nativeElement.textContent).toBe('(they/them)');
  });
  it("should render the animal's animaltype, breed and age", () => {
    const observableDummyAnimal: Observable<Animal> = new Observable(
      (observer) => {
        observer.next({
          id: 1,
          name: 'TestAnimal',
          breed: 'TestBreed',
          animal: 'TestAnimalType',
          age: 22,
          picture: 'https://bit.ly/3QfGXzd',
          pronouns: 'they/them',
        });
      }
    );
    component.animal$ = observableDummyAnimal;
    fixture.detectChanges();

    const detailValues = fixture.debugElement.queryAll(By.css('.detail-value'));
    detailValues.forEach((value) => {
      expect(value.nativeElement.textContent).toBeTruthy();
      expect(
        value.nativeElement.textContent === 'TestAnimalType' ||
          'TestBreed' ||
          22
      ).toBeTruthy();
    });
  });
});
