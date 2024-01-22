import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ContactusIndexComponent } from './contactus-index.component';

describe('ContactusIndexComponent', () => {
  let component: ContactusIndexComponent;
  let fixture: ComponentFixture<ContactusIndexComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ContactusIndexComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ContactusIndexComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
