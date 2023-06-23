import { Component, OnInit } from '@angular/core';
import { FormGroup } from '@angular/forms';
import { PersonaModel } from './Models/persona.models';
import { PersonaService } from './services/persona.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent implements OnInit {
  title = 'titulo modal';
  personas: PersonaModel[] = [];
  accion: number = 0; /* * FIXME: 1 ==> crear || 2 para editar */
  personaSeleccionada:PersonaModel = new PersonaModel();

  //id: number = 0;
  //dni: string = "";
  //nombre: string = "";
  //apPaterno: string = "";
  //apMaterno: string = "";
  //fechaNacimiento: string = "";


  constructor(
    private _personaService: PersonaService
  ) {
      
    }
    

  //document.ready ==> evento inicial
  ngOnInit(): void {
      console.log('Inicio el event ngOnInit');
      this.ListarPersonas();
  }

  ListarPersonas()
  {
    this._personaService.ListarTodo().subscribe({
      next: (data: PersonaModel[]) => {

        this.personas = data;

       },
      error: (err) => { },
      complete: () => { }

    });	
  }

  Nuevo()
  {
    this.accion = 1;
    this.title = "NUEVA PERSONA";
    //console.log("hizo clic en Agregar");
  }

  Editar(obj: PersonaModel)
  {
    this.accion = 2;
    this.title = "EDITAR PERSONA";
    console.log("Editar ==>", obj);
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

  Cancelar(){
    this.accion = 0;
  }

  guardar()
  {
    /** CAPTURAR DATOS DEL FORMULARIO */
    console.log("capturando datos");
    //console.log("id ==> ", this.id);
    //console.log("dni ==> ", this.dni);
    //console.log("nombre ==> ", this.nombre);
    //console.log("apPaterno ==> ", this.apPaterno);
    //console.log("apMaterno ==> ", this.apMaterno);
    //console.log("fechaNacimiento ==> ", this.fechaNacimiento);
    console.log(this.personaSeleccionada);
    
  }


}
