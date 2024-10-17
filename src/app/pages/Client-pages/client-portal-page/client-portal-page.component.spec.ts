import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ClientPortalPageComponent } from './client-portal-page.component';

describe('ClientPortalPageComponent', () => {
  let component: ClientPortalPageComponent;
  let fixture: ComponentFixture<ClientPortalPageComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [ClientPortalPageComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ClientPortalPageComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
