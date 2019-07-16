using System;
using Newtonsoft.Json;


///<Summary>
/// Se coloca TaskItem a la Clase en lugar de Task, porque Task es una palabra Reservada de .NetCore
/// </Summary>
/// 

namespace Proyecto.Models{
    public class CitaItem{

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

        [JsonProperty("fecha")]
        public string Fecha {get; set;}


    }

}
    