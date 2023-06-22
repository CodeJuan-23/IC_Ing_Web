export class PersonaModel {
    id: number;
    dni: string | null;
    nombre: string | null;
    apPaterno: string | null;
    apMaterno: string | null;
    fechaNacimiento: string | null;
    constructor(){
        this.id = 0
    this.dni = "";
    this.nombre = "";
    this.apPaterno = "";
    this.apMaterno = "";


    this.fechaNacimiento = "1900-00-00T00:00:00";
    
    }
}
