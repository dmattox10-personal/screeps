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
          // TODO Map row by row, saving the NEXT row as a variable!
          // TODO set colony.level to RCL?
          // TODO Store the map as an array on the colony instead of solo
          Memory.colonies.push(colony)
        }
        else {
          console.log("Colony Exists!")
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

function search(colony_name, colonyArray){
    for (var i=0; i < colonyArray.length; i++) {
        if (colonyArray[i].name === colony_name) {
            return true
        }
        return false
    }
}

module.exports = tools
