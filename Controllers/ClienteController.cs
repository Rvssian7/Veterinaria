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

    public class ClienteController : ControllerBase{
        private readonly ClienteContext _context;

        public ClienteController(ClienteContext context){
            _context = context;

            if(_context.ClienteItems.Count()==0){
                _context.ClienteItems.Add(new ClienteItem{Id =131099, Nombre = "ariana", Apellido = "bolaño", Telefono = "30165165", Correo = "ari@hotail.com",NombreMascota="peluza", Edad=3, Raza="pincher"} );
                _context.ClienteItems.Add(new ClienteItem{Id =286455, Nombre = "mario", Apellido = "gonzalve", Telefono = "31813515", Correo = "gonza@hotail.com",NombreMascota="peluza", Edad=1, Raza="bulldog"} );
                _context.SaveChanges();
            }

        }

        [HttpPost]
        public async Task<ActionResult<ClienteItem>> PostClienteItem(ClienteItem item)
        {
            _context.ClienteItems.Add(item);
            await _context.SaveChangesAsync();
            return CreatedAtAction(nameof(GetClienteItem), new { id = item.Id }, item);
        }

        [HttpPut("{id}")]
        public async Task<IActionResult> PutClienteItem(int id, ClienteItem item)
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
        public async Task<ActionResult<IEnumerable<ClienteItem>>> GetClienteItems()
        {
            return await _context.ClienteItems.ToListAsync();
        }

        [HttpGet("{id}")]
        public async Task<ActionResult<ClienteItem>> GetClienteItem(int id)
        {
            var ClienteItem = await _context.ClienteItems.FindAsync(id);

            if (ClienteItem == null)
            {
                return NotFound();
            }
            
            return ClienteItem;
        }

        [HttpDelete("{id}")]
        public async Task<IActionResult> DeleteClienteItem(int id)
        {
            var ClienteItem = await _context.ClienteItems.FindAsync(id);

            if (ClienteItem == null)
            {
                return NotFound();
            }

            _context.ClienteItems.Remove(ClienteItem);
            await _context.SaveChangesAsync();

            return NoContent();
        }

    }
}