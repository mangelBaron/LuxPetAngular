import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PetListPageComponent } from './pet-list-page.component';

describe('PetListPageComponent', () => {
  let component: PetListPageComponent;
  let fixture: ComponentFixture<PetListPageComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [PetListPageComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(PetListPageComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
