var upgraderV2 = {
  main: function(creep, sources, source) {
    if(creep.carry.energy == 0) {
          var sources = creep.room.find(FIND_SOURCES);
          if(creep.harvest(sources[source]) == ERR_NOT_IN_RANGE) {
              creep.moveTo(sources[source], {visualizePathStyle: {stroke: '#ffaa00'}}); // TODO these hardcoded positions need looped
          }
      }
      else {
          if(creep.upgradeController(creep.room.controller) == ERR_NOT_IN_RANGE) {
              creep.moveTo(creep.room.controller);
          }
      }
  },
  spawn: function(spawn_name, length) {
    var newName = 'Upgrader' + Game.time;
    Game.spawns[spawn_name].spawnCreep([WORK,CARRY,MOVE], newName, // TODO
        {memory: {role: 'upgrader', source: (Math.floor(Math.random() * length))}});
  }


};

module.exports = upgraderV2;
