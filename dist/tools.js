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
        if (!Memory.colonies[current_colony_name]) {
          let sources = Game.rooms[current_colony_name].find(FIND_SOURCES); // DNM
          current_colony_name.id = 0
          colonies.push(current_colony_name)
          console.log("added colony " + current_colony_name + " to colonies object")
        }
      } // Game.spawns
    } // Game.rooms
  } // Setup
} //END TOOLS

module.exports = tools
