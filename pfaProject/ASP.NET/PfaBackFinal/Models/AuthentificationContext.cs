using HdBackApp.Models;
using Microsoft.AspNetCore.Identity.EntityFrameworkCore;
using Microsoft.EntityFrameworkCore;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;

namespace HindiBackApp.Models
{
    public class AuthentificationContext : IdentityDbContext
    {
        public AuthentificationContext(DbContextOptions options):base(options)
        {
            
        }

        public DbSet<ApplicationUser> ApplicationUsers { get; set; }
        public DbSet<Candidat> Candidats{ get; set; }
        public DbSet<Candidature>Candidatures{ get; set; }
        public DbSet<Historique> Historiques { get; set; }


    }
}
