var tools = {
  setup: () => {
    for (var room_name in Game.rooms) {
      for (var spawn_name in Game.spawns) {
        if (!Memory.rooms) {


        }
        if (!Memory.rooms.room_name) {
          Memory.rooms.room_name = {}
          // Memory.rooms[Memory.rooms.length] = room_name
          // Get all the info we need to save, don't map in here!
          var sources = Game.rooms[room_name].find(FIND_SOURCES)
          //console.log(sources)
          Memory.rooms.room_name.sources = sources
        }
      } // Game.spawns
    } // Game.rooms
  }
} //END TOOLS

module.exports = tools
