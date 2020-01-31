using System;
using System.Collections.Generic;
using System.IO;
using System.Linq;
using System.Threading.Tasks;
using Microsoft.AspNetCore.Mvc;

namespace Garden_Center.Controllers
{
    public class AppController : Controller
    {
        public IActionResult Index()
        {
            var file = Path.Combine(Directory.GetCurrentDirectory(),
                            "wwwroot", "index.html");
            return PhysicalFile(file, "text/html");
        }
    }
}