import { PersonaModel } from "./persona.models";

export class PersonFilterResponse {
    totalRegistros: number;
    personas: PersonaModel[];

    constructor()
    {
        this.totalRegistros = 0;
        this.personas = [];
    }
}