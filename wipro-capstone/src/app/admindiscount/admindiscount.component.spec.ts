import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AdmindiscountComponent } from './admindiscount.component';

describe('AdmindiscountComponent', () => {
  let component: AdmindiscountComponent;
  let fixture: ComponentFixture<AdmindiscountComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ AdmindiscountComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(AdmindiscountComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
