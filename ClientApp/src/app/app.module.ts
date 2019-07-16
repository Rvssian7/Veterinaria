import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';
import { RouterModule } from '@angular/router';

import { AppComponent } from './app.component';
import { NavMenuComponent } from './nav-menu/nav-menu.component';
import { HomeComponent } from './home/home.component';
import { CounterComponent } from './counter/counter.component';
import { FetchDataComponent } from './fetch-data/fetch-data.component';
import { AppRoutingModule } from './app-routing.module';
import { AgregarMedicoComponent } from './agregar-medico/agregar-medico.component';
import { ListaMedicoComponent } from './lista-medico/lista-medico.component';
import { EditarMedicoComponent } from './editar-medico/editar-medico.component';
import { HttpClientInMemoryWebApiModule } from 'angular-in-memory-web-api';
import { InMemoryDataService }  from './in-memory-data.service';
import { MedicoService } from './services/medico.service';
import { AgregarClienteComponent } from './agregar-cliente/agregar-cliente.component';
import { ListaClienteComponent } from './lista-cliente/lista-cliente.component';
import { EditarClienteComponent } from './editar-cliente/editar-cliente.component';
import { SideBarComponent } from './side-bar/side-bar.component';
import { AgregarVacunaComponent } from './agregar-vacuna/agregar-vacuna.component';
import { ListaVacunaComponent } from './lista-vacuna/lista-vacuna.component';
import { EditarVacunaComponent } from './editar-vacuna/editar-vacuna.component';
import { AgregarCitaComponent } from './agregar-cita/agregar-cita.component';
import { EditarCitaComponent } from './editar-cita/editar-cita.component';
import { ListaCitaComponent } from './lista-cita/lista-cita.component';

@NgModule({
  declarations: [
    AppComponent,
    NavMenuComponent,
    HomeComponent,
    CounterComponent,
    FetchDataComponent,
    AgregarMedicoComponent,
    ListaMedicoComponent,
    EditarMedicoComponent,
    AgregarClienteComponent,
    ListaClienteComponent,
    EditarClienteComponent,
    SideBarComponent,
    AgregarVacunaComponent,
    ListaVacunaComponent,
    EditarVacunaComponent,
    AgregarCitaComponent,
    EditarCitaComponent,
    ListaCitaComponent,
  ],
  imports: [
    BrowserModule.withServerTransition({ appId: 'ng-cli-universal' }),
    HttpClientModule,
    FormsModule,
    RouterModule.forRoot([
      { path: '', component: HomeComponent, pathMatch: 'full' },
      { path: 'counter', component: CounterComponent },
      { path: 'fetch-data', component: FetchDataComponent },
    ]),
    HttpClientModule,
    // HttpClientInMemoryWebApiModule.forRoot(
    //  InMemoryDataService, { dataEncapsulation: false }
    // ),
    AppRoutingModule
  ],
  providers: [MedicoService],
  bootstrap: [AppComponent]
})
export class AppModule { }
