import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ListaVacunaComponent } from './lista-vacuna.component';

describe('ListaVacunaComponent', () => {
  let component: ListaVacunaComponent;
  let fixture: ComponentFixture<ListaVacunaComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ListaVacunaComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ListaVacunaComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
