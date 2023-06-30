export class PersonFilterRequest{
    dni: string;
    nombreCompleto: string;
    pagina: number;
    cantidad: number;
    constructor(){
        this.dni = "";
        this.nombreCompleto ="";
        this.pagina = 1;
        this.cantidad = 2;  
    }
}