import { Component, OnInit } from '@angular/core';
import { ClienteService } from '../services/cliente.service';
import { Cliente } from '../models/cliente';

@Component({
  selector: 'app-agregar-cliente',
  templateUrl: './agregar-cliente.component.html',
  styleUrls: ['./agregar-cliente.component.css']
})
export class AgregarClienteComponent implements OnInit {

  constructor(private clienteservice:ClienteService) { }
  cliente:Cliente;
  ngOnInit() {
    this.cliente = {id:0,nombre:'',apellido:'',telefono:'',correo:'',nombreMascota:'',edad:0,raza:''};
  }

  add(){
    this.clienteservice.agregarCliente(this.cliente).subscribe(medico => {alert('Se registro un nuevo cliente')});
  }
  
}
