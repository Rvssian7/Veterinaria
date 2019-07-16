import { Component, OnInit } from '@angular/core';
import { CitaService } from '../services/cita.service';
import { Cita } from '../models/cita';
import { ActivatedRoute } from '@angular/router';
import { Location } from '@angular/common';

@Component({
  selector: 'app-editar-cita',
  templateUrl: './editar-cita.component.html',
  styleUrls: ['./editar-cita.component.css']
})
export class EditarCitaComponent implements OnInit {

  cita:Cita;
  scita:string;
  
  constructor(private route:ActivatedRoute, private location:Location, private citaservice:CitaService) { }

  ngOnInit() {
    this.get();
  }

  get():void{
    const id = +this.route.snapshot.paramMap.get('id');
    this.citaservice.get(id).subscribe(hero => this.cita = hero)
  }

  update():void{
    this.citaservice.update(this.cita).subscribe(() => this.goBack());
  }

  delete(): void
  {
    this.citaservice.delete(this.cita).subscribe(() => this.goBack());
  }

  goBack(): void {
    this.location.back();
  }

}
