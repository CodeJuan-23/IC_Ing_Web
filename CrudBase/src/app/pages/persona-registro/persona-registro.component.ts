import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';
import { PersonaModel } from 'src/app/Models/persona.models';
import { PersonaService } from 'src/app/services/persona.service';

@Component({
  selector: 'app-persona-registro',
  templateUrl: './persona-registro.component.html',
  styleUrls: ['./persona-registro.component.scss']
})
export class PersonaRegistroComponent implements OnInit{

  //@INPUT() ==> VARIABLES DE ENTRADA
  @Input() title: string = "";
  @Input() accion: number = 0; /** FIXME: 1 ==> crear || 2 para editar */ 
  @Input() persona: PersonaModel = new PersonaModel();

  //@OUTPUT() ==> VARIABLES DE SALIDA

  @Output() closeModalEmmit = new EventEmitter<boolean>();

  myForm:FormGroup;
  constructor(
    private fb: FormBuilder,
    private _personaService: PersonaService
  ) {
      this.myForm = this.fb.group({
      id: [0, [Validators.required]],
      dni: [null, [Validators.required, Validators.maxLength(15), Validators.minLength(8)]],
      nombre: [null, [Validators.required]],
      apPaterno: [null, [Validators.required]],
      apMaterno: [null, [Validators.required]],
      fechaNacimiento: [null, [Validators.required]],
      });

     // this.formFilter = this.fb.group({
     //    dni: [null, []],
     //    nombreCompleto: [null, []],
     // });

    }

    ngOnInit(): void {
      this.myForm.patchValue(this.persona);
    }

    cerrarModalRegistro(res:boolean)
    {
        this.closeModalEmmit.emit(res);
    }


    guardar()
    {
      /** CAPTURAR DATOS DEL FORMULARIO */
      //console.log("capturando datos");
      //console.log("id ==> ", this.id);
      //console.log("dni ==> ", this.dni);
      //console.log("nombre ==> ", this.nombre);
      //console.log("apPaterno ==> ", this.apPaterno);
      //console.log("apMaterno ==> ", this.apMaterno);
      //console.log("fechaNacimiento ==> ", this.fechaNacimiento);
      this.persona = this.myForm.getRawValue();
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
  
      this._personaService.Crear(this.persona).subscribe({
        next: (data: PersonaModel) => {
  
            alert("Registro creado de forma satisfactoria");
         },
        error: (err) => {
           alert("HORRORRRRRRRRRRRRRRRRRRRRRRR");
         },
        complete: () => { 
          this.cerrarModalRegistro(true);
          this.accion = 0;
        }
  
      });	
  
    }
  
    actualizarPersona(){
  
      this._personaService.Actualizar(this.persona).subscribe({
        next: (data: PersonaModel) => {
  
            alert("Registro actualizado de forma satisfactoria");
         },
        error: (err) => { 
          alert("HORRORRRRRRRRRRRRRRRRRRRRRRR");
        },
        complete: () => {
          this.cerrarModalRegistro(true);
          this.accion = 0;
         }
  
      });	
  
    }
    

  }
