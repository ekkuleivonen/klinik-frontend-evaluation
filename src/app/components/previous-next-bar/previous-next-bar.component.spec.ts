import { ComponentFixture, TestBed } from '@angular/core/testing';
import { RouterTestingModule } from '@angular/router/testing';
import { DetailedListItemComponent } from '../detailed-list-item/detailed-list-item.component';

import { PreviousNextBarComponent } from './previous-next-bar.component';

describe('PreviousNextBarComponent', () => {
  let component: PreviousNextBarComponent;
  let fixture: ComponentFixture<PreviousNextBarComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [PreviousNextBarComponent, DetailedListItemComponent],
      imports: [RouterTestingModule],
    }).compileComponents();

    fixture = TestBed.createComponent(PreviousNextBarComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
