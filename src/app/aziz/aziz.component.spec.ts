import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AzizComponent } from './aziz.component';

describe('AzizComponent', () => {
  let component: AzizComponent;
  let fixture: ComponentFixture<AzizComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ AzizComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(AzizComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
