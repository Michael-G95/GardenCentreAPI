using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;
using Microsoft.AspNetCore.Http;
using Microsoft.AspNetCore.Mvc;
using Microsoft.EntityFrameworkCore;
using Garden_Center.Data_Access;
using Garden_Center.Models;
using System.Data.SqlClient;
using Microsoft.AspNetCore.Authorization;
using Microsoft.AspNetCore.Cors;
using MongoDB.Driver;

namespace Garden_Center.Controllers
{
    [Route("api/[controller]")]// Defining the route for this controller
    [ApiController]
    
    public class PlantsController : ControllerBase
    {
        internal readonly DbService _dbService;

        public PlantsController(DbService dbService)
        {
            // When the application is created, this will ensure this controller can access the database
            _dbService = dbService;
        }

        // GET: api/Plants
        [HttpGet]
        
        public IActionResult GetPlants()
        {
            // Return a list of all plants
            try
            {
                return Ok(_dbService.Plant.Get());
            }
            catch(MongoException)
            {
                return StatusCode(StatusCodes.Status503ServiceUnavailable);
            }
            catch(Exception)
            {
                return StatusCode(StatusCodes.Status500InternalServerError);
            }
            
        }

        // GET: api/Plants/id
        [HttpGet("{id}")]
        
        public IActionResult GetPlant([FromRoute] string id)
        {
            if (!ModelState.IsValid)
            {
                return BadRequest(ModelState); // the id was not an integer. This function will automatically return this information to the client
            }
            try
            {
                var plant = _dbService.Plant.Get(id); // Search for the given ID

                if (plant == null)
                {
                    return NotFound();
                }

                return Ok(plant); // Return the plant data
            }
            catch (MongoException)
            {
                return StatusCode(StatusCodes.Status503ServiceUnavailable); // Error connecting to DB
            }
            catch (FormatException)
            {
                return BadRequest();
            }
            catch (Exception)
            {
                return StatusCode(StatusCodes.Status500InternalServerError); // Other server error
            }
        }

        // PUT: api/Plants/id
        [HttpPut("{id}")]

        public IActionResult PutPlant([FromRoute] string id, [FromBody] Plant plant)
        {
            if (!ModelState.IsValid)
            {
                return BadRequest(ModelState); // The id wasn't an integer, or some part of Plant was invalid data.
            }
            else if (id != plant.Id)
            {
                return BadRequest(); // Trying to replace a plant with a plant, containing a different ID. The data of plant should be updated, never the ID
            }
            else if (_dbService.Plant.Get(id) == null)
            {
                return NotFound(); // invalid ID 
            }


            try
            {
                _dbService.Plant.Update(plant);
            }
            catch (FormatException)
            {
                return BadRequest();
            }
            catch (Exception)
            {
                return StatusCode(StatusCodes.Status500InternalServerError);
            }

            return NoContent(); // If no error, return 204 OK No content
        }

        // POST: api/Plants
        [HttpPost]

        public IActionResult PostPlant([FromBody] Plant plant)
        {
            if (!ModelState.IsValid)
            {
                return BadRequest(ModelState); // some property of plant is invalid - return 400 and information on this
            }
            try
            {
                _dbService.Plant.Create(plant);// Add plant to database
            }
            catch (MongoException)
            {
                return StatusCode(StatusCodes.Status503ServiceUnavailable); // Error connecting to database
            }
            catch (FormatException)
            {
                return BadRequest();
            }
            catch (Exception)
            {
                return StatusCode(StatusCodes.Status500InternalServerError);// Other server error
            }

            return CreatedAtAction($"/api/plant/{plant.Id}", new { id = plant.Id }); // Return 201 with the id 
        }

        // DELETE: api/Plants/id
        [HttpDelete("{id}")]
        public IActionResult DeletePlant([FromRoute] string id)
        {
            if (!ModelState.IsValid)
            {
                return BadRequest(ModelState); // ID is invalid
            }

            var plant = _dbService.Plant.Get(id);
            if (plant == null)
            {
                return NotFound(); // ID doesn't exist in database
            }
            try
            {
                _dbService.Plant.Delete(id); // Delete
            }
            catch (MongoException)
            {
                return StatusCode(StatusCodes.Status503ServiceUnavailable); // Error connecting to database
            }
            catch (FormatException)
            {
                return BadRequest();
            }
            catch (Exception)
            {
                return StatusCode(StatusCodes.Status500InternalServerError);// Other server error
            }


            return NoContent();
        }



    }
}