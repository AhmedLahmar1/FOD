using System;
using System.Collections.Generic;

namespace HdBackApp.Models
{
    public partial class Candidat
    {
        public int IdCandidat { get; set; }
        public string NomCandidat { get; set; }
        public string PrenomCandidat { get; set; }
        public DateTime? DateNaissance { get; set; }
        public string EmailCandidat { get; set; }
        public string TelephoneCandidat { get; set; }
        public string VilleCandidat { get; set; }
        public string PaysCandidat { get; set; }
    }
}
