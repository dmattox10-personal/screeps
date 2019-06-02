spawn = (spawn_name) => {
    var name = 'foreman' + Game.time // TODO switch to UUID-Lib
    var components = [WORK]
    Game.spawns[spawn_name].spawnCreep(components, name, {
        memory: 
        {
            role: 'foreman',
            id: Game.time
        }
    })
}

module.exports= {
    spawn
}