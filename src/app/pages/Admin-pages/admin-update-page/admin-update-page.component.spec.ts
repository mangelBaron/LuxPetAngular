import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AdminUpdatePageComponent } from './admin-update-page.component';

describe('AdminUpdatePageComponent', () => {
  let component: AdminUpdatePageComponent;
  let fixture: ComponentFixture<AdminUpdatePageComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [AdminUpdatePageComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(AdminUpdatePageComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
