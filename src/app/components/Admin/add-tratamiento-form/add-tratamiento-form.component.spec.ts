import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AddTratamientoFormComponent } from './add-tratamiento-form.component';

describe('AddTratamientoFormComponent', () => {
  let component: AddTratamientoFormComponent;
  let fixture: ComponentFixture<AddTratamientoFormComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [AddTratamientoFormComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(AddTratamientoFormComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
