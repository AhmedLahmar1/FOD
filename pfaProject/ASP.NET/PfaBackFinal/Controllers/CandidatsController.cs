using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;
using Microsoft.AspNetCore.Http;
using Microsoft.AspNetCore.Mvc;
using Microsoft.EntityFrameworkCore;
using HdBackApp.Models;
using HindiBackApp.Models;

namespace HdBackApp.Controllers
{
    [Route("api/[controller]")]
    [ApiController]
    public class CandidatsController : ControllerBase
    {
        private readonly AuthentificationContext _context;

        public CandidatsController(AuthentificationContext context)
        {
            _context = context;
        }

        // GET: api/Candidats
        [HttpGet]
        public async Task<ActionResult<IEnumerable<Candidat>>> GetCandidats()
        {
            return await _context.Candidats.Include(m=>m.candidatures).ToListAsync();
        }

        // GET: api/Candidats/5
        [HttpGet("{id}")]
        public async Task<ActionResult<Candidat>> GetCandidat(int id)
        {
            var candidat = await _context.Candidats.FindAsync(id);

            if (candidat == null)
            {
                return NotFound();
            }

            return candidat;
        }

        // PUT: api/Candidats/5
        // To protect from overposting attacks, enable the specific properties you want to bind to, for
        // more details, see https://go.microsoft.com/fwlink/?linkid=2123754.
        [HttpPut("{id}")]
        public async Task<IActionResult> PutCandidat(int id, [FromBody]Candidat candidat)
        {
            
            _context.Entry(candidat).State = EntityState.Modified;

            try
            {
                await _context.SaveChangesAsync();
            }
            catch (DbUpdateConcurrencyException)
            {
                if (!CandidatExists(id))
                {
                    return NotFound();
                }
                else
                {
                    throw;
                }
            }

            return NoContent();
        }

        // POST: api/Candidats
        // To protect from overposting attacks, enable the specific properties you want to bind to, for
        // more details, see https://go.microsoft.com/fwlink/?linkid=2123754.
        [HttpPost]
        public async Task<ActionResult<Candidat>> PostCandidat([FromBody]Candidat candidat)
        {
            _context.Candidats.Add(candidat);
          await  _context.SaveChangesAsync();

            return Ok(candidat);
        }

        // DELETE: api/Candidats/5
        [HttpDelete("{id}")]
        public async Task<ActionResult<Candidat>> DeleteCandidat(int id)
        {
            var candidat = await _context.Candidats.FindAsync(id);
            if (candidat == null)
            {
                return NotFound();
            }

            _context.Candidats.Remove(candidat);
            await _context.SaveChangesAsync();

            return candidat;
        }

        private bool CandidatExists(int id)
        {
            return _context.Candidats.Any(e => e.Id == id);
        }
    }
}
