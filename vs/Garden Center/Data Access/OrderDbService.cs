using Garden_Center.Models;
using MongoDB.Driver;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;

namespace Garden_Center.Data_Access
{
    
    public class OrderDbService
    {
        private readonly IMongoCollection<Order> _orders;
        /**
         * Class to interact with the Plants collection
         * Provides acessor methods for CRUD operations
         */

        public OrderDbService(IMongoCollection<Order> orders)
        {
            _orders = orders;
           
        }
        public List<Order> Get()
        {
            return _orders.Find<Order>(order => true).ToList(); // Find all orders using lambda that always resolves to true
        }
        public Order Get(string Id)
        {
            // Find order with specified Id and return it. Will return null if none found
            return _orders.Find<Order>(order => order.Id == Id).FirstOrDefault();
        }

        public Order Create(Order order)
        {
            // Add to collection and return the order. Id will be updated by insert call
            _orders.InsertOne(order);
            return order;
        }

        public List<Order> CreateMany(List<Order> orders)
        {
            // Add to collection and return the orders. Id will be updated by insert call
            _orders.InsertMany(orders);
            return orders;
        }

        public void Update(Order order)
        {
            // Find and update order
            _orders.ReplaceOne(o => o.Id == order.Id, order);
        }

        public void Remove(Order order)
        {
            // Find and delete order
            _orders.DeleteOne(o => o.Id == order.Id);
        }

        public void Remove(string Id)
        {
            // Find and delete order based on passed in Id
            _orders.DeleteOne(o => o.Id == Id);
        }

        public void AddItem(string Id, OrderItem item)
        {
            // Add an OrderItem to an order, using the Id
            var order = _orders.Find(o => Id == o.Id).FirstOrDefault();
            if (order==null)
            {
                return;
                // Not found
            }
            order.Items.Add(item);
            _orders.ReplaceOne(o => o.Id == Id, order);
        }
        public void AddItem(Order order, OrderItem item)
        {
            // Add an orderItem using the order.
            order.Items.Add(item);
            _orders.ReplaceOne(o => o.Id == order.Id, order);
        }

        public void RemoveItem(string Id,int index)
        {
            // Remove an OrderItem from an order, using the Id and index.
            var order = _orders.Find(o => Id == o.Id).FirstOrDefault();
            if (order == null)
            {
                return;
                // Not found
            }
            order.Items.RemoveAt(index);
            _orders.ReplaceOne(o => o.Id == order.Id, order);
        }

        public void RemoveItem(Order order,int index)
        {
            // Remove an OrderItem from an order, using the index.
            order.Items.RemoveAt(index);
            _orders.ReplaceOne(o => o.Id == order.Id, order);
        }
    }
}
