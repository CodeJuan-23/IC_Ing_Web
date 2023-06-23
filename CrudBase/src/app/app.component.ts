import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
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

  myForm:FormGroup;

  constructor(
    private fb:FormBuilder,
    private _personaService: PersonaService
  ) {
      this.myForm = this.fb.group({
      id: [0, [Validators.required]],
      dni: [null, [Validators.required, Validators.maxLength(15), Validators.minLength(8), Validators.pattern('[0-9]')]],
      nombre: [null, [Validators.required]],
      apPaterno: [null, [Validators.required]],
      apMaterno: [null, [Validators.required]],
      fechaNacimiento: [null, [Validators.required]],

      })
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
    this.myForm.reset();
    this.myForm.get("id")?.setValue(0);
    //console.log("hizo clic en Agregar");
  }

  Editar(obj: PersonaModel)
  {
    this.accion = 2;
    this.title = "EDITAR PERSONA";
    // Esto funciona con ngModel
    // this.personaSeleccionada = obj;

    // reactive forms
    this.myForm.patchValue(obj);
    // console.log("Editar ==>", obj);
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
    this.personaSeleccionada = this.myForm.getRawValue();
    //console.log(this.personaSeleccionada);

    if(this.accion == 1) // ==> nueva persona
    {
        this.crearPersona();
    }
    if(this.accion == 2) // ==> actualizar persona
    {
      this.actualizarPersona();
    }
    
  }

  crearPersona(){

    this._personaService.Crear(this.personaSeleccionada).subscribe({
      next: (data: PersonaModel) => {

          alert("Registro creado de forma satisfactoria");
       },
      error: (err) => {
         alert("HORRORRRRRRRRRRRRRRRRRRRRRRR");
       },
      complete: () => { 
        this.ListarPersonas();
        this.accion = 0;
      }

    });	

  }

  actualizarPersona(){

    this._personaService.Actualizar(this.personaSeleccionada).subscribe({
      next: (data: PersonaModel) => {

          alert("Registro actualizado de forma satisfactoria");
       },
      error: (err) => { 
        alert("HORRORRRRRRRRRRRRRRRRRRRRRRR");
      },
      complete: () => {
        this.ListarPersonas();
        this.accion = 0;
       }

    });	

  }

}
