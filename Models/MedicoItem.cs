using System;
using Newtonsoft.Json;


///<Summary>
/// Se coloca TaskItem a la Clase en lugar de Task, porque Task es una palabra Reservada de .NetCore
/// </Summary>
/// 

namespace Proyecto.Models{
    public class MedicoItem{

        [JsonProperty("id")]
        public int Id { get; set; }

        [JsonProperty("nombre")]
        public string Nombre {get; set; }

        [JsonProperty("apellido")]
        public string Apellido { get; set; }

        [JsonProperty("direccion")]
        public string Direccion { get; set; }

        [JsonProperty("correo")]
        public string Correo {get; set;}

        [JsonProperty("contrasena")]
        public string Contrasena {get;set;}

    }
}