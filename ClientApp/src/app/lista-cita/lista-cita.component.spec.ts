import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ListaCitaComponent } from './lista-cita.component';

describe('ListaCitaComponent', () => {
  let component: ListaCitaComponent;
  let fixture: ComponentFixture<ListaCitaComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ListaCitaComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ListaCitaComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
