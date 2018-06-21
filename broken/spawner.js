var spawner = {
  spawn: (spawn_name, role) => {
    var name = role + Game.time // TODO switch to UUID-Lib
    var components = []
    switch (role) {
      case 'harvester':
      components = [WORK,CARRY,MOVE,MOVE]
      break
      case 'upgrader':

      break
      case 'builder':

      break;
    }
    Game.spawns[spawn_name].createCreep(components, name, { memory: { role: role }})
    // Game.spawns.spawn_name.createCreep(components, name, { memory: { role: role, source: source }})
    }
  }

module.exports = spawner
