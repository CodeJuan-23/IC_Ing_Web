using System;
using System.Collections.Generic;

namespace ApiBasica.Models.DBEjemplo;

/// <summary>
/// Tabla para registrar personas
/// </summary>
public partial class Persona
{
    public int Id { get; set; }

    public string Dni { get; set; }

    public string? Nombre { get; set; }

    public string? ApPaterno { get; set; }

    public string? ApMaterno { get; set; }

    public DateOnly? FechaNacimiento { get; set; }
}
