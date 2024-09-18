import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PetPortalComponent } from './pet-portal.component';

describe('PetPortalComponent', () => {
  let component: PetPortalComponent;
  let fixture: ComponentFixture<PetPortalComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [PetPortalComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(PetPortalComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
