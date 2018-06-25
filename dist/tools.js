var tools = {
  setup: () => {

    for (var room_name in Game.rooms) {
      for (var spawn_name in Game.spawns) {
        let current_room = Game.rooms[room_name]
        console.log(current_room[0])
      } // Game.spawns
    } // Game.rooms
  } // Setup
} //END TOOLS

module.exports = tools
