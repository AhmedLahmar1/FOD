using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;
using HindiBackApp.Models;
using Microsoft.AspNetCore.Http;
using Microsoft.AspNetCore.Identity;
using Microsoft.AspNetCore.Mvc;

namespace HindiBackApp.Controllers
{
    [Route("api/[controller]")]
    [ApiController]
    public class ApplicationUserController : ControllerBase
    {
        private UserManager<HindiBackApp.Models.ApplicationUser> _userManager;
        private SignInManager<HindiBackApp.Models.ApplicationUser> _singInManager;

        public ApplicationUserController(UserManager<Models.ApplicationUser> userManager, SignInManager<HindiBackApp.Models.ApplicationUser> signInManager)
        {
            this._userManager = userManager;
            this._singInManager = signInManager;
        }

        [HttpPost]
        [Route("Register")]
        //POST : /api/ApplicationUser/Register
        public async Task<Object> PostApplicationUser(ApplicationUserModel model)
        {
            var applicationUser = new ApplicationUser()
            {
                UserName = model.UserName,
                Email = model.Email,
                FullName = model.FullName
            };

            try
            {
                var result = await _userManager.CreateAsync(applicationUser, model.Password);
                return Ok(result);
            }
            catch (Exception ex)
            {

                throw ex;
            }
        }
    }
}