using System;
using Newtonsoft.Json;


///<Summary>
/// Se coloca TaskItem a la Clase en lugar de Task, porque Task es una palabra Reservada de .NetCore
/// </Summary>
/// 

namespace Proyecto.Models{
    public class VacunaItem{

        [JsonProperty("id")]
        public int Id { get; set; }

        [JsonProperty("nombre")]
        public string Nombre {get; set; }

        [JsonProperty("apellido")]
        public string Apellido { get; set; }

        [JsonProperty("nombreVacuna")]
        public string NombreVacuna { get; set; }

        [JsonProperty("telefono")]
        public string Telefono {get; set;}

        [JsonProperty("fecha")]
        public string Fecha {get;set;}
    }
}