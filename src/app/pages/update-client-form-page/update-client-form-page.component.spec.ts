import { ComponentFixture, TestBed } from '@angular/core/testing';

import { UpdateClientFormPageComponent } from './update-client-form-page.component';

describe('ClientFormPageComponent', () => {
  let component: UpdateClientFormPageComponent;
  let fixture: ComponentFixture<UpdateClientFormPageComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [UpdateClientFormPageComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(UpdateClientFormPageComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
