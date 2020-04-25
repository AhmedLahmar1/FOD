using System;
using System.Collections.Generic;
using System.Collections.ObjectModel;
using System.ComponentModel.DataAnnotations;
using System.Linq;
using System.Threading.Tasks;

namespace HdBackApp.Models
{
    public class Candidat
    {
        [Key]
        public int Id { get; set; }
        public string Nom { get; set; }
        public string Prenom { get; set; }
        public  DateTime DateDeNaissanse { get; set; }
        public string Email { get; set; }
        public string Ville { get; set; }
        public int Telephone { get; set; }
        public ICollection<Candidature> candidatures { get; set; }
        public Candidat()
        {
            candidatures = new Collection<Candidature>();
        }
    }
}
