import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CondensedListItemComponent } from './condensed-list-item.component';

describe('CondensedListItemComponent', () => {
  let component: CondensedListItemComponent;
  let fixture: ComponentFixture<CondensedListItemComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ CondensedListItemComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(CondensedListItemComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
