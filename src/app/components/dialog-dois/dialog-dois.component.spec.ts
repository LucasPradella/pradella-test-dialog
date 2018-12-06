import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { dialogDoisComponent } from './dialog-dois.component';

describe('dialogDoisComponent', () => {
  let component: dialogDoisComponent;
  let fixture: ComponentFixture<dialogDoisComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ dialogDoisComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(dialogDoisComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
