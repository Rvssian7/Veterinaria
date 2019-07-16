import { Injectable,Inject } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';

import { Observable, of, observable } from 'rxjs';
import { catchError, map, tap } from 'rxjs/operators';
import { Vacuna } from '../models/vacuna';

const httpOptions = {
  headers: new HttpHeaders({ 'Content-Type': 'application/json' })
};

@Injectable({
  providedIn: 'root'
})
export class VacunaService {

  constructor(private http:HttpClient, @Inject('BASE_URL')private baseUrl:string) { }

  agregarVacuna(vacuna: Vacuna):Observable<Vacuna>{
    alert(JSON.stringify(vacuna));
    return this.http.post<Vacuna>(this.baseUrl+'api/Vacuna', vacuna, httpOptions).pipe(
      tap((newVacuna: Vacuna) => this.log(`added Vacuna w/ id=${newVacuna.id}`)),
      catchError(this.handleError<Vacuna>('agregarVacuna')));
  }

  getAll():Observable<Vacuna[]>{
    return this.http.get<Vacuna[]>(this.baseUrl+'api/Vacuna').pipe(
      tap(_=>this.log('Se Consulta la información')),
      catchError(this.handleError<Vacuna[]>('getAll',[])));
  }

  get(id: number): Observable<Vacuna> {
    const url = `${this.baseUrl + 'api/Vacuna'}/${id}`;
    return this.http.get<Vacuna>(url).pipe(
      tap(_ => this.log(`fetched vacuna id=${id}`)),
      catchError(this.handleError<Vacuna>(`getHero id=${id}`)));
  }

  update (vacuna: Vacuna): Observable<any> {
    const url = `${this.baseUrl + 'api/Vacuna'}/${vacuna.id}`;
    return this.http.put(url, vacuna, httpOptions).pipe(
      tap(_ => this.log(`updated vacuna id=${vacuna.id}`)),
      catchError(this.handleError<any>('vacuna')));
  }

  delete (vacuna: Vacuna | number): Observable<Vacuna> {
    const id = typeof vacuna === 'number' ? vacuna : vacuna.id;
    const url = `${this.baseUrl + 'api/Vacuna'}/${id}`;
    return this.http.delete<Vacuna>(url, httpOptions).pipe(
      tap(_ => this.log(`deleted vacuna id=${id}`)),
      catchError(this.handleError<Vacuna>('deleteVacuna'))
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
    alert(`VacunaService: ${message}`);
  }

}
