import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ProductCVIndexComponent } from './product-cv-index.component';

describe('ProductCVIndexComponent', () => {
  let component: ProductCVIndexComponent;
  let fixture: ComponentFixture<ProductCVIndexComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ProductCVIndexComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ProductCVIndexComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
