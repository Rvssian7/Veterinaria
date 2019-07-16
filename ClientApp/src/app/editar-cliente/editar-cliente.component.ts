import { Component, OnInit } from '@angular/core';
import { ClienteService } from '../services/cliente.service';
import { Cliente } from '../models/cliente';
import { ActivatedRoute } from '@angular/router';
import { Location } from '@angular/common';

@Component({
  selector: 'app-editar-cliente',
  templateUrl: './editar-cliente.component.html',
  styleUrls: ['./editar-cliente.component.css']
})
export class EditarClienteComponent implements OnInit {
  cliente:Cliente;
  scliente:string;
  constructor(private route:ActivatedRoute, private location:Location, private clienteservice:ClienteService) { }

  ngOnInit() {
    this.get();
  }
  
  get():void{
    const id = +this.route.snapshot.paramMap.get('id');
    this.clienteservice.get(id).subscribe(hero => this.cliente = hero)
  }

  update():void{
    this.clienteservice.update(this.cliente).subscribe(() => this.goBack());
  }

  delete(): void
  {
    this.clienteservice.delete(this.cliente).subscribe(() => this.goBack());
  }

  goBack(): void {
    this.location.back();
  }
}
