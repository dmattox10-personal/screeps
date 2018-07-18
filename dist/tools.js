// TODO Eventually, check for memory.colonies against current room name, to never run this again?
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
        if (!search(colony_name, Memory.colonies)) {
          console.log("Colony Does Not Exist")
          let colony = {}
          colony.name = current_colony_name
          colony.sources = Game.rooms[current_colony_name].find(FIND_SOURCES)
          colony.setup = 1
          colony.map = []
          // TODO Map row by row, saving the NEXT row as a variable!
          // TODO set colony.level to RCL?
          // TODO Store the map as an array on the colony instead of solo
          // TODO Harvesters level?
          Memory.colonies.push(colony)
        }
        else {
          console.log("Colony Exists!")
        }
      } // Game.spawns
    } // Game.rooms
  }, // Setup
  search: (colony_name, colonyArray) => {
      for (var i=0; i < colonyArray.length; i++) {
          if (colonyArray[i].name === colony_name) {
              return true
          }
          return false
      }
  }
} //END TOOLS


module.exports = tools
