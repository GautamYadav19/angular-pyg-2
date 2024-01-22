import { ComponentFixture, TestBed } from '@angular/core/testing';

import { FilterIndexComponent } from './filter-index.component';

describe('FilterIndexComponent', () => {
  let component: FilterIndexComponent;
  let fixture: ComponentFixture<FilterIndexComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ FilterIndexComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(FilterIndexComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
