import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { DiologDoisComponent } from './diolog-dois.component';

describe('DiologDoisComponent', () => {
  let component: DiologDoisComponent;
  let fixture: ComponentFixture<DiologDoisComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ DiologDoisComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(DiologDoisComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
