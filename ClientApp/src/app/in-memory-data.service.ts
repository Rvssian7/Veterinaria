import { Injectable } from '@angular/core';
import { InMemoryDbService } from 'angular-in-memory-web-api';
import { Medico } from './models/medico';



@Injectable({
  providedIn: 'root'
})
export class InMemoryDataService implements InMemoryDataService {

  createDb(){
    const medicos =[
      { id: 11, nombre:'Habilitar Servicios HTTP', apellido: '...' ,direccion:'...',correo:'...',contraseña:'...'},
      { id: 12, nombre:'Simular Servidor de Datos ', apellido: '...',direccion:'...',correo:'...',contraseña:'...'},
      { id: 13, nombre:'Importar HttpClientInMemoryWebApiModule y InMemoryDataService ', apellido: '...' ,direccion:'...',correo:'...',contraseña:'...'},
    ];
    return {medicos};
  }

  genId(medicos:Medico[]):number{
    return medicos.length > 0 ? Math.max(...medicos.map(medico =>medico.id))+1 : 11;
  }
}
