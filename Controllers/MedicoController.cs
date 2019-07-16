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

    public class MedicoController : ControllerBase{
        private readonly MedicoContext _context;

        public MedicoController(MedicoContext context){
            _context = context;

            if(_context.MedicoItems.Count()==0){
                _context.MedicoItems.Add(new MedicoItem{Id =131099, Nombre = "Julian", Apellido = "Mercado", Direccion = "Avenida 25", Correo = "julianmer@hotail.com", Contrasena = "rar"} );
                _context.MedicoItems.Add(new MedicoItem{Id =286455, Nombre = "maira", Apellido = "cubillan", Direccion = "Carrera 85", Correo = "cubillanmari@gmail.com", Contrasena = "rar"} );
                _context.SaveChanges();
            }

        }

        [HttpPost]
        public async Task<ActionResult<MedicoItem>> PostMedicoItem(MedicoItem item)
        {
            _context.MedicoItems.Add(item);
            await _context.SaveChangesAsync();
            return CreatedAtAction(nameof(GetMedicoItem), new { id = item.Id }, item);
        }

        [HttpPut("{id}")]
        public async Task<IActionResult> PutMedicoItem(int id, MedicoItem item)
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
        public async Task<ActionResult<IEnumerable<MedicoItem>>> GetMedicoItems()
        {
            return await _context.MedicoItems.ToListAsync();
        }

        [HttpGet("{id}")]
        public async Task<ActionResult<MedicoItem>> GetMedicoItem(int id)
        {
            var medicoItem = await _context.MedicoItems.FindAsync(id);

            if (medicoItem == null)
            {
                return NotFound();
            }
            
            return medicoItem;
        }

        [HttpDelete("{id}")]
        public async Task<IActionResult> DeleteMedicoItem(int id)
        {
            var MedicoItem = await _context.MedicoItems.FindAsync(id);

            if (MedicoItem == null)
            {
                return NotFound();
            }

            _context.MedicoItems.Remove(MedicoItem);
            await _context.SaveChangesAsync();

            return NoContent();
        }

    }
}