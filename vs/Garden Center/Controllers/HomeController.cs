using System.IO;
using System.Collections.Generic;
using System.Diagnostics;
using System.Linq;
using System.Threading.Tasks;
using Microsoft.AspNetCore.Mvc;
using Garden_Center.Models;
using Garden_Center.Data_Access;

namespace Garden_Center.Controllers
{
    public class HomeController : Controller
    {
        public IActionResult Index()
        {
            // Return the frontend page
            var file = Path.Combine(Directory.GetCurrentDirectory(),
                "wwwroot", "index.html");
            return PhysicalFile(file, "text/html");
        }

        [ResponseCache(Duration = 0, Location = ResponseCacheLocation.None, NoStore = true)]
        public IActionResult Error()
        {
            return View(new ErrorViewModel { RequestId = Activity.Current?.Id ?? HttpContext.TraceIdentifier });
        }
    }
}
