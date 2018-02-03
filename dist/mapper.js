var mapper = {

  createMap: function(ROOM_WIDTH, ROOM_HEIGHT, name, sources) {
    // Memory.map.name.sites // Gonna need this
    var Memory.map.build = [];
      for (var x = 0; x < ROOM_WIDTH; x++) {
        for (var y = 0; y < ROOM_HEIGHT; y++) {
          //console.log(Game.map.getTerrainAt(x, y, name));
          let tile = Game.map.getTerrainAt(x, y, name);
          if (tile == 'plains') {
            if (checkWall(x, y)) {
              if (empty(x, y)) {
                if (!NRG(x, y)) {
                  storeTile(name, x, y);
                }
                else {
                  break;
                }
              }
              else {
                break;
              } // emoty, no structures
            }
            else {
              break;
            } // wall check
          }
          else {
            break;
          } // tile check
          // addTile(tile, x, y); // Why am I doing this? Just store useable edges
        } // 'y' loop
      } // 'x' loop
    }, // createMap
  getMap: function(name) {

  } // getMap
}; // mapper
function checkWall(x, y) {
  if (Game.map.getTerrainAt(x + 1, y, name) == 'wall' ||
      Game.map.getTerrainAt(x - 1, y, name) == 'wall' ||
      Game.map.getTerrainAt(x, y + 1, name) == 'wall' ||
      Game.map.getTerrainAt(x, y - 1, name) == 'wall') {
    return true;
  }
  else {
    return false;
  }
}

function empty(x, y) { // Not Yet Implemented
    return true;
}

function NRG(x, y) {
    return false;
}

function storeTile(name, x, y) {
  Memory.map.build[Memory.map.build.length].push({"name":name, "pos": {"x": x, "y": y}});
  console.log(Memory.map.build[Memory.map.build.length]);
}
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

// TODO only store edges, plains, with a wall adjacent, and no structure.
