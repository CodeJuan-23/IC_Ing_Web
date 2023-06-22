import { Component, OnInit } from '@angular/core';
import { PersonaModel } from './Models/persona.models';
import { PersonaService } from './services/persona.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent implements OnInit {
  title = 'CrudBase';

  personas: PersonaModel[] = [];

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
    console.log("hizo clic en Agregar");
  }

  Editar()
  {
    console.log("hizo clic en Editar");
  }
  
  Eliminar()
  {
     console.log("hizo clic en Eliminar");
  }

}
