spawn = (room, spawn_name, id) => {
    var name = 'upgrader' + Game.time
    var components = [WORK, CARRY, MOVE]
    Game.spawns[spawn_name].spawnCreep(components, name, {
        memory:
        {
            role: 'upgrader',
            id: id,
            room: room
        }
    })
}

run = (creep, source) => {
    if(creep.memory.upgrading && creep.carry.energy == 0) {
        creep.memory.upgrading = false;
        creep.say('harvest');
    }
    if(!creep.memory.upgrading && creep.carry.energy == creep.carryCapacity) {
        creep.memory.upgrading = true;
        creep.say('upgrade');
    }
    if(creep.memory.upgrading) {
        if(creep.upgradeController(creep.room.controller) == ERR_NOT_IN_RANGE) {
            creep.moveTo(creep.room.controller, {visualizePathStyle: {stroke: '#ffffff'}});
        }
    }
    else {
        if(creep.harvest(source) == ERR_NOT_IN_RANGE) {
            creep.moveTo(source, {visualizePathStyle: {stroke: '#ffaa00'}});
        }
    }
}

module.exports = {
    spawn, run
}

/*
var upgraders = {
  spawn: (spawn_name) => {
    var name = 'upgrader' + Game.time // TODO switch to UUID-Lib
    var components = [WORK,CARRY,MOVE]
    Game.spawns[spawn_name].spawnCreep(components, name, {memory: {role: 'upgrader'}})
  },
  run: function(creep) {

      if(creep.memory.upgrading && creep.carry.energy == 0) {
          creep.memory.upgrading = false;
          creep.say('harvest');
      }
      if(!creep.memory.upgrading && creep.carry.energy == creep.carryCapacity) {
          creep.memory.upgrading = true;
          creep.say('upgrade');
      }

      if(creep.memory.upgrading) {
          if(creep.upgradeController(creep.room.controller) == ERR_NOT_IN_RANGE) {
              creep.moveTo(creep.room.controller, {visualizePathStyle: {stroke: '#ffffff'}});
          }
      }
      else {
          var sources = creep.room.find(FIND_SOURCES);
          if(creep.harvest(sources[0]) == ERR_NOT_IN_RANGE) {
              creep.moveTo(sources[0], {visualizePathStyle: {stroke: '#ffaa00'}});
          }
      }
  }
}

module.exports = upgraders
*/