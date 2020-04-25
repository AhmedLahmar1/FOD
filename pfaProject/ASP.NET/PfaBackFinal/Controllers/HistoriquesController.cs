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
    public class HistoriquesController : ControllerBase
    {
        private readonly AuthentificationContext _context;

        public HistoriquesController(AuthentificationContext context)
        {
            _context = context;
        }

        // GET: api/Historiques
        [HttpGet]
        public async Task<ActionResult<IEnumerable<Historique>>> GetHistoriques()
        {
            return await _context.Historiques.ToListAsync();
        }

        // GET: api/Historiques/5
        [HttpGet("{id}")]
        public async Task<ActionResult<Historique>> GetHistorique(int id)
        {
            var historique = await _context.Historiques.FindAsync(id);

            if (historique == null)
            {
                return NotFound();
            }

            return historique;
        }

        // PUT: api/Historiques/5
        // To protect from overposting attacks, enable the specific properties you want to bind to, for
        // more details, see https://go.microsoft.com/fwlink/?linkid=2123754.
        [HttpPut("{id}")]
        public async Task<IActionResult> PutHistorique(int id, [FromBody]Historique historique)
        {
            if (id != historique.Id)
            {
                return BadRequest();
            }

            _context.Entry(historique).State = EntityState.Modified;

            try
            {
                await _context.SaveChangesAsync();
            }
            catch (DbUpdateConcurrencyException)
            {
                if (!HistoriqueExists(id))
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

        // POST: api/Historiques
        // To protect from overposting attacks, enable the specific properties you want to bind to, for
        // more details, see https://go.microsoft.com/fwlink/?linkid=2123754.
        [HttpPost]
        public async Task<ActionResult<Historique>> PostHistorique([FromBody] Historique historique)
        {
            _context.Historiques.Add(historique);
            await _context.SaveChangesAsync();

            return CreatedAtAction("GetHistorique", new { id = historique.Id }, historique);
        }

        // DELETE: api/Historiques/5
        [HttpDelete("{id}")]
        public async Task<ActionResult<Historique>> DeleteHistorique(int id)
        {
            var historique = await _context.Historiques.FindAsync(id);
            if (historique == null)
            {
                return NotFound();
            }

            _context.Historiques.Remove(historique);
            await _context.SaveChangesAsync();

            return historique;
        }

        private bool HistoriqueExists(int id)
        {
            return _context.Historiques.Any(e => e.Id == id);
        }
    }
}
