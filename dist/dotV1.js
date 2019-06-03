spawnRoad = (room, spawn_name, id) => {
    var name = 'DOTRoad' + Game.time
    var components = [WORK, CARRY, MOVE]
    Game.spawns[spawn_name].spawnCreep(components, name, {
        memory:
        {
            role: 'roads',
            id: id,
            room: room
        }
    })
}

spawnRoom = () => {
    var name = 'DOTRoom' + Game.time
    var components = [WORK, CARRY, MOVE]
    Game.spawns[spawn_name].spawnCreep(components, name, {
        memory:
        {
            role: 'maintenance',
            id: id,
            room: room
        }
    })
}

module.exports = {
    spawnRoad,
    spawnRoom
}