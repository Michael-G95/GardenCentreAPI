using Garden_Center.Models;
using Garden_Center.Models.Database;
using MongoDB.Driver;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;

namespace Garden_Center.Data_Access
{
    public class DbService
    {
        public readonly OrderDbService Order;
        public readonly PlantDbService Plant;
        public DbService(IOrdersDatabaseSettings dbSettings)
        {
            // Use settings injected from config file to set up database connection
            MongoClient client=null;
            IMongoDatabase database=null;
            try
            {
                client = new MongoClient(dbSettings.ConnectionString);
                database = client.GetDatabase(dbSettings.DatabaseName);
            }
            catch (Exception)
            {
                // Can't start server - must be able to set up DB connection
                Environment.Exit(-1);
            }
            
            // Create the Order and Plant services with an IMongoCollection for the order and plant respectively
            Order =  new OrderDbService (database.GetCollection<Order>(dbSettings.OrdersCollectionName));
            Plant = new PlantDbService(database.GetCollection<Plant>(dbSettings.PlantsCollectionName));
        }

        
    }
}
