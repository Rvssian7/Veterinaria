import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { AgregarVacunaComponent } from './agregar-vacuna.component';

describe('AgregarVacunaComponent', () => {
  let component: AgregarVacunaComponent;
  let fixture: ComponentFixture<AgregarVacunaComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ AgregarVacunaComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(AgregarVacunaComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
