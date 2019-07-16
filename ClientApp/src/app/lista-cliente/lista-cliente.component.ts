import { Component, OnInit } from '@angular/core';
import { Cliente } from '../models/cliente';
import { ClienteService } from '../services/cliente.service';

@Component({
  selector: 'app-lista-cliente',
  templateUrl: './lista-cliente.component.html',
  styleUrls: ['./lista-cliente.component.css']
})
export class ListaClienteComponent implements OnInit {
  clientes:Cliente[];
  constructor(private clienteservice:ClienteService) { }

  ngOnInit() {
    this.getAll();
  }
  
  getAll(){
    this.clienteservice.getAll().subscribe(clientes => this.clientes=clientes);
  }

}
