﻿using bagofmarbles.Models;
using System;
using System.Collections.Generic;
using System.Data.Entity;
using System.Linq;
using System.Web;

namespace bagofmarbles.DataContext
{
    public class MarbleContext :DbContext
    {
        public DbSet<Marble> Marbles { get; set; }
    }
}