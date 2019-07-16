import { Injectable,Inject } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';

import { Observable, of, observable } from 'rxjs';
import { catchError, map, tap } from 'rxjs/operators';
import { Cliente } from '../models/cliente';

const httpOptions = {
  headers: new HttpHeaders({ 'Content-Type': 'application/json' })
};


@Injectable({
  providedIn: 'root'
})
export class ClienteService {

  constructor(private http:HttpClient, @Inject('BASE_URL')private baseUrl:string) { }

  agregarCliente(cliente: Cliente):Observable<Cliente>{
    alert(JSON.stringify(cliente));
    return this.http.post<Cliente>(this.baseUrl+'api/Cliente', cliente, httpOptions).pipe(
      tap((newCliente: Cliente) => this.log(`added Cliente w/ id=${newCliente.id}`)),
      catchError(this.handleError<Cliente>('agregarMedico')));
  }

  getAll():Observable<Cliente[]>{
    return this.http.get<Cliente[]>(this.baseUrl+'api/Cliente').pipe(
      tap(_=>this.log('Se Consulta la información')),
      catchError(this.handleError<Cliente[]>('getAll',[])));
  }

  get(id: number): Observable<Cliente> {
    const url = `${this.baseUrl + 'api/Cliente'}/${id}`;
    return this.http.get<Cliente>(url).pipe(
      tap(_ => this.log(`fetched cliente id=${id}`)),
      catchError(this.handleError<Cliente>(`getHero id=${id}`)));
  }

  update (cliente: Cliente): Observable<any> {
    const url = `${this.baseUrl + 'api/Cliente'}/${cliente.id}`;
    return this.http.put(url, cliente, httpOptions).pipe(
      tap(_ => this.log(`updated cliente id=${cliente.id}`)),
      catchError(this.handleError<any>('cliente')));
  }

  delete (cliente: Cliente | number): Observable<Cliente> {
    const id = typeof cliente === 'number' ? cliente : cliente.id;
    const url = `${this.baseUrl + 'api/Cliente'}/${id}`;
    return this.http.delete<Cliente>(url, httpOptions).pipe(
      tap(_ => this.log(`deleted cliente id=${id}`)),
      catchError(this.handleError<Cliente>('deleteCliente'))
    );
  }

  private handleError<T> (operation = 'operation', result?: T) {
    return (error: any): Observable<T> => {
       console.error(error); 
       alert(error);
       this.log(`${operation} failed: ${error.message}`);
       return of(result as T);
    };
  }
 
  
  private log(message: string) {
    alert(`MedicoService: ${message}`);
  }

}
