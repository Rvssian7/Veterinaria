import { Component, OnInit } from '@angular/core';
import { CitaService } from '../services/cita.service';
import { Cita } from '../models/cita';

@Component({
  selector: 'app-agregar-cita',
  templateUrl: './agregar-cita.component.html',
  styleUrls: ['./agregar-cita.component.css']
})
export class AgregarCitaComponent implements OnInit {

  constructor(private citaservice:CitaService) { }
  cita:Cita;
  ngOnInit() {
    this.cita = {id:0,nombre:'',apellido:'',telefono:'',correo:'',fecha:''};
  }

  add(){
    this.citaservice.agregarCita(this.cita).subscribe(medico => {alert('Se registro una nueva cita')});
  }

}
