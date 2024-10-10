using Microsoft.AspNetCore.Mvc;
using System.Threading.Tasks;
using backend.Context;
using backend.Models;

namespace backend.Controllers
{
    [Route("api/locations")]
    [ApiController]
    public class LocationController : ControllerBase
    {
        private readonly ApplicationDbContext _context;

        public LocationController(ApplicationDbContext context)
        {
            _context = context;
        }

//commit
        // POST: api/location
        [HttpPost]
        public async Task<IActionResult> CreateLocation([FromBody] Location location)
        {
            if (location == null)
            {
                return BadRequest("Invalid location data.");
            }

            // Add the location to the database
            _context.Locations.Add(location);
            await _context.SaveChangesAsync();

            // Return a response with the created location
            return Ok(location);
        }
    }
}
