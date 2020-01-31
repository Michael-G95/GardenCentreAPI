using Garden_Center.Models;
using MongoDB.Driver;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;

namespace Garden_Center.Data_Access
{
    public class PlantDbService
    {
        /**
         * Class to interact with the Plants collection
         * Provides acessor methods for CRUD operations
         */
      
        private readonly IMongoCollection<Plant> _plants;
        public PlantDbService(IMongoCollection<Plant> Plants)
        {
            _plants = Plants;
        }

        public List<Plant> Get() => _plants.Find(plant => true).ToList(); // Find all plants using lambda that always resolves to true

        public Plant Get(string Id) => _plants.Find(plant => plant.Id == Id).FirstOrDefault(); // Find specific plant for Id

        public Plant Create(Plant plant) // Create a plant
        {
            _plants.InsertOne(plant);
            return plant;
        }

        public void Update(Plant plant) => _plants.ReplaceOne(p => p.Id == plant.Id, plant); // Update a plant, using Id in the Plant model

        public void Delete(Plant plant) => _plants.DeleteOne(p => p.Id == plant.Id); // Delete plant, using Id in the plant model

        public void Delete(string Id) => _plants.DeleteOne(p => p.Id == Id); // Delete plant for Id

    }
}
