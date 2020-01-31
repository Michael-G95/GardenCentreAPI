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
using Newtonsoft.Json;
using Microsoft.AspNetCore.Authorization;
using Garden_Center.Models.Database;
using MongoDB.Driver;

namespace Garden_Center.Controllers
{
    [Route("api/[controller]")]
    [ApiController]
    public class OrdersController : ControllerBase
    {
        private readonly DbService _dbService;
        public OrdersController(DbService orderService)
        {
            // set _orderService to the injected OrderService
            _dbService = orderService;
            
        }

        [HttpGet]
        public IActionResult GetAllOrders()
        {
            try
            {
                // Get all orders
                var orders = _dbService.Order.Get().ToArray();

                // Return 200 OK with data 
                return Ok(orders);
            }
            catch (MongoException)
            {
                // Database error
                return StatusCode(StatusCodes.Status503ServiceUnavailable);
            }
            catch (FormatException)
            {
                return BadRequest();
            }
            catch (Exception)
            {
                // Other uncaught error
                return StatusCode(StatusCodes.Status500InternalServerError);
            }
        }
        [HttpGet("{id}")]

        public IActionResult GetOrder([FromRoute] string id)
        {
            if (!ModelState.IsValid)
            {
                // id is invalid
                return BadRequest(ModelState);
            }
            try
            {
                // Find the order, 
                var order = _dbService.Order.Get(id);
                if (order == null)
                {
                    // ID not found
                    return NotFound();
                }
                else
                {
                    //Convert to json and send with 200 OK
                    return Ok(order);
                }
            }
            catch (MongoException)
            {
                return StatusCode(StatusCodes.Status503ServiceUnavailable);
            }
            catch (FormatException)
            {
                return BadRequest();
            }
            catch (Exception)
            {
                return StatusCode(StatusCodes.Status500InternalServerError);
            }
        }

        [HttpPost]

        public IActionResult PostOrder([FromBody] Order order)
        {
            if (!ModelState.IsValid)
            {
                // Some field of plant is invalid- send 400 bad req with data on what fields are invalid
                return BadRequest(ModelState);
            }

            try
            {
                _dbService.Order.Create(order);
                return CreatedAtAction("GetOrder", new { id = order.Id });
            }
            catch (MongoException e)
            {
                return StatusCode(StatusCodes.Status503ServiceUnavailable);
            }
            catch (FormatException)
            {
                return BadRequest();
            }
            catch (Exception)
            {
                return StatusCode(StatusCodes.Status500InternalServerError);
            }

        }

        [HttpDelete("{id}")]

        public IActionResult DeleteOrder([FromRoute] string id)
        {
            if (!ModelState.IsValid)
            {
                // Some field of plant is invalid- send 400 bad req with data on what fields are invalid
                return BadRequest(ModelState);
            }

            try
            {
                var order = _dbService.Order.Get(id);
                if (order == null)
                {
                    return NotFound();
                }

                _dbService.Order.Remove(id);
                return NoContent();
            }
            catch (MongoException)
            {
                return StatusCode(StatusCodes.Status503ServiceUnavailable);
            }
            catch (FormatException)
            {
                return BadRequest();
            }
            catch (Exception)
            {
                return StatusCode(StatusCodes.Status500InternalServerError);
            }
        }

        [HttpPut("{id}")]

        public IActionResult PutOrder([FromRoute] string id, [FromBody] Order order)
        {
            if (!ModelState.IsValid || order.Id != id)
            {
                // Some field of plant is invalid- send 400 bad req with data on what fields are invalid
                return BadRequest(ModelState);
            }

            try
            {
                _dbService.Order.Update(order);
                return NoContent();
            }
            catch (DbUpdateConcurrencyException)
            {
                return StatusCode(StatusCodes.Status500InternalServerError); // Something has updated the DB and removed the plant since it was loaded into memory
            }
            catch (MongoException)
            {
                return StatusCode(StatusCodes.Status503ServiceUnavailable);
            }
            catch (FormatException)
            {
                return BadRequest();
            }
            catch (Exception)
            {
                return StatusCode(StatusCodes.Status500InternalServerError);
            }
        }

        [HttpPost("{id}")]
        public IActionResult PostOrderItem([FromRoute] string Id,[FromBody] OrderItem orderItem)
        {
            if (!ModelState.IsValid)
            {
                // Some field of plant is invalid- send 400 bad req with data on what fields are invalid
                return BadRequest(ModelState);
            }

            // Try to find the item to ensure exists
            var order = _dbService.Order.Get(Id);

            if (order == null)
            {
                return NotFound();
            }
            try
            {
                // Add the order Item
                _dbService.Order.AddItem(order, orderItem);
                return NoContent();
            }
            catch (DbUpdateConcurrencyException)
            {
                return StatusCode(StatusCodes.Status500InternalServerError); // Something has updated the DB and removed the plant since it was loaded into memory
            }
            catch (MongoException)
            {
                return StatusCode(StatusCodes.Status503ServiceUnavailable);
            }
            catch (FormatException)
            {
                return BadRequest();
            }
            catch (Exception)
            {
                return StatusCode(StatusCodes.Status500InternalServerError);
            }
        }


    }
}