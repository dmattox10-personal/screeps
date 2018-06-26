var tools = {
  setup: () => {

    for (var colony_name in Game.rooms) {
      for (var spawn_name in Game.spawns) {
        let current_colony = Game.rooms[colony_name] // DNM
        let current_colony_name = current_colony.name // DNM
        if (!Memory.colonies) {
          Memory.colonies = []
          console.log("colonies inserted into memory")

        }
        /*
        var searchColonies = _.filter(Memory.colonies, (Memory.colony.name) =>  == current_colony_name)
        if (searchColonies) {
          let sources = Game.rooms[current_colony_name].find(FIND_SOURCES); // DNM
          let colonyEntry = {}
          colonyEntry.name = current_colony_name
          colonyEntry.id = Memory.colonies.length
          colonyEntry.sources = sources
          Memory.colonies.push = colonyEntry
        }
        */
      } // Game.spawns
    } // Game.rooms
  } // Setup
} //END TOOLS

module.exports = tools
