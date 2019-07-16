import { Component, OnInit } from '@angular/core';
import { CitaService } from '../services/cita.service';
import { Cita } from '../models/cita';

@Component({
  selector: 'app-lista-cita',
  templateUrl: './lista-cita.component.html',
  styleUrls: ['./lista-cita.component.css']
})
export class ListaCitaComponent implements OnInit {
  citas:Cita[];
  constructor(private citaservice:CitaService) { }

  ngOnInit() {
    this.getAll();
  }

  getAll(){
    this.citaservice.getAll().subscribe(citas => this.citas=citas);
  }

}
