var tools = {
  setup: () => {

    for (var colony_name in Game.rooms) {
      for (var spawn_name in Game.spawns) {
        let current_colony = Game.rooms[colony_name]
        let current_colony_name = current_colony.name
        //let sources = Game.rooms[current_room_name].find(FIND_SOURCES);
        console.log(current_colony_name)
      } // Game.spawns
    } // Game.rooms
  } // Setup
} //END TOOLS

module.exports = tools
