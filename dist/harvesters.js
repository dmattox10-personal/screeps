var harvesters = {
  spawn: (spawn_name) => {
    var name = 'harvester' + Game.time // TODO switch to UUID-Lib
    var components = [WORK,CARRY,MOVE,MOVE]
    Game.spawns[spawn_name].createCreep(components, name, { memory: { role: 'harvester' }})
    }
}

module.exports = harvesters
