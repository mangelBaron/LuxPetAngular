import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PetFormPageComponent } from './pet-form-page.component';

describe('PetFormPageComponent', () => {
  let component: PetFormPageComponent;
  let fixture: ComponentFixture<PetFormPageComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [PetFormPageComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(PetFormPageComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
