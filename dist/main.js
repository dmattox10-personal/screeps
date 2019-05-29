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
const values = require('values')

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
  for (var i = 0; i < Memory.colonies.length; i++) {
    if (Memory.colonies[i].mapRow < values.ROOM_HEIGHT) {
      tools.map(Memory.colonies[i].name, Memory.colonies[i].mapRow)
      Memory.colonies[i].mapRow++
    }
  }
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
