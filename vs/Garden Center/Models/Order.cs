using System;
using System.Collections.Generic;
using System.ComponentModel.DataAnnotations;
using System.Linq;
using System.Threading.Tasks;

using MongoDB.Bson;
using MongoDB.Bson.Serialization.Attributes;

namespace Garden_Center.Models
{
    public class Order
    // Model class to use data for Orders
    {
        [BsonId]
        [BsonRepresentation(BsonType.ObjectId)]

        public string Id { get; set; }
        [Required]
        public string CustomerName { get; set; }
        [Required]
        public string CustomerEmail { get; set; }

        public string InvoiceNumber { get; set; }
        [Required]
        public bool? OrderCompleted { get; set; }

        public List<OrderItem> Items { get; set; }
    }
}
