import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AdminTratamientoFormPageComponent } from './admin-tratamiento-form-page.component';

describe('AdminTratamientoFormPageComponent', () => {
  let component: AdminTratamientoFormPageComponent;
  let fixture: ComponentFixture<AdminTratamientoFormPageComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [AdminTratamientoFormPageComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(AdminTratamientoFormPageComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
