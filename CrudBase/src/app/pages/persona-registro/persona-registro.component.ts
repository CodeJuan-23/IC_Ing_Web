import { Component } from '@angular/core';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';
import { PersonaService } from 'src/app/services/persona.service';

@Component({
  selector: 'app-persona-registro',
  templateUrl: './persona-registro.component.html',
  styleUrls: ['./persona-registro.component.scss']
})
export class PersonaRegistroComponent {
  
  title: string="";
  accion: number = 1; /* * FIXME: 1 ==> crear || 2 para editar */
  
  myForm:FormGroup;
  constructor(
    private fb:FormBuilder,
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

    Cancelar()
    {

    }

    guardar()
    {

    }
    

  }
