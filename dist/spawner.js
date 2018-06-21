var spawner = {
  spawn: (type) => {

    switch (type) {
      case 'harvester':
      var newName = 'harvester' + Game.time
      var sources = Game.rooms[name].find(FIND_SOURCES);

      break
      case 'upgrader':
      var newName = 'upgrader' + Game.time

      break
      case 'builder':
      var newName = 'builder' + Game.time

      break
    }
    Game.spawns.Spawn1.spawnCreep([WORK,CARRY,MOVE,MOVE], newName, // TODO 'Spawn1' HARDCODED
    // Game.spawns[spawn_name].spawnCreep([WORK,CARRY,MOVE], newName, // TODO 'Spawn1' HARDCODED
      {memory: {role: 'harvester', source: (Math.floor(Math.random() * length))}})
    } // loop
  }
}

module.exports = spawner
