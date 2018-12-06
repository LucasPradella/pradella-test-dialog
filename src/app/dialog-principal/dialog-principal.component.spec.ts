import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { dialogPrincipalComponent } from './dialog-principal.component';

describe('dialogPrincipalComponent', () => {
  let component: dialogPrincipalComponent;
  let fixture: ComponentFixture<dialogPrincipalComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ dialogPrincipalComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(dialogPrincipalComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
