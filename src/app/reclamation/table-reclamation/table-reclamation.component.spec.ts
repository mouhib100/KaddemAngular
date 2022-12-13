import { ComponentFixture, TestBed } from '@angular/core/testing';

import { TableReclamationComponent } from './table-reclamation.component';

describe('TableReclamationComponent', () => {
  let component: TableReclamationComponent;
  let fixture: ComponentFixture<TableReclamationComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ TableReclamationComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(TableReclamationComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
