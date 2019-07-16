using Microsoft.AspNetCore.Mvc;
using Microsoft.EntityFrameworkCore;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;
using Proyecto.Models;

namespace Proyecto.Controllers
{
    [Route("api/[controller]")]
    [ApiController]
     public class CitaController : ControllerBase{
         private readonly CitaContext _context;

         public CitaController(CitaContext context){

             _context = context;

             if(_context.CitaItems.Count()==0){
                 _context.CitaItems.Add(new CitaItem{Id =131099, Nombre = "juyi", Apellido = "bolaño", Telefono = "30165165", Correo = "ari@hotail.com",Fecha="12/SEP/2019"} );
                _context.CitaItems.Add(new CitaItem{Id =286455, Nombre = "cheyo", Apellido = "gonzalve", Telefono = "31813515", Correo = "gonza@hotail.com",Fecha="10/AGO/2019"} );
                _context.SaveChanges();
             }
         }

         [HttpPost]
        public async Task<ActionResult<CitaItem>> PostCitaItem(CitaItem item)
        {
            _context.CitaItems.Add(item);
            await _context.SaveChangesAsync();
            return CreatedAtAction(nameof(GetCitaItem), new { id = item.Id }, item);
        }

        [HttpPut("{id}")]
        public async Task<IActionResult> PutCitaItem(int id, CitaItem item)
        {
            if (id != item.Id)
            {
                return BadRequest();
            }
            _context.Entry(item).State = EntityState.Modified;
            await _context.SaveChangesAsync();
            return NoContent();
        }

        [HttpGet]
        public async Task<ActionResult<IEnumerable<CitaItem>>> GetCitaItems()
        {
            return await _context.CitaItems.ToListAsync();
        }

        [HttpGet("{id}")]
        public async Task<ActionResult<CitaItem>> GetCitaItem(int id)
        {
            var CitaItem = await _context.CitaItems.FindAsync(id);

            if (CitaItem == null)
            {
                return NotFound();
            }
            
            return CitaItem;
        }

        [HttpDelete("{id}")]
        public async Task<IActionResult> DeleteCitaItem(int id)
        {
            var CitaItem = await _context.CitaItems.FindAsync(id);

            if (CitaItem == null)
            {
                return NotFound();
            }

            _context.CitaItems.Remove(CitaItem);
            await _context.SaveChangesAsync();

            return NoContent();
        }


     }

}