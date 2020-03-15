using System;
using Microsoft.EntityFrameworkCore;
using Microsoft.EntityFrameworkCore.Metadata;

namespace PfaBackFinal.Models
{
    public partial class PfaDBContext : DbContext
    {
        

        public PfaDBContext(DbContextOptions<PfaDBContext> options)
            : base(options)
        {
        }

        public virtual DbSet<User> User { get; set; }

        
        partial void OnModelCreatingPartial(ModelBuilder modelBuilder);
    }
}
