#! /usr/bin/env node

console.log('This script populates test surfboards')

// Get arguments passed on command line
const userArgs = process.argv.slice(2);

const async = require('async')
const Surfboard = require('./models/surfboard')
const Brand = require('./models/brand')
const SurfboardInstance = require('./models/surfboardinstance')


const mongoose = require('mongoose');
mongoose.set('strictQuery', false); // Prepare for Mongoose 7

const mongoDB = userArgs[0];

main().catch(err => console.log(err));
async function main() {
  await mongoose.connect(mongoDB);
}

const brands = []
const surfboards = []
const surfboardinstances = []

function brandCreate(name, cb) {
  const brand = new Brand({ name: name });
       
  brand.save(function (err) {
    if (err) {
      cb(err, null);
      return;
    }
    console.log('New Brand: ' + brand);
    brands.push(brand)
    cb(null, brand);
  }   );
}

function surfboardCreate(name, brand, price, description, cb) {
  surfboarddetail = { 
    name: name,
    description: description,
    price: price
  }
  if (brand != false) surfboarddetail.brand = brand
    
  const surfboard = new Surfboard(surfboarddetail);    
  surfboard.save(function (err) {
    if (err) {
      cb(err, null)
      return
    }
    console.log('New Surfboard: ' + surfboard);
    surfboards.push(surfboard)
    cb(null, surfboard)
  }  );
}


function surfboardInstanceCreate(surfboard, dimensions, status, cb) {
  surfboardinstancedetail = { 
    surfboard: surfboard,
    dimensions: dimensions
  }    
  if (status != false) surfboardinstancedetail.status = status
    
  const surfboardinstance = new SurfboardInstance(surfboardinstancedetail);    
  surfboardinstance.save(function (err) {
    if (err) {
      console.log('ERROR CREATING SurfboardInstance: ' + surfboardinstance);
      cb(err, null)
      return
    }
    console.log('New SurfboardInstance: ' + surfboardinstance);
    surfboardinstances.push(surfboardinstance)
    cb(null, surfboardinstance)
  }  );
}


function createBrands(cb) {
    async.series([
        function(callback) {
          brandCreate("Lost", callback);
        },
        function(callback) {
          brandCreate("Pyzel", callback);
        },
        function(callback) {
          brandCreate("Rusty", callback);
        },
        ],
        // optional callback
        cb);
}


function createSurfboards(cb) {
    async.parallel([
        function(callback) {
          surfboardCreate('Ghost', brands[1], 825, 'The design that JJF rode to two consecutive World Titles! The Ghost is possibly the first truly High Performance board that works great for all levels of surfer and could be considered a one-board quiver for any surf trip with decent to good waves on the menu.', callback)
        },
        function(callback) {
          surfboardCreate('Highline', brands[1], 795, 'Want to maximize your surfing performance even when the waves are less than perfect? The High Line is a new High Performance Shortboard that we have developed with feedback from Jack Freestone, John & Nathan Florence, Tyler Wright, Nic Von Rupp and the majority of our junior team riders over the past year that is designed to do just that.', callback)
        },
        function(callback) {
          surfboardCreate('RNF 96', brands[0], 700, 'The RNF-’96… Having shaped multiple variations of “fish” from fall 1994 – 1995, we had created a bit of momentum with the designs. Leading into Winter ’95/’96, we had refined a basic design where we were able fine tune, replicate and re-size the original RNF (by hand) with some consistency. We continued to build small quivers for both Chris Ward and Cory Lopez and sent them everywhere, with Cory taking various versions to each stop on WQS tour.', callback)
        },
        function(callback) {
          surfboardCreate('Crowd Killer', brands[0], 700, 'The Crowd Killer is a high performance, #hyperfunboard, based off of the Quiver Killer rocker and outline. The idea was to extend it lengthwise and open up this design to a wider audience. It’s a wave catching, easy riding machine that does not skimp on performance.', callback)
        },
        function(callback) {
          surfboardCreate('Blackbird', brands[2], 810, 'The SR-71 is the fastest manned jet ever built. Blackbird is its nickname. Based on that concept we designed this board to cover ground quickly! Developed for the bigger days chasing down peaks in open waters and battling currents, it is the perfect wave-hawking weapon. It features added volume, an area-forward outline, lower entry rocker and a light vee in the nose, allowing it to paddle into anything, even in the toughest of surf conditions. With a slight single- to double-concave bottom running through the fins and rounded pintail, the Blackbird delivers smooth transitions and fast, clean lines. A heavy hitter for any arsenal!', callback)
        },
        function(callback) {
          surfboardCreate('Miso', brands[2], 800, 'The MISO is an all around board. Not a fish, but kinda fishy.', callback)
        },
        ],
        // optional callback
        cb);
}


function createSurfboardInstances(cb) {
    async.parallel([
        function(callback) {
          surfboardInstanceCreate(surfboards[0], "Size: 6'0, Width: 19 1/2, Thickness: 2 3/16, Volume: 34L", 'Available', callback)
        },
        function(callback) {
          surfboardInstanceCreate(surfboards[0], "Size: 6'0, Width: 19 1/2, Thickness: 2 3/16, Volume: 34L", 'Reserved', callback)
        },
        function(callback) {
          surfboardInstanceCreate(surfboards[1], "Size: 6'0, Width: 19 1/2, Thickness: 2 3/16, Volume: 34L", 'Available', callback)
        },
        function(callback) {
          surfboardInstanceCreate(surfboards[2], "Size: 6'0, Width: 19 1/2, Thickness: 2 3/16, Volume: 34L", 'Available', callback)
        },
        function(callback) {
          surfboardInstanceCreate(surfboards[2], "Size: 6'0, Width: 19 1/2, Thickness: 2 3/16, Volume: 34L", 'Reserved', callback)
        },
        function(callback) {
          surfboardInstanceCreate(surfboards[3], "Size: 6'0, Width: 19 1/2, Thickness: 2 3/16, Volume: 34L", 'Available', callback)
        },
        function(callback) {
          surfboardInstanceCreate(surfboards[3], "Size: 6'0, Width: 19 1/2, Thickness: 2 3/16, Volume: 34L", 'Sold', callback)
        },
        function(callback) {
          surfboardInstanceCreate(surfboards[4], "Size: 6'0, Width: 19 1/2, Thickness: 2 3/16, Volume: 34L", 'Available', callback)
        },
        function(callback) {
          surfboardInstanceCreate(surfboards[4], "Size: 6'0, Width: 19 1/2, Thickness: 2 3/16, Volume: 34L", 'Sold', callback)
        },
        function(callback) {
          surfboardInstanceCreate(surfboards[5], "Size: 6'0, Width: 19 1/2, Thickness: 2 3/16, Volume: 34L", 'Available', callback)
        },
        ],
        // Optional callback
        cb);
}



async.series([
    createBrands,
    createSurfboards,
    createSurfboardInstances
],
// Optional callback
function(err, results) {
    if (err) {
        console.log('FINAL ERR: '+err);
    }
    else {
        console.log('SurfboardInstances: '+surfboardinstances);
        
    }
    // All done, disconnect from database
    mongoose.connection.close();
});




