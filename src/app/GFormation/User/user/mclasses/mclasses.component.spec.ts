import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { MclassesComponent } from './mclasses.component';

describe('MclassesComponent', () => {
  let component: MclassesComponent;
  let fixture: ComponentFixture<MclassesComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ MclassesComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(MclassesComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
