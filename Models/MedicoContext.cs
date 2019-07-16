using Microsoft.EntityFrameworkCore;

namespace Proyecto.Models{
    public class MedicoContext : DbContext{
        public MedicoContext(DbContextOptions<MedicoContext> options):base(options){

        }
        public DbSet<MedicoItem> MedicoItems {get;set;}
    }
}