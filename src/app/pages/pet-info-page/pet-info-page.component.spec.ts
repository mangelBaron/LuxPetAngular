import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PetInfoPageComponent } from './pet-info-page.component';

describe('PetInfoPageComponent', () => {
  let component: PetInfoPageComponent;
  let fixture: ComponentFixture<PetInfoPageComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [PetInfoPageComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(PetInfoPageComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
