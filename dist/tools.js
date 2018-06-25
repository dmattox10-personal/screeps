var tools = {
  setup: () => {

    for (var room_name in Game.rooms) {
      let obj_name = room_name
      for (var spawn_name in Game.spawns) {
        if (!Memory.rooms[room_name]) {
          //Memory.rooms[obj_name] = room_name
          Memory.rooms[room_name].sources = Game.rooms[room_name].find(FIND_SOURCES)
          // Memory.rooms[Memory.rooms.length] = room_name
          // Get all the info we need to save, don't map in here!
          // console.log(sources)
          // Memory.rooms.room_name.sources = sources
        }
      } // Game.spawns
    } // Game.rooms
  } // Setup
} //END TOOLS

module.exports = tools
