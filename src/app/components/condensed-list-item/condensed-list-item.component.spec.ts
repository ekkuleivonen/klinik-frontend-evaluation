import { HttpClientModule } from '@angular/common/http';
import { ComponentFixture, TestBed } from '@angular/core/testing';
import { RouterTestingModule } from '@angular/router/testing';

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

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
