 using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;
using Microsoft.AspNetCore.Http;
using Microsoft.AspNetCore.Mvc;
using Microsoft.EntityFrameworkCore;
using HdBackApp.Models;
using Microsoft.AspNetCore.Cors;

namespace HdBackApp.Controllers
{
    [Route("api/[controller]")]
    [ApiController]
   // [EnableCors("CorsPolicy")]
    public class CandidatsController : ControllerBase
    {
        private readonly UserDBContext _context;

        public CandidatsController(UserDBContext context)
        {
            _context = context;
        }

        // GET: api/Candidats
        [HttpGet]
        public async Task<ActionResult<IEnumerable<Candidat>>> GetCandidat()
        {
            return await _context.Candidat.ToListAsync();
        }

        // GET: api/Candidats/5
        [HttpGet("{id}")]
        public async Task<ActionResult<Candidat>> GetCandidat(int id)
        {
            var candidat = await _context.Candidat.FindAsync(id);

            if (candidat == null)
            {
                return NotFound();
            }

            return candidat;
        }

        // PUT: api/Candidats/5
        // To protect from overposting attacks, please enable the specific properties you want to bind to, for
        // more details see https://aka.ms/RazorPagesCRUD.
        [HttpPut("{id}")]
        public async Task<IActionResult> PutCandidat(int id, Candidat candidat)
        {
            if (id != candidat.IdCandidat)
            {
                return BadRequest();
            }

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
        // To protect from overposting attacks, please enable the specific properties you want to bind to, for
        // more details see https://aka.ms/RazorPagesCRUD.
        [HttpPost]
        public async Task<ActionResult<Candidat>> PostCandidat(Candidat candidat)
        {
            _context.Candidat.Add(candidat);
            await _context.SaveChangesAsync();

            return CreatedAtAction("GetCandidat", new { id = candidat.IdCandidat }, candidat);
        }

        // DELETE: api/Candidats/5
        [HttpDelete("{id}")]
        public async Task<ActionResult<Candidat>> DeleteCandidat(int id)
        {
            var candidat = await _context.Candidat.FindAsync(id);
            if (candidat == null)
            {
                return NotFound();
            }

            _context.Candidat.Remove(candidat);
            await _context.SaveChangesAsync();

            return candidat;
        }

        private bool CandidatExists(int id)
        {
            return _context.Candidat.Any(e => e.IdCandidat == id);
        }
    }
}
