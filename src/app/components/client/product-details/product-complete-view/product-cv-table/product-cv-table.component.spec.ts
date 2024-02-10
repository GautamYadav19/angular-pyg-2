import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ProductCVTableComponent } from './product-cv-table.component';

describe('ProductCVTableComponent', () => {
  let component: ProductCVTableComponent;
  let fixture: ComponentFixture<ProductCVTableComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ProductCVTableComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ProductCVTableComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
