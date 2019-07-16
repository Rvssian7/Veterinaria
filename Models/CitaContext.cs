using Microsoft.EntityFrameworkCore;

namespace Proyecto.Models{
    public class CitaContext : DbContext{
        public CitaContext(DbContextOptions<CitaContext> options):base(options){

        }
        public DbSet<CitaItem> CitaItems {get;set;}
    }
}