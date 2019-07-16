import { Component, OnInit } from '@angular/core';
import { MedicoService } from '../services/medico.service';
import { Medico } from '../models/medico';

@Component({
  selector: 'app-lista-medico',
  templateUrl: './lista-medico.component.html',
  styleUrls: ['./lista-medico.component.css']
})
export class ListaMedicoComponent implements OnInit {
  medicos:Medico[];
  constructor(private medicoservice:MedicoService) { }

  ngOnInit() {
    this.getAll();
  }

  getAll(){
    this.medicoservice.getAll().subscribe(medicos => this.medicos=medicos);
  }

}
