import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ClientInfoPageComponent } from './client-info-page.component';

describe('ClientInfoPageComponent', () => {
  let component: ClientInfoPageComponent;
  let fixture: ComponentFixture<ClientInfoPageComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [ClientInfoPageComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ClientInfoPageComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
