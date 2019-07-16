import { Injectable,Inject } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';

import { Observable, of, observable } from 'rxjs';
import { catchError, map, tap } from 'rxjs/operators';
import { Medico } from '../models/medico';

const httpOptions = {
  headers: new HttpHeaders({ 'Content-Type': 'application/json' })
};

@Injectable({
  providedIn: 'root'
})
export class MedicoService {

  constructor(private http:HttpClient, @Inject('BASE_URL')private baseUrl:string ) { }

  agregarMedico(medico: Medico):Observable<Medico>{
    alert(JSON.stringify(medico));
    return this.http.post<Medico>(this.baseUrl+'api/Medico', medico, httpOptions).pipe(
      tap((newMedico: Medico) => this.log(`added Medico w/ id=${newMedico.id}`)),
      catchError(this.handleError<Medico>('agregarMedico')));
  }

  getAll():Observable<Medico[]>{
    return this.http.get<Medico[]>(this.baseUrl+'api/Medico').pipe(
      tap(_=>this.log('Se Consulta la información')),
      catchError(this.handleError<Medico[]>('getAll',[])));
  }

  get(id: number): Observable<Medico> {
    const url = `${this.baseUrl + 'api/Medico'}/${id}`;
    return this.http.get<Medico>(url).pipe(
      tap(_ => this.log(`fetched medico id=${id}`)),
      catchError(this.handleError<Medico>(`getHero id=${id}`)));
  }

  update (medico: Medico): Observable<any> {
    const url = `${this.baseUrl + 'api/Medico'}/${medico.id}`;
    return this.http.put(url, medico, httpOptions).pipe(
      tap(_ => this.log(`updated medico id=${medico.id}`)),
      catchError(this.handleError<any>('medico')));
  }

  delete (medico: Medico | number): Observable<Medico> {
    const id = typeof medico === 'number' ? medico : medico.id;
    const url = `${this.baseUrl + 'api/Medico'}/${id}`;
    return this.http.delete<Medico>(url, httpOptions).pipe(
      tap(_ => this.log(`deleted medico id=${id}`)),
      catchError(this.handleError<Medico>('deleteMedico'))
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
