import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CheckoutFormSummaryComponent } from './checkout-form-summary.component';

describe('CheckoutFormSummaryComponent', () => {
  let component: CheckoutFormSummaryComponent;
  let fixture: ComponentFixture<CheckoutFormSummaryComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ CheckoutFormSummaryComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(CheckoutFormSummaryComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
