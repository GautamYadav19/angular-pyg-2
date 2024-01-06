import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ProductCVDescComponent } from './product-cv-desc.component';

describe('ProductCVDescComponent', () => {
  let component: ProductCVDescComponent;
  let fixture: ComponentFixture<ProductCVDescComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ProductCVDescComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ProductCVDescComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
