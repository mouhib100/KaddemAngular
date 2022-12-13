import { ComponentFixture, TestBed } from '@angular/core/testing';

import { FormcalculComponent } from './formcalcul.component';

describe('FormcalculComponent', () => {
  let component: FormcalculComponent;
  let fixture: ComponentFixture<FormcalculComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ FormcalculComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(FormcalculComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
