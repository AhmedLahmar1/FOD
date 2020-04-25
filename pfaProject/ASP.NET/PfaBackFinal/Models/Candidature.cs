using System;
using System.ComponentModel.DataAnnotations;

namespace HdBackApp.Models
{
    public class Candidature
    {
        [Key]
        public int Id { get; set; }
        public Candidat Candidat { get; set; }
        public int CandidatId { get; set; }
        public string Offre { get; set; }
        public DateTime DateCandidature { get; set; }
        public   Historique historique { get; set; }

        public Candidature()
        {
            historique = new Historique();
        }
    }
}