var spawner = {
  spawn: (room, spawn, role, components, source) => {
    Game.spawns.Spawn1.spawnCreep([WORK,CARRY,MOVE,MOVE], newName, // TODO 'Spawn1' HARDCODED
    // Game.spawns[spawn_name].spawnCreep([WORK,CARRY,MOVE], newName, // TODO 'Spawn1' HARDCODED
      {memory: {role: 'harvester', source: (Math.floor(Math.random() * length))}})

    Game.spawns.spawn_name.spawnCreep(components, newName, // TODO 'Spawn1' HARDCODED
    // Game.spawns[spawn_name].spawnCreep([WORK,CARRY,MOVE], newName, // TODO 'Spawn1' HARDCODED
      {memory: {role: 'harvester', source: (Math.floor(Math.random() * length))}})
    } // loop
  }
}

module.exports = spawner
var name = role + Game.time

switch (type, name,) {
  case 'harvester':
  for(var name in Game.rooms) {
    var sources = Game.rooms[name].find(FIND_SOURCES);
    var harvesterName = 'harvester' + Game.time
      for(var spawn_name in Game.spawns) {
        var spawn = Game.spawns[spawn_name];
      }
    }
  break
  case 'upgrader':

  break
  case 'builder':

  break
}
