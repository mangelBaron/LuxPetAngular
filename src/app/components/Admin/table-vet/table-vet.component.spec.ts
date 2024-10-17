import { ComponentFixture, TestBed } from '@angular/core/testing';

import { TableVetComponent } from './table-vet.component';

describe('TableVetComponent', () => {
  let component: TableVetComponent;
  let fixture: ComponentFixture<TableVetComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [TableVetComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(TableVetComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
