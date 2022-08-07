import { HttpClientModule } from '@angular/common/http';
import { ComponentFixture, TestBed } from '@angular/core/testing';
import { RouterTestingModule } from '@angular/router/testing';
import type { Animal } from '../../services/animals.service';
import { By } from '@angular/platform-browser';

import { CondensedListItemComponent } from './condensed-list-item.component';

describe('CondensedListItemComponent', () => {
  let component: CondensedListItemComponent;
  let fixture: ComponentFixture<CondensedListItemComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [CondensedListItemComponent],
      imports: [HttpClientModule, RouterTestingModule],
    }).compileComponents();

    fixture = TestBed.createComponent(CondensedListItemComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create the component', () => {
    expect(component).toBeTruthy();
  });
  it("should render a link to the animal's page", () => {
    const animal: Animal = {
      id: 1,
      name: 'TestAnimal',
      breed: 'TestBreed',
      animal: 'TestAnimalType',
      age: 22,
      picture: 'https://bit.ly/3QfGXzd',
    };

    component.animalData = {
      slug: `/animals/${animal.id}`,
      name: animal.name,
      picture: animal.picture,
    };
    fixture.detectChanges();
    const link = fixture.debugElement.query(By.css('a'));
    expect(link.nativeElement.href).toBe('http://localhost:9876/animals/1');
  });
  it("should render the animal's name and picture", () => {
    const animal: Animal = {
      id: 1,
      name: 'TestAnimal',
      breed: 'TestBreed',
      animal: 'TestAnimalType',
      age: 22,
      picture: 'https://bit.ly/3QfGXzd',
    };

    component.animalData = {
      slug: `/animals/${animal.id}`,
      name: animal.name,
      picture: animal.picture,
    };
    fixture.detectChanges();
    const name = fixture.debugElement.query(By.css('h3'));
    const picture = fixture.debugElement.query(By.css('img'));
    expect(name.nativeElement.textContent).toBe('TestAnimal');
    expect(picture.nativeElement.src).toBe('https://bit.ly/3QfGXzd');
  });
});
