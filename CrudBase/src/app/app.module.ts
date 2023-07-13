import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { HttpClientModule } from '@angular/common/http'
import { ModalModule } from 'ngx-bootstrap/modal';

import { AppComponent } from './app.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { PaginationModule } from 'ngx-bootstrap/pagination';
import { PersonaFiltroComponent } from './pages/persona-filtro/persona-filtro.component';
import { PersonaListaComponent } from './pages/persona-lista/persona-lista.component';
import { PersonaRegistroComponent } from './pages/persona-registro/persona-registro.component';

@NgModule({
  declarations: [
    AppComponent,
    PersonaFiltroComponent,
    PersonaListaComponent,
    PersonaRegistroComponent
  ],
  imports: [
    BrowserModule,
    HttpClientModule,
    FormsModule, /* ==> [(ngModel)] */
    ReactiveFormsModule , /** ==> para implementar formularios reactivos */
    PaginationModule.forRoot(),
    ModalModule.forRoot()
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
