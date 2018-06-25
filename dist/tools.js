var tools = {
  setup: () => {
    for (var room_name in Game.rooms) {
      for (var spawn_name in Game.spawns) {
        if (!Memory.room_name) {
          // Save the room name LAST after populating it's object with properties here!!!
          var sources = Game.rooms[room_name].find(FIND_SOURCES)
          console.log(sources)
        }
      } // Game.spawns
    } // Game.rooms
  }
} //END TOOLS

module.exports = tools
