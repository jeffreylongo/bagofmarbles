using bagofmarbles.Models;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Net;
using System.Net.Http;
using System.Web.Http;

namespace bagofmarbles.Controllers
{
    public class MarblesController : ApiController
    {
        [HttpGet]
        public IHttpActionResult Get()
        {
            return Ok(new { Hello = "world" });
        }

        [HttpPost]
        public IHttpActionResult AddMarble(Marble marble)
        {
            marble.Id = new Random().Next(0, 100);
            marble.Color = "red";
            return Ok(marble);
        }
    }
}
