import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { DiologUmComponent } from './diolog-um.component';

describe('DiologUmComponent', () => {
  let component: DiologUmComponent;
  let fixture: ComponentFixture<DiologUmComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ DiologUmComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(DiologUmComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
