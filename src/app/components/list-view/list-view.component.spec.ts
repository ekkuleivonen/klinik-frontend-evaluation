import { HttpClientModule } from '@angular/common/http';
import { ComponentFixture, TestBed } from '@angular/core/testing';
import { RouterTestingModule } from '@angular/router/testing';
import { By } from '@angular/platform-browser';
import type { Animal } from '../../services/animals.service';

import { ListViewComponent } from './list-view.component';

describe('ListViewComponent', () => {
  let component: ListViewComponent;
  let fixture: ComponentFixture<ListViewComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ListViewComponent],
      imports: [HttpClientModule, RouterTestingModule],
    }).compileComponents();

    fixture = TestBed.createComponent(ListViewComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create the component', () => {
    expect(component).toBeTruthy();
  });
  it('should list all animals', () => {
    const dummyAnimals: Animal[] = [
      {
        id: 1,
        name: 'TestAnimal',
        breed: 'TestBreed',
        animal: 'TestAnimalType',
        age: 22,
        picture: 'https://bit.ly/3QfGXzd',
      },
      {
        id: 2,
        name: 'TestAnimal2',
        breed: 'TestBreed2',
        animal: 'TestAnimalType2',
        age: 22,
        picture: 'https://bit.ly/3QfGXzd',
      },
    ];
    component.animals = dummyAnimals;
    fixture.detectChanges();
    const listItems = fixture.debugElement.queryAll(
      By.css('.animal-list-item')
    );
    expect(listItems.length).toBe(2);
  });
  it("should keep the top gradient and bottom gradient 200px away from mouse's y position", () => {
    const topGradient = fixture.debugElement.query(By.css('.top-gradient'));
    const bottomGradient = fixture.debugElement.query(
      By.css('.bottom-gradient')
    );

    //mousemove Y up
    const mouseEvent1 = new MouseEvent('mousemove', {
      clientY: 200,
      clientX: 0,
    });
    document.dispatchEvent(mouseEvent1);
    expect(topGradient.nativeElement.style.height).toBe('0px');

    //mousemove Y down
    const mouseEvent2 = new MouseEvent('mousemove', {
      clientY: window.innerHeight - 200,
      clientX: 0,
    });
    document.dispatchEvent(mouseEvent2);
    expect(bottomGradient.nativeElement.style.height).toBe('0px');
  });
});
