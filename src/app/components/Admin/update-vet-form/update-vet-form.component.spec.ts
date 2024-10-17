import { ComponentFixture, TestBed } from '@angular/core/testing';

import { UpdateVetFormComponent } from './update-vet-form.component';

describe('UpdateVetFormComponent', () => {
  let component: UpdateVetFormComponent;
  let fixture: ComponentFixture<UpdateVetFormComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [UpdateVetFormComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(UpdateVetFormComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
