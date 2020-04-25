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
    public class CandidaturesController : ControllerBase
    {
        private readonly AuthentificationContext _context;

        public CandidaturesController(AuthentificationContext context)
        {
            _context = context;
        }

        // GET: api/Candidatures
        [HttpGet]
        public async Task<ActionResult<IEnumerable<Candidature>>> GetCandidatures()
        {
            return await _context.Candidatures.Include(m => m.historique).ToListAsync();
        }

        // GET: api/Candidatures/5
        [HttpGet("{id}")]
        public async Task<ActionResult<Candidature>> GetCandidature(int id)
        {
            var candidature = await _context.Candidatures.FindAsync(id);

            if (candidature == null)
            {
                return NotFound();
            }

            return candidature;
        }

        // PUT: api/Candidatures/5
        // To protect from overposting attacks, enable the specific properties you want to bind to, for
        // more details, see https://go.microsoft.com/fwlink/?linkid=2123754.
        [HttpPut("{id}")]
        public async Task<IActionResult> PutCandidature(int id, [FromBody]Candidature candidature)
        {
            if (id != candidature.Id)
            {
                return BadRequest();
            }

            _context.Entry(candidature).State = EntityState.Modified;

            try
            {
                await _context.SaveChangesAsync();
            }
            catch (DbUpdateConcurrencyException)
            {
                if (!CandidatureExists(id))
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

        // POST: api/Candidatures
        // To protect from overposting attacks, enable the specific properties you want to bind to, for
        // more details, see https://go.microsoft.com/fwlink/?linkid=2123754.
        [HttpPost]
        public async Task<ActionResult<Candidature>> PostCandidature([FromBody]Candidature candidature)
        {
            _context.Candidatures.Add(candidature);
            await _context.SaveChangesAsync();

            return CreatedAtAction("GetCandidature", new { id = candidature.Id }, candidature);
        }

        // DELETE: api/Candidatures/5
        [HttpDelete("{id}")]
        public async Task<ActionResult<Candidature>> DeleteCandidature(int id)
        {
            var candidature = await _context.Candidatures.FindAsync(id);
            if (candidature == null)
            {
                return NotFound();
            }

            _context.Candidatures.Remove(candidature);
            await _context.SaveChangesAsync();

            return candidature;
        }

        private bool CandidatureExists(int id)
        {
            return _context.Candidatures.Any(e => e.Id == id);
        }
    }
}
