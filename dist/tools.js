var tools = {
  setup: () => {

    for (var room_name in Game.rooms) {
      console.log(room_name)
      for (var spawn_name in Game.spawns) {
        if (Memory.myRooms[room_name] != room_name) {
          console.log(room_name)
        // Memory.myRooms.local_name = {}
      // Memory.myRooms.local_name.sources = Game.rooms.local_name.find(FIND_SOURCES)
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
