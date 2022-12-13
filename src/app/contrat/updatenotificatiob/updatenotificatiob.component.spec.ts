import { ComponentFixture, TestBed } from '@angular/core/testing';

import { UpdatenotificatiobComponent } from './updatenotificatiob.component';

describe('UpdatenotificatiobComponent', () => {
  let component: UpdatenotificatiobComponent;
  let fixture: ComponentFixture<UpdatenotificatiobComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ UpdatenotificatiobComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(UpdatenotificatiobComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
