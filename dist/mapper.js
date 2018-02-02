var mapper = {

  createMap: function(ROOM_WIDTH, ROOM_HEIGHT, name, sources) {
    Memory.map = [];
    Memory.map.name = name;
    Memory.map.tiles = {};
    var length = Memory.map.length;
    console.log(JSON.stringify(Memory.map));
    console.log(Memory.map.name);
      for (var x = 0; x < ROOM_WIDTH; x++) {
        for (var y = 0; y < ROOM_HEIGHT; y++) {
          //console.log(Game.map.getTerrainAt(x, y, name));
          let tile = Game.map.getTerrainAt(x, y, name);
          Memory.map.name[length + 1].terrain = {
            "type": tile,
            "pos":
            {
              "x":x,
              "y":y
            }
          };
        } // 'y' loop
      } // 'x' loop
      console.table(Memory.map.name);
    }, // createMap
  getMap: function(name) {

  } // getMap
}; // mapper

/*
Create Object "terrain" simply type,x,y
save Memory.mapName.terrain

*/

/*
if (getMap(room, x,y) == clear) {
  var buildableTile = new terrain {type: type, pos:{x:x, y:y}}
}
*/

function checkAdjacent(x, y) {

}


module.exports = mapper;
