import { ComponentFixture, TestBed } from '@angular/core/testing';

import { DetailSilderComponent } from './detail-silder.component';

describe('DetailSilderComponent', () => {
  let component: DetailSilderComponent;
  let fixture: ComponentFixture<DetailSilderComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ DetailSilderComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(DetailSilderComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
