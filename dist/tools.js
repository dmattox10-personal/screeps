var tools = {
  setup: () => {

    for (var colony_name in Game.rooms) {
      for (var spawn_name in Game.spawns) {
        let current_colony = Game.rooms[colony_name] // DNM
        let current_colony_name = current_colony.name // DNM
        let sources = Game.rooms[current_colony_name].find(FIND_SOURCES); // DNM
        if (!Memory.colonies) {
          Memory.colonies = {}
          console.log("colonies inserted into memory")
        }
        if (!Memory.colonies.colony.current_colony_name) {
          Memory.colonies.colony[Memory.colonies.length] = current_colony_name
          console.log("added colony " + current_colony_name + " to colonies object")
        }
      } // Game.spawns
    } // Game.rooms
  } // Setup
} //END TOOLS

module.exports = tools
