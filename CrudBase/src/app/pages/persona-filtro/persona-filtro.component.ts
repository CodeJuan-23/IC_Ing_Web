import { Component, EventEmitter, Output } from '@angular/core';
import { PersonFilterRequest } from 'src/app/Models/person-filter-request.model';

@Component({
  selector: 'app-persona-filtro',
  templateUrl: './persona-filtro.component.html',
  styleUrls: ['./persona-filtro.component.scss']
})
export class PersonaFiltroComponent {

  //variable de salida
  @Output() EnviarFiltroEmmit = new EventEmitter<PersonFilterRequest>();

  filter:PersonFilterRequest = new PersonFilterRequest();
  
  limpiarFiltro()
  {
    this.filter.dni="";
    this.filter.nombreCompleto="";

  }

    buscarPorFiltro(){
      this.EnviarFiltroEmmit.emit(this.filter);
      // this.ListarPersonas();
    } 
  

}


