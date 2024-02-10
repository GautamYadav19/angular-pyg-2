import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ContactusInfoComponent } from './contactus-info.component';

describe('ContactusInfoComponent', () => {
  let component: ContactusInfoComponent;
  let fixture: ComponentFixture<ContactusInfoComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ContactusInfoComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ContactusInfoComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
