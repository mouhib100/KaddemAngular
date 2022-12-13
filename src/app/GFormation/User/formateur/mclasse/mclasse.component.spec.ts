import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { MClasseComponent } from './mclasse.component';

describe('MClasseComponent', () => {
  let component: MClasseComponent;
  let fixture: ComponentFixture<MClasseComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ MClasseComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(MClasseComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
