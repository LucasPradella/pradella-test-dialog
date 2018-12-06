import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { DiologPrincipalComponent } from './diolog-principal.component';

describe('DiologPrincipalComponent', () => {
  let component: DiologPrincipalComponent;
  let fixture: ComponentFixture<DiologPrincipalComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ DiologPrincipalComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(DiologPrincipalComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
