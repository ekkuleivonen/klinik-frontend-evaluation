import { HttpClientModule } from '@angular/common/http';
import { ComponentFixture, TestBed } from '@angular/core/testing';
import { RouterTestingModule } from '@angular/router/testing';
import { PreviousNextBarComponent } from '../previous-next-bar/previous-next-bar.component';

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

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
