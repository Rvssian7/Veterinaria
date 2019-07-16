using Microsoft.EntityFrameworkCore;

namespace Proyecto.Models{
    public class VacunaContext : DbContext{
        public VacunaContext(DbContextOptions<VacunaContext> options):base(options){

        }
        public DbSet<VacunaItem> VacunaItems {get;set;}
    }
}