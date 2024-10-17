import { ComponentFixture, TestBed } from '@angular/core/testing';

import { VeterinaryLoginPageComponent } from './veterinary-login-page.component';

describe('VeterinaryLoginPageComponent', () => {
  let component: VeterinaryLoginPageComponent;
  let fixture: ComponentFixture<VeterinaryLoginPageComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [VeterinaryLoginPageComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(VeterinaryLoginPageComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
