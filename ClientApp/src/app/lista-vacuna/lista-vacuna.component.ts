import { Component, OnInit } from '@angular/core';
import { VacunaService } from '../services/vacuna.service';
import { Vacuna } from '../models/vacuna';

@Component({
  selector: 'app-lista-vacuna',
  templateUrl: './lista-vacuna.component.html',
  styleUrls: ['./lista-vacuna.component.css']
})
export class ListaVacunaComponent implements OnInit {
  vacunas:Vacuna[];
  constructor(private vacunaservice:VacunaService) { }

  ngOnInit() {
    this.getAll();
  }

  getAll(){
    this.vacunaservice.getAll().subscribe(vacunas => this.vacunas=vacunas);
  }

}
