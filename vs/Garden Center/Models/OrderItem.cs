using MongoDB.Bson;
using MongoDB.Bson.Serialization.Attributes;
using System;
using System.Collections.Generic;
using System.ComponentModel.DataAnnotations;
using System.ComponentModel.DataAnnotations.Schema;
using System.Linq;
using System.Threading.Tasks;

namespace Garden_Center.Models
{
    public class OrderItem
    {
        [Required]
        public PlantOrderItem Plant { get; set; }
        [Required]
        public int Quantity { get; set; }
    }
}
