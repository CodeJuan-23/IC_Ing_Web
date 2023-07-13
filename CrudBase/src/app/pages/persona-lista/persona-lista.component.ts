import { Component, OnInit, TemplateRef } from '@angular/core';
import { BsModalRef, BsModalService } from 'ngx-bootstrap/modal';
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
  accion: number = 0;
  personaSeleccionada:PersonaModel = new PersonaModel();
  titleModal:string = "";
  modalRef?: BsModalRef;
  load: boolean = false;

  constructor(
    private modalService: BsModalService,
    private _personaService: PersonaService
  ) {
      

    }


  ngOnInit(): void {
    this.ListarPersonas();
  }

  ListarPersonas() {
    this.load = true;
    this._personaService.ListarPorFiltro(this.filter).subscribe({
      next: (data: PersonFilterResponse) => {
        this.personas = data.personas;
        this.totalRecords = data.totalRegistros;
       },
      error: (err) => { 
        this.load = false;
        },
      complete: () => { 
        setTimeout(() => {
          this.load = false;
        }, 1000);
        }
    });	
  }



  Eliminar(id: number)
  {
     //console.log("Eliminar id: ", id);

     this._personaService.Eliminar(id).subscribe({
      next: (data: any) => {
        alert("Registro Eliminado de forma satisfactoria");
       },
      error: (err) => { },
      complete: () => {
        this.ListarPersonas();
       }

    });	

  }

  cambioPagina (event:PageChangedEvent){
    //debugger;
    this.filter.pagina = event.page;
    this.ListarPersonas();
  }

  Nuevo(template: TemplateRef<any>)
  {
    this.personaSeleccionada = new PersonaModel();
    this.accion = 1;
    this.titleModal = "NUEVA PERSONA";
    this.openModal(template);
    //this.myForm.reset();
    //this.myForm.get("id")?.setValue(0);
    //console.log("hizo clic en Agregar");
  }

  Editar(obj:PersonaModel, template: TemplateRef<any>){
    this.accion = 2;
    this.titleModal = "EDITAR PERSONA";
    this.personaSeleccionada = obj;
    this.openModal(template);
  }

  openModal(template: TemplateRef<any>) {
    this.modalRef = this.modalService.show(template);
  }

  cerrarModal(res: boolean)
  {
      this.modalRef?.hide();

      if(res)
      {
        this.ListarPersonas();
      }
  }

  recibirfiltro(filterRequest: PersonFilterRequest)
  {
    this.filter = new PersonFilterRequest();
    this.filter.dni = filterRequest.dni;
    this.filter.nombreCompleto = filterRequest.nombreCompleto;
    this.ListarPersonas();
  }
  
}
