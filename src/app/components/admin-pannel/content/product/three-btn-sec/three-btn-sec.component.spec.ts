import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ThreeBtnSecComponent } from './three-btn-sec.component';

describe('ThreeBtnSecComponent', () => {
  let component: ThreeBtnSecComponent;
  let fixture: ComponentFixture<ThreeBtnSecComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ThreeBtnSecComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ThreeBtnSecComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
