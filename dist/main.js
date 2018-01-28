// MAIN WITH MEMORY MANAGEMENT

var roleHarvester = require('role.harvester');
var roleUpgrader = require('role.upgrader');
var cleanup = require('cleanup');

module.exports.loop = function () {

    cleanup.memory();

    for(var name in Game.rooms) {
      if (Memory.phase < Game.rooms[name].controller.level) {
        Memory.phase = Game.rooms[name].controller.level;
        //phase(Game.rooms[name].controller.level)
        switch(Memory.phase) {
            case 1:

            break;
            case 2: // Put extensions here!
            var roomName = Game.spawns.Spawn1.room; //TODO HARDCODED
            Game.rooms.[roomName].createConstructionSite(5, 37, STRUCTURE_EXTENSION);
            Game.rooms.[roomName].createConstructionSite(5, 38, STRUCTURE_EXTENSION);
            Game.rooms.[roomName].createConstructionSite(5, 39, STRUCTURE_EXTENSION);
            Game.rooms.[roomName].createConstructionSite(5, 40, STRUCTURE_EXTENSION);
            Game.rooms.[roomName].createConstructionSite(5, 41, STRUCTURE_EXTENSION);
            break;
            case 3: // THIS is the one that will matter, write code for

            break;
        }
      }
    }


    /*
    var roomName = Game.spawns.Spawn1.room; //TODO HARDCODED
    Game.rooms[roomName].createConstructionSite(5, 37, STRUCTURE_EXTENSION);
    Game.rooms[roomName].createConstructionSite(5, 38, STRUCTURE_EXTENSION);
    Game.rooms[roomName].createConstructionSite(5, 39, STRUCTURE_EXTENSION);
    Game.rooms[roomName].createConstructionSite(5, 40, STRUCTURE_EXTENSION);
    Game.rooms[roomName].createConstructionSite(5, 41, STRUCTURE_EXTENSION);
    */



    // This code needs moved into 'Phase One', similar code written and tested for each phase
    var harvesters = _.filter(Game.creeps, (creep) => creep.memory.role == 'harvester');
    var upgraders  = _.filter(Game.creeps, (creep) => creep.memory.role == 'upgrader');
    // Make sure we have enough harvesters, and if so
    if(harvesters.length < 6) {
        var newName = 'Harvester' + Game.time;
        Game.spawns['Spawn1'].spawnCreep([WORK,CARRY,MOVE], newName,
            {memory: {role: 'harvester'}});
    }
    else { // then we start making upgraders
      if(upgraders.length < 6) {
          var newName = 'Upgrader' + Game.time;
          Game.spawns['Spawn1'].spawnCreep([WORK,CARRY,MOVE], newName,
              {memory: {role: 'upgrader'}});
            }
    }
    // Code below keeps any units that should exist, at any "phase", acting on their role code
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

function phaseOne() {

}

function phaseTwo() {

}
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
