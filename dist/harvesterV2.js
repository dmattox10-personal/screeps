var harvesterV2 = {
  main: function(creep) {
    if(creepEmpty(creep)) {
      var sources = creep.room.find(FIND_SOURCES);
      if(creep.harvest(sources[0]) == ERR_NOT_IN_RANGE) {
          creep.moveTo(sources[0], {visualizePathStyle: {stroke: '#ffaa00'}});
      }
    } // IF
    else {
      var targets = creep.room.find(FIND_STRUCTURES, {
              filter: (structure) => {
                  return (structure.structureType == STRUCTURE_EXTENSION ||
                          structure.structureType == STRUCTURE_SPAWN ||
                          structure.structureType == STRUCTURE_TOWER) && structure.energy < structure.energyCapacity;
              }
      }); // TARGETS
      if(targets.length > 0) {
          if(creep.transfer(targets[0], RESOURCE_ENERGY) == ERR_NOT_IN_RANGE) {
              creep.moveTo(targets[0], {visualizePathStyle: {stroke: '#ffffff'}});
          }
      } // if targets.length
    } // ELSE

  } // MAIN
  spawn: function() {
    var newName = 'Harvester' + Game.time;
    Game.spawns[spawn_name].spawnCreep([WORK,CARRY,MOVE], newName, // TODO 'Spawn1' HARDCODED
        {memory: {role: 'harvester'}});
  } // SPAWN
};

function creepEmpty(creep) {
  if(creep.carry.energy < creep.carryCapacity) {
    return true;
  }
  else {return false;}
}












module.exports = harvesterV2;