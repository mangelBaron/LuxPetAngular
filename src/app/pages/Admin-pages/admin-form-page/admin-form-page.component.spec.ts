import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AdminFormPageComponent } from './admin-form-page.component';

describe('AdminFormPageComponent', () => {
  let component: AdminFormPageComponent;
  let fixture: ComponentFixture<AdminFormPageComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [AdminFormPageComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(AdminFormPageComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
