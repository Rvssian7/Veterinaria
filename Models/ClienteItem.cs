using System;
using Newtonsoft.Json;


///<Summary>
/// Se coloca TaskItem a la Clase en lugar de Task, porque Task es una palabra Reservada de .NetCore
/// </Summary>
/// 

namespace Proyecto.Models{
    public class ClienteItem{
        [JsonProperty("id")]
        public int Id { get; set; }

        [JsonProperty("nombre")]
        public string Nombre {get; set; }

        [JsonProperty("apellido")]
        public string Apellido { get; set; }

        [JsonProperty("telefono")]
        public string Telefono { get; set; }

        [JsonProperty("correo")]
        public string Correo {get; set;}


        [JsonProperty("nombreMascota")]
        public string NombreMascota {get;set;}

        [JsonProperty("edad")]
        public int Edad {get;set;}

        [JsonProperty("raza")]
        public string Raza {get;set;}


    }
}