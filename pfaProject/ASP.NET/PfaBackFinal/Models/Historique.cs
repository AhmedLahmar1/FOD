using System.ComponentModel.DataAnnotations.Schema;

namespace HdBackApp.Models
{
    public class Historique
    {
        public int Id { get; set; }
        public string TestRH { get; set; }
        public string TestTechnique { get; set; }
        public string TestPsycho { get; set; }
        public    Candidature Candidature { get; set; }
        public   int CandidatureId { get; set; }
    }
}