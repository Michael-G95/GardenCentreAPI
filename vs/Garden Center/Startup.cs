    using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;
using Garden_Center.Data_Access;
using Garden_Center.Models.Database;
using Microsoft.AspNetCore.Authentication.JwtBearer;
using Microsoft.AspNetCore.Authorization;
using Microsoft.AspNetCore.Builder;
using Microsoft.AspNetCore.Hosting;
using Microsoft.AspNetCore.Http;
using Microsoft.AspNetCore.HttpsPolicy;
using Microsoft.AspNetCore.Mvc;
using Microsoft.EntityFrameworkCore;
using Microsoft.Extensions.Configuration;
using Microsoft.Extensions.DependencyInjection;
using Microsoft.Extensions.Options;

namespace Garden_Center
{
    public class Startup
    {
        public Startup(IConfiguration configuration, IHostingEnvironment appEnv)
        {
            Configuration = configuration;
            currentEnvironment = appEnv;
        }

        public IConfiguration Configuration { get; }
        public IHostingEnvironment currentEnvironment { get; }

        readonly string MyAllowSpecificOrigins = "_myAllowSpecificOrigins";

        // This method gets called by the runtime. Use this method to add services to the container.
        public void ConfigureServices(IServiceCollection services)
        {
            services.AddCors(options =>
            {
                options.AddPolicy(MyAllowSpecificOrigins,
                builder =>
                {
                    builder.AllowAnyOrigin()
                    .AllowAnyMethod()
                    .AllowAnyHeader();
                    
                });
            });

            services.Configure<CookiePolicyOptions>(options =>
            {
                // This lambda determines whether user consent for non-essential cookies is needed for a given request.
                options.CheckConsentNeeded = context => false; // Only authentication token will be stored in local storage - permission is not needed for this essential cookie.
                options.MinimumSameSitePolicy = SameSiteMode.None;
                
            });
            // If this has been set to testing, use the test DB so tests don't break or alter production DB data.
            
            services.AddMvc().SetCompatibilityVersion(CompatibilityVersion.Version_2_1);

           

            // Add the databases
            services.Configure<OrdersDatabaseSettings>(
                    Configuration.GetSection(nameof(OrdersDatabaseSettings))
                    );

            services.AddSingleton<IOrdersDatabaseSettings>(sp =>
                    sp.GetRequiredService<IOptions<OrdersDatabaseSettings>>().Value
                    );

            services.AddSingleton<DbService>();

        }

        // This method gets called by the runtime. Use this method to configure the HTTP request pipeline.
        public void Configure(IApplicationBuilder app, IHostingEnvironment env)
        {
            

            if (env.IsDevelopment())
            {
                app.UseDeveloperExceptionPage();
            }
            else
            {
                app.UseExceptionHandler("/Home/Error"); // Link to error page
                app.UseHsts();
            }
            app.UseAuthentication();
            app.UseHttpsRedirection();
            app.UseStaticFiles();
            app.UseCookiePolicy();
            
            app.UseMvc(routes =>
            {
                routes.MapRoute(
                    name: "default",
                    template: "{controller=Home}/{action=Index}/{id?}"); // Mapping the route to allow user to access home page 

            });
            app.UseCors(MyAllowSpecificOrigins);



        }
    }
}
