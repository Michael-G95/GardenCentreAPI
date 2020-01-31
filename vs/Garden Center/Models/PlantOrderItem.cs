using MongoDB.Bson;
using MongoDB.Bson.Serialization.Attributes;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;
using System.ComponentModel.DataAnnotations;
namespace Garden_Center.Models
{
    public class PlantOrderItem
    {
        [BsonId]
        [BsonRepresentation(BsonType.ObjectId)]
        [Required]
        public string Id { get; set; }
        [Required]
        public string Name { get; set; }
        [Required]
        public decimal? Price { get; set; }
        [Required]
        public string Description { get; set; }

        public PlantOrderItem(Plant plant)
        {
            // Map from a full Plant item to a PlantOrderItem
            Id = plant.Id;
            Name = plant.Name;
            Price = plant.Price;
            Description = plant.Description;
        }

        public PlantOrderItem()
        {
            // Default constructor
        }
    }

    
}
