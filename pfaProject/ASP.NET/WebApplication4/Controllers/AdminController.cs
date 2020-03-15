using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;
using Microsoft.AspNetCore.Cors;
using Microsoft.AspNetCore.Mvc;
using Microsoft.Extensions.Logging;

namespace WebApplication4.Controllers
{
    [ApiController]
    [Route("[controller]")]
    [EnableCors("EnableCORS")]
    public class AdminController : ControllerBase
    {
        private static readonly string[] fName = new[]
        {
            "Ahmed", "Omar", "Lobna", "feyez", "Hamma", "Anissa"
        };

        private static readonly string[] lName = new[]
        {
            "Lahmar", "Htiwech", "Amiri", "Frikha", "Berrich", "BenZina"
        };

        private static readonly string[] email = new[]
        {
            "Ahmed.lahmar@iit.ens.tn", "Omar@iit.ens.tn", "Lobna@iit.ens.tn", "feyez@iit.ens.tn", "Hamma@iit.ens.tn", "Anissa@iit.ens.tn"
        };

        private static readonly string[] password = new[]
        {
            "Ahmed123", "Omar123", "Lobna123", "feyez123", "Hamma123", "Anissa123"
        };

        private readonly ILogger<AdminController> _logger;

        public AdminController(ILogger<AdminController> logger)
        {
            _logger = logger;
        }

        [HttpGet]
        public IEnumerable<User> Get()
        {
            var rng = new Random();
            return Enumerable.Range(1, 5).Select(index => new User
            {
                FirstName = fName[rng.Next(fName.Length)],
                LastName = lName[rng.Next(lName.Length)],
                Email = email[rng.Next(email.Length)],
                Password = password[rng.Next(password.Length)]

            })
            .ToArray();
        }
    }
}
