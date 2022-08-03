import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PreviousNextBarComponent } from './previous-next-bar.component';

describe('PreviousNextBarComponent', () => {
  let component: PreviousNextBarComponent;
  let fixture: ComponentFixture<PreviousNextBarComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ PreviousNextBarComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(PreviousNextBarComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
