import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { PersonFilterRequest } from '../Models/person-filter-request.model';
import { PersonFilterResponse } from '../Models/person-filter-response.model';
import { PersonaModel } from '../Models/persona.models';


@Injectable({
  providedIn: 'root'
})
export class PersonaService {

  private url:string = "https://localhost:7299/api/Persona";
  constructor(
    private http: HttpClient
  ) { }

  ListarTodo(): Observable<PersonaModel[]> {
    return this.http.get<PersonaModel[]>(this.url);
   }
   
  ListarPorId(id: number) {
    // https://localhost:7299/api/Persona/id
    // this.url + id.toString()
    // `${this.url}/id`

    return this.http.get(`${this.url}/${id}`);
  }

  Crear(request: PersonaModel): Observable<PersonaModel>{
    return this.http.post<PersonaModel>(this.url, request);
  }

  Actualizar(request: PersonaModel): Observable<PersonaModel> {
    return this.http.put<PersonaModel>(this.url, request);
  }
  
  Eliminar(id: number) {
    // https://localhost:7299/api/Persona/id
    // this.url + id.toString()
    // `${this.url}/id`

    return this.http.delete(`${this.url}/${id}`);
  }

  ListarPorFiltro(filter:PersonFilterRequest):Observable<PersonFilterResponse>
  {
    return this.http.post<PersonFilterResponse>
    (
      
      `${this.url}/filter`,
       filter);
  }
}
