// MAIN WITH MEMORY MANAGEMENT

var roleHarvester = require('role.harvester');
var roleUpgrader = require('role.upgrader');
var roleBuilder = require('role.builder');

var cleanup = require('cleanup');

const extensionsPerLevel = [0, 0, 5, 10, 20, 30, 40, 50, 60];

const ROOM_HEIGHT = 50;
const ROOM_WIDTH = 50;

module.exports.loop = function () {

    cleanup.memory();

    for(var room_name in Game.rooms) { // GOOD
      if (Memory.phase < Game.rooms[room_name].controller.level) { // GOOD
        Memory.phase = Game.rooms[room_name].controller.level; // GOOD
        for(var spawn_name in Game.spawns) {
          var spawn = Game.spawns[spawn_name];
          switch(Memory.phase) { // TODO Map the room, every time we level up!
            case 1:
            phaseOne();
            break;
            case 2: // Put extensions here!
            phaseTwo(room_name, spawn_name);
            break;
            case 3: // THIS is the one that will matter, write code for

            break;
          }
        }
      }
    }
    /*
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
      */
    var extensions = Game.spawns.Spawn1.room.find(FIND_MY_STRUCTURES, { // TODO HARDCODED
      filter: { structureType: STRUCTURE_EXTENSION }
    });
    // This code needs moved into 'Phase One', similar code written and tested for each phase
    var harvesters = _.filter(Game.creeps, (creep) => creep.memory.role == 'harvester');
    var upgraders  = _.filter(Game.creeps, (creep) => creep.memory.role == 'upgrader');
    var builders   = _.filter(Game.creeps, (creep) => creep.memory.role == 'builder');

    // Make sure we have enough harvesters, and if so
    if(harvesters.length < Memory.phase * 2) {
        var newName = 'Harvester' + Game.time;
        Game.spawns['Spawn1'].spawnCreep([WORK,CARRY,MOVE], newName, // TODO 'Spawn1' HARDCODED
            {memory: {role: 'harvester'}});
    }
    else { // then we start making upgraders
      if(upgraders.length < Memory.phase * 2) {
          var newName = 'Upgrader' + Game.time;
          Game.spawns['Spawn1'].spawnCreep([WORK,CARRY,MOVE], newName, // TODO
              {memory: {role: 'upgrader'}});
            }
      if (builders.length < Memory.phase * 2) {
          var newName = 'Builder' + Game.time;
          Game.spawns['Spawn1'].spawnCreep([WORK,CARRY,MOVE], newName, // TODO
            {memory: {role: 'builder'}});
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
        if(creep.memory.role == 'builder') {
            roleBuilder.run(creep);
        }
    }
}

function phaseOne() {
  console.log("Welcome to the jungle!");
}

function phaseTwo(room_name, spawn_name) {
  console.log(room_name);
  console.log(spawn_name);
/*
  var count = 0;
  for (var x = 0; x < ROOM_WIDTH; x++) {
    for (var y = 0; y < ROOM_HEIGHT; y++) {
      console.log(Game.map.getTerrainAt(x, y, name));
      console.log(count);
      count++;
      map()
      if(!tryN(pattern2)){
        if(!tryE(pattern2)) {
          if(!tryS(pattern2)) {
            if(!tryW(pattern2)) {
              console.log("Building Failed!")
            }
            else {buildW(pattern2)}
          }
          else{buildS(pattern2)}
        }
        else{buildE(pattern2)}
      }
      else {buildN(pattern2)}
    }
  }
  */

  /*
  for (var i = 0; i < 5; i++) {
  Game.rooms[name].createConstructionSite(5, (i + 37), STRUCTURE_EXTENSION); //TODO HARDCODED
  }
  */
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
