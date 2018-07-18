// maritime Harvesters
// wartime Harvesters
// upgraders for both
// builders for both
// explorers with claim component
// Medic
// Smasher (POWER)
// scout (SPEED) with CLAIM
// Hauler
// balanced fighter
// PennDOT
// Engineer

var scheduler = require('scheduler')
var cleanup = require('cleanup')
var harvesterV3 = require('harvesterV3')
var upgraderV3 = require('upgraderV3')
var mapper = require('mapper')
var tools = require('tools')

const spawnsPerLevel = [1,1,1,1,1,1,2,3]
const extensionsPerLevel = [0, 0, 5, 10, 20, 30, 40, 50, 60]
const extensionsCapacityPerLevel = [0,0,0,50,50,50,50,50,100,200]
const rampartHitsPerLevel = [0,0,0,1,3,10,30,100,300]
const towersPerLevel = [0,0,0,1,1,2,2,3,6]
const linksPerLevel = [0,0,0,0,0,2,3,4,6]
const labsPerLevel = [0,0,0,0,0,0,3,6,10]
const ROOM_HEIGHT = 50
const ROOM_WIDTH = 50

// Move to Harvester
// var sources = Game.rooms[room_name].find(FIND_SOURCES)
// var source = sources[Math.floor(Math.random() * sources.length)]

module.exports.loop = function () {
// Do EVERYTHING per room
tools.setup()
// RESET TO HUNDRED TICKS AFTER TESTING
if (scheduler.tenTicks()) {
  cleanup.deadCreeps()
  cleanup.preventShardStorage()
  for(var colony_name in Game.rooms) {
    console.log(colony_name)
      for(var spawn_name in Game.spawns) {
        var harvesters = _.filter(Game.creeps, (creep) => creep.memory.role == 'harvester')
        var upgraders  = _.filter(Game.creeps, (creep) => creep.memory.role == 'upgrader')
        var builders   = _.filter(Game.creeps, (creep) => creep.memory.role == 'builder')
        if (harvesters.length < 5) {
          harvesterV3.spawn(spawn_name)
        }
        if (upgraders.length < 5) {
          upgraderV3.spawn(spawn_name)
        }
      }
    }
  } // hundredTicks

  // This cannot be scheduled !!!
  for (var room_name in Game.rooms) {
  for(var name in Game.creeps) {
       var creep = Game.creeps[name];
       // TODO use colony source map
       let sources = creep.room.find(FIND_SOURCES)
       if(creep.memory.role == 'harvester') {
           harvesterV3.run(creep, room_name)
       }
       if(creep.memory.role == 'upgrader') {
           upgraderV3.run(creep)
       }
       /*
       if(creep.memory.role == 'builder') {
           roleBuilder.run(creep);
           }
        */

     }
     // AFTER CREEP TASKS

   }
/*
   // Instead of looping over all rooms to find mine, let's use our colonies memory object!
   for (var i = 0; i < Memory.colonies.length; i++) {
     let room_name = Memory.colonies[i].name
     for (var j = 0; j < Memory.colonies[i].creeps.length; j++ ) {
       let creep_name = Memory.colonies[i].creeps[j].name
       let creep = Game.creeps[name]
       // RUN ALL CREEPS HERE
       if(creep.memory.role == 'harvester') {
           harvesterV3.run(creep, room_name)
       }
       if(creep.memory.role == 'upgrader') {
           upgraderV3.run(creep)
       }
     }
   }
*/
/*
     if (scheduler.thousandTicks()) {
       mapper.createMap(ROOM_WIDTH, ROOM_HEIGHT, room_name, sources)
     }
*/
} //EOL EOL EOL
