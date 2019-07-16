import { Component, OnInit } from '@angular/core';
import { MedicoService } from '../services/medico.service';
import { Medico } from '../models/medico';

@Component({
  selector: 'app-agregar-medico',
  templateUrl: './agregar-medico.component.html',
  styleUrls: ['./agregar-medico.component.css']
})
export class AgregarMedicoComponent implements OnInit {

  constructor(private medicoservice:MedicoService) { }
  medico:Medico;
  ngOnInit() {
    this.medico = {id:0, nombre:'',apellido:'', direccion:'',correo:'',contrasena:''};
  }

  add(){
    this.medicoservice.agregarMedico(this.medico).subscribe(medico => {alert('Se registro un nuevo medico')});
  }

}
