import { ComponentFixture, TestBed } from '@angular/core/testing';

import { UpdatePetFormPageComponent } from './update-pet-form-page.component';

describe('UpdatePetFormPageComponent', () => {
  let component: UpdatePetFormPageComponent;
  let fixture: ComponentFixture<UpdatePetFormPageComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [UpdatePetFormPageComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(UpdatePetFormPageComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
