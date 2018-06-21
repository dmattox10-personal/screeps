
var scheduler = require('scheduler')
//var spawner = require('spawner')
var cleanup = require('cleanup')

const extensionsPerLevel = [0, 0, 5, 10, 20, 30, 40, 50, 60]

const ROOM_HEIGHT = 50
const ROOM_WIDTH = 50

module.exports.loop = function () {
  if (scheduler.fiveTicks) {
    console.log("pulse")
    console.log(sources)
  }
  var harvesters = _.filter(Game.creeps, (creep) => creep.memory.role == 'harvester')
  var upgraders  = _.filter(Game.creeps, (creep) => creep.memory.role == 'upgrader')
  var builders   = _.filter(Game.creeps, (creep) => creep.memory.role == 'builder')
  /*
  if (harvesters.length < 3) {
    spawner.spawn('harvester')
  }

  if (upgraders.length < 3) {
    spawner.spawn('upgrader')
  }

  if (builders.length < 2) {
    spawner.spawn('builder')
  }
  */

    // These are "Run Once" conditions:
    // LOOP CONTINUES HERE
    //mapper.createMap(ROOM_WIDTH, ROOM_HEIGHT, name, sources); // TODO finish this and build containers
    /*
    // These are for spawning common creeps
    for(var name in Game.rooms) {
      for(var spawn_name in Game.spawns) {
        var sources = Game.rooms[name].find(FIND_SOURCES);
        console.log(sources.length);

      } // DO STUFF WITH SPAWN HERE
    } // DO STUFF WITH ONLY ROOM NAME HERE
    */




    // NEED THIS INFO:
    //mapper.createMap(ROOM_WIDTH, ROOM_HEIGHT, name);





    for(var name in Game.rooms) {
      console.log('Examining ' + room_name + ':');
        for(var spawn_name in Game.spawns) {
          var spawn = Game.spawns[spawn_name];
          if(Object.is(spawn.room, room)) {
            console.log('Examining ' + spawn_name + ':');
            console.log('Energy Available: ' + room.energyAvailable);
          }
        }
      }
    // TODO NEED THIS
    //var extensions = Game.spawns.Spawn1.room.find(FIND_MY_STRUCTURES, { // TODO HARDCODED
    //  filter: { structureType: STRUCTURE_EXTENSION }
    //});
    /*
    // This code needs moved into 'Phase One', similar code written and tested for each phase
    var harvesters = _.filter(Game.creeps, (creep) => creep.memory.role == 'harvester')
    var upgraders  = _.filter(Game.creeps, (creep) => creep.memory.role == 'upgrader')
    var builders   = _.filter(Game.creeps, (creep) => creep.memory.role == 'builder')
    */
    // Make sure we have enough harvesters, and if so
    /*
    if(harvesters.length < Memory.phase) {
        harvester.spawn(spawn_name, sources.length) // TODO spawn_name will eventually be more than one!
    }
    else { // then we start making upgraders

      if (upgraders.length < (Memory.phase * 2)) {
          upgrader.spawn(spawn_name, sources.length) // TODO spawn_name will eventually be more than one!
            }
      if (builders.length < Memory.phase) { // Change to only spawn for tasks, no work, no creeps
          var newName = 'Builder' + Game.time;
          Game.spawns['Spawn1'].spawnCreep([WORK,CARRY,MOVE], newName, // TODO
            {memory: {role: 'builder'}});
      }
    }
    // Code below keeps any units that should exist, at any "phase", acting on their role code
    for(var name in Game.creeps) {
        var creep = Game.creeps[name];
        var source = creep.memory.source;
        if(creep.memory.role == 'harvester') {
          harvester.main(creep, sources, source);
        }
        if(creep.memory.role == 'upgrader') {
          upgrader.main(creep, sources, source);
        }
        if(creep.memory.role == 'builder') { // TODO fix this one next
          roleBuilder.run(creep);
        }
    }
    */
    if (scheduler.hundredTicks()) {
      cleanup.memory
      console.log('Garbage Collect')
    }
} //EOL EOL EOL
/*
function phaseTwo(name, spawn_name, extensions) {
  console.log("Welcome to the jungle!");
  var sources = Game.rooms[name].find(FIND_SOURCES);
  mapper.createMap(ROOM_WIDTH, ROOM_HEIGHT, name, sources); // TODO spawn_name will eventually be more than one!
}
*/
/*
function phaseOne(name, spawn_name, extensions) { // TODO spawn_name will eventually be more than one!
  console.log(name);
  // IF number of extensions is lest than extensions
  // per level, set the level down again, so that buildE
  // runs again! Use code from harvester to find extensions

  /*
  for (var i = 0; i < extensions; i++) {
  Game.rooms[name].createConstructionSite(5, (i + 37), STRUCTURE_EXTENSION); //TODO HARDCODED
  }
}
*/
/*
function phaseThree(name, spawn_name, extensions) {
  console.log(name);
}
*/
/*
// DEFENSE CODE ================================================================
var roleHarvester = require('role.harvester');
var roleUpgrader = require('role.upgrader');
var roleBuilder = require('role.builder');

module.exports.loop = function () {

    var tower = Game.getObjectById('a386089747c074ec4d88d326');
    if(tower) {
        var closestDamagedStructure = tower.pos.findClosestByRange(FIND_STRUCTURES, {
            filter: (structure) => structure.hits < structure.hitsMax
        });
        if(closestDamagedStructure) {
            tower.repair(closestDamagedStructure);
        }

        var closestHostile = tower.pos.findClosestByRange(FIND_HOSTILE_CREEPS);
        if(closestHostile) {
            tower.attack(closestHostile);
        }
    }

    for(var name in Game.creeps) {
        var creep = Game.creeps[name];
        if(creep.memory.role == 'harvester') {
            roleHarvester.run(creep);
        }
        if(creep.memory.role == 'upgrader') {
            roleUpgrader.run(creep);
        }
        if(creep.memory.role == 'builder') {
            roleBuilder.run(creep);
        }
    }
}
*/

/*
// Logging Energy available in the room ========================================
var roleHarvester = require('role.harvester');
var roleBuilder = require('role.builder');

module.exports.loop = function () {

    for(var name in Game.rooms) {
        console.log('Room "'+name+'" has '+Game.rooms[name].energyAvailable+' energy');
    }

    for(var name in Game.creeps) {
        var creep = Game.creeps[name];
        if(creep.memory.role == 'harvester') {
            roleHarvester.run(creep);
        }
        if(creep.memory.role == 'builder') {
            roleBuilder.run(creep);
        }
    }
}
*/

/*
//added builder ================================================================
var roleHarvester = require('role.harvester');
var roleBuilder = require('role.builder');

module.exports.loop = function () {

    for(var name in Game.creeps) {
        var creep = Game.creeps[name];
        if(creep.memory.role == 'harvester') {
            roleHarvester.run(creep);
        }
        if(creep.memory.role == 'builder') {
            roleBuilder.run(creep);
        }
    }
}
*/

/*
//Modified main loop to run ONE harvester and ONE upgrader =====================
var roleHarvester = require('role.harvester');
var roleUpgrader = require('role.upgrader');

module.exports.loop = function () {

    for(var name in Game.creeps) {
        var creep = Game.creeps[name];
        if(creep.memory.role == 'harvester') {
            roleHarvester.run(creep);
        }
        if(creep.memory.role == 'upgrader') {
            roleUpgrader.run(creep);
        }
    }
}
*/

/*
// My original code
module.exports.loop = function () {
  var body = [MOVE, WORK, CARRY]
  for(const i in Game.spawns) {
    Game.spawns[i].createCreep(body); // Every time we have enough energy, we create another creep
  }
  for (const i in Game.creeps) {
    const target = creep.pos.findClosestByRange(FIND_SOURCES_ACTIVE);
    if(target) {
        if(Game.creeps[i].harvest(target) == ERR_NOT_IN_RANGE) {
            Game.creeps[i].moveTo(target);
        }
        else {
        if( creep.transfer(Game.spawns['Spawn1'], RESOURCE_ENERGY) == ERR_NOT_IN_RANGE ) {
            creep.moveTo(Game.spawns['Spawn1']);
        }
    }
    }
  }
}
*/

/* // Modified main loop to use role.harvester.js
var roleHarvester = require('role.harvester');

module.exports.loop = function () {

    for(var name in Game.creeps) {
        var creep = Game.creeps[name];
        roleHarvester.run(creep);
    }
}
*/
