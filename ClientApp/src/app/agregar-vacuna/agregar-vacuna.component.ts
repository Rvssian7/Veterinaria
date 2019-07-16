import { Component, OnInit } from '@angular/core';
import { VacunaService } from '../services/vacuna.service';
import { Vacuna } from '../models/vacuna';

@Component({
  selector: 'app-agregar-vacuna',
  templateUrl: './agregar-vacuna.component.html',
  styleUrls: ['./agregar-vacuna.component.css']
})
export class AgregarVacunaComponent implements OnInit {

  constructor(private vacunaservice:VacunaService) { }
  vacuna:Vacuna;
  ngOnInit() {
    this.vacuna = {id:0, nombre:'',apellido:'',nombreVacuna:'',telefono:'',fecha:''};
  }

  add(){
    this.vacunaservice.agregarVacuna(this.vacuna).subscribe(vacuna => {alert('Se registro un nuevo medico')});
  }

}
