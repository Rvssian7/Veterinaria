import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Location } from '@angular/common';
import { VacunaService } from '../services/vacuna.service';
import { Vacuna } from '../models/vacuna';

@Component({
  selector: 'app-editar-vacuna',
  templateUrl: './editar-vacuna.component.html',
  styleUrls: ['./editar-vacuna.component.css']
})
export class EditarVacunaComponent implements OnInit {
  vacuna:Vacuna;
  svacuna:string;
  constructor(private route:ActivatedRoute, private location:Location, private vacunaservice:VacunaService) { }

  ngOnInit() {
    this.get();
  }

  get():void{
    const id = +this.route.snapshot.paramMap.get('id');
    this.vacunaservice.get(id).subscribe(hero => this.vacuna = hero)
  }

  update():void{
    this.vacunaservice.update(this.vacuna).subscribe(() => this.goBack());
  }

  delete(): void
  {
    this.vacunaservice.delete(this.vacuna).subscribe(() => this.goBack());
  }

  goBack(): void {
    this.location.back();
  }

}
