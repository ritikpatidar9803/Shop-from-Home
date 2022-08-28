import { ComponentFixture, TestBed } from '@angular/core/testing';

import { FurnishingsComponent } from './furnishings.component';

describe('FurnishingsComponent', () => {
  let component: FurnishingsComponent;
  let fixture: ComponentFixture<FurnishingsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ FurnishingsComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(FurnishingsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
