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
    public class VacunaController : ControllerBase{
        private readonly VacunaContext _context;

        public VacunaController(VacunaContext context){

            _context = context;

            if(_context.VacunaItems.Count()==0){
                _context.VacunaItems.Add(new VacunaItem{Id =131099, Nombre = "Julian", Apellido = "Mercado", NombreVacuna = "rubiola", Telefono = "30651651", Fecha = "12/Ago/2019"} );
                _context.VacunaItems.Add(new VacunaItem{Id =286455, Nombre = "maira", Apellido = "cubillan", NombreVacuna = "garrapata", Telefono = "3216546", Fecha = "13/Ago/2019"} );
                _context.SaveChanges();
            }

        }

        [HttpPost]
        public async Task<ActionResult<VacunaItem>> PostVacunaItem(VacunaItem item)
        {
            _context.VacunaItems.Add(item);
            await _context.SaveChangesAsync();
            return CreatedAtAction(nameof(GetVacunaItem), new { id = item.Id }, item);
        }

        [HttpPut("{id}")]
        public async Task<IActionResult> PutVacunaItem(int id, VacunaItem item)
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
        public async Task<ActionResult<IEnumerable<VacunaItem>>> GetVacunaItems()
        {
            return await _context.VacunaItems.ToListAsync();
        }

        [HttpGet("{id}")]
        public async Task<ActionResult<VacunaItem>> GetVacunaItem(int id)
        {
            var VacunaItem = await _context.VacunaItems.FindAsync(id);

            if (VacunaItem == null)
            {
                return NotFound();
            }
            
            return VacunaItem;
        }

        [HttpDelete("{id}")]
        public async Task<IActionResult> DeleteVacunaItem(int id)
        {
            var VacunaItem = await _context.VacunaItems.FindAsync(id);

            if (VacunaItem == null)
            {
                return NotFound();
            }

            _context.VacunaItems.Remove(VacunaItem);
            await _context.SaveChangesAsync();

            return NoContent();
        }


    }

}