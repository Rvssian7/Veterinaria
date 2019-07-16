import { Component, OnInit } from '@angular/core';
import { MedicoService } from '../services/medico.service';
import { Medico } from '../models/medico';
import { ActivatedRoute } from '@angular/router';
import { Location } from '@angular/common';

@Component({
  selector: 'app-editar-medico',
  templateUrl: './editar-medico.component.html',
  styleUrls: ['./editar-medico.component.css']
})
export class EditarMedicoComponent implements OnInit {
  medico:Medico;
  smedico:string;
  constructor(private route:ActivatedRoute, private location:Location, private medicoservice:MedicoService) { }

  ngOnInit() {
    this.get();
  }

  get():void{
    const id = +this.route.snapshot.paramMap.get('id');
    this.medicoservice.get(id).subscribe(hero => this.medico = hero)
  }

  update():void{
    this.medicoservice.update(this.medico).subscribe(() => this.goBack());
  }

  delete(): void
  {
    this.medicoservice.delete(this.medico).subscribe(() => this.goBack());
  }

  goBack(): void {
    this.location.back();
  }



}
