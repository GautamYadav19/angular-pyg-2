import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ProductCVReviewComponent } from './product-cv-review.component';

describe('ProductCVReviewComponent', () => {
  let component: ProductCVReviewComponent;
  let fixture: ComponentFixture<ProductCVReviewComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ProductCVReviewComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ProductCVReviewComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
