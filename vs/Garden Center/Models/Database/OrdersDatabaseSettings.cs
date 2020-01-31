using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;

namespace Garden_Center.Models.Database
{
    public class OrdersDatabaseSettings : IOrdersDatabaseSettings
    {
        public string OrdersCollectionName { get; set; }
        public string PlantsCollectionName { get; set; }
        public string ConnectionString { get; set; }
        public string DatabaseName { get; set; }
    }

    public interface IOrdersDatabaseSettings
    {
        string OrdersCollectionName { get; set; }
        string PlantsCollectionName { get; set; }
        string ConnectionString { get; set; }
        string DatabaseName { get; set; }
    }
}
