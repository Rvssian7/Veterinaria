import { NgModule, Component } from '@angular/core';
import { CommonModule } from '@angular/common';

import {Routes,RouterModule} from '@angular/router';
import { AgregarMedicoComponent } from './agregar-medico/agregar-medico.component';
import { ListaMedicoComponent } from './lista-medico/lista-medico.component';
import { EditarMedicoComponent } from './editar-medico/editar-medico.component';
import { AgregarClienteComponent } from './agregar-cliente/agregar-cliente.component';
import { EditarClienteComponent } from './editar-cliente/editar-cliente.component';
import { ListaClienteComponent } from './lista-cliente/lista-cliente.component';
import { AgregarVacunaComponent } from './agregar-vacuna/agregar-vacuna.component';
import { ListaVacunaComponent } from './lista-vacuna/lista-vacuna.component';
import { EditarVacunaComponent } from './editar-vacuna/editar-vacuna.component';
import { AgregarCitaComponent } from './agregar-cita/agregar-cita.component';
import { ListaCitaComponent } from './lista-cita/lista-cita.component';
import { EditarCitaComponent } from './editar-cita/editar-cita.component';



const routes: Routes = [
  {
    path:'listamedico',
    component:ListaMedicoComponent
  },
  {
    path:'agregarmedico',
    component:AgregarMedicoComponent
  },
  {
    path:'editarmedico/:id',
    component:EditarMedicoComponent
    },
  //Clientes
  {
    path:'listacliente',
    component:ListaClienteComponent
    },
  {
    path:'agregarcliente',
    component:AgregarClienteComponent
    },
  {
    path:'editarcliente/:id',
    component:EditarClienteComponent
  },
  //Vacuna
  {
    path:'agregarvacuna',
    component:AgregarVacunaComponent
  },
  {
    path:'listavacuna',
    component:ListaVacunaComponent
  },
  {
    path:'editarvacuna/:id',
    component:EditarVacunaComponent
  },
  //Cita
  {
    path:'agregarcita',
    component:AgregarCitaComponent
  },
  {
    path:'listacita',
    component:ListaCitaComponent
  },
  {
    path:'editarcita/:id',
    component:EditarCitaComponent
  }
];

@NgModule({
  declarations: [],
  imports: [RouterModule.forRoot(routes),
    CommonModule
  ],
  exports: [RouterModule]
})
export class AppRoutingModule { }