import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PersonaFiltroComponent } from './persona-filtro.component';

describe('PersonaFiltroComponent', () => {
  let component: PersonaFiltroComponent;
  let fixture: ComponentFixture<PersonaFiltroComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [PersonaFiltroComponent]
    });
    fixture = TestBed.createComponent(PersonaFiltroComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
