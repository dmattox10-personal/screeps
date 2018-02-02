var mapper = {
  createMap: function(ROOM_WIDTH, ROOM_HEIGHT, name, sources) {
    // var terrain = {};
    for (var x = 0; x < ROOM_WIDTH; x++) {
      for (var y = 0; y < ROOM_HEIGHT; y++) {
        console.log(Game.map.getTerrainAt(x, y, name));
      } // 'y' loop
    } // 'x' loop
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




module.exports = mapper;
