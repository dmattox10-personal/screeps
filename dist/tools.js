var tools = {
  setup: () => {

    for (var room_name in Game.rooms) {
      for (var spawn_name in Game.spawns) {
        let current_room = Game.rooms[room_name]
        let current_room_name = current_room.name
        //console.log(current_room_name)
        let sources = Game.rooms[current_room_name].find(FIND_SOURCES);
        let this_room_sources = sources.sources
        Memory.rooms[current_room_name].sources = this_room_sources
      } // Game.spawns
    } // Game.rooms
  } // Setup
} //END TOOLS

module.exports = tools
