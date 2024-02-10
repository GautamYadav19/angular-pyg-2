import { ComponentFixture, TestBed } from '@angular/core/testing';

import { WishlistIndexComponent } from './wishlist-index.component';

describe('WishlistIndexComponent', () => {
  let component: WishlistIndexComponent;
  let fixture: ComponentFixture<WishlistIndexComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ WishlistIndexComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(WishlistIndexComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
