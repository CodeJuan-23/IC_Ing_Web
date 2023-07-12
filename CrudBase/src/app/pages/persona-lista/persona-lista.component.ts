import { Component, OnInit } from '@angular/core';
import { PageChangedEvent } from 'ngx-bootstrap/pagination';
import { PersonFilterRequest } from 'src/app/Models/person-filter-request.model';
import { PersonFilterResponse } from 'src/app/Models/person-filter-response.model';
import { PersonaModel } from 'src/app/Models/persona.models';
import { PersonaService } from 'src/app/services/persona.service';

@Component({
  selector: 'app-persona-lista',
  templateUrl: './persona-lista.component.html',
  styleUrls: ['./persona-lista.component.scss']
})
export class PersonaListaComponent implements OnInit {
  

  personas: PersonaModel[] = [];
  totalRecords: number=0;
  currentPage: number=1;
  filter:PersonFilterRequest = new PersonFilterRequest();

  constructor(
    private _personaService: PersonaService
  ) {
      

    }


  ngOnInit(): void {
    this.ListarPersonas();
  }

  ListarPersonas() {
    this._personaService.ListarPorFiltro(this.filter).subscribe({
      next: (data: PersonFilterResponse) => {
        this.personas = data.personas;
        this.totalRecords = data.totalRegistros;
       },
      error: (err) => { },
      complete: () => { }
    });	
  }

  Nuevo()
  {
    // this.accion = 1;
    // this.title = "NUEVA PERSONA";
    // this.myForm.reset();
    // this.myForm.get("id")?.setValue(0);
    // //console.log("hizo clic en Agregar");
  }

  Editar(obj:PersonaModel)
  {

  }

  Eliminar(id: number)
  {

  }

  cambioPagina (event:PageChangedEvent){
    //debugger;
    this.filter.pagina = event.page;
    this.ListarPersonas();
  }
  
}
