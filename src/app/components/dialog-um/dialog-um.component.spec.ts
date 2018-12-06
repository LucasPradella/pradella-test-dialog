import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { dialogUmComponent } from './dialog-um.component';

describe('dialogUmComponent', () => {
  let component: dialogUmComponent;
  let fixture: ComponentFixture<dialogUmComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ dialogUmComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(dialogUmComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
