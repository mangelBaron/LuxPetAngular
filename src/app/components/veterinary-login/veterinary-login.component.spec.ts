import { ComponentFixture, TestBed } from '@angular/core/testing';

import { VeterinaryLoginComponent } from './veterinary-login.component';

describe('VeterinaryLoginComponent', () => {
  let component: VeterinaryLoginComponent;
  let fixture: ComponentFixture<VeterinaryLoginComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [VeterinaryLoginComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(VeterinaryLoginComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
