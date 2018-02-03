var mapper = {

  createMap: function(ROOM_WIDTH, ROOM_HEIGHT, name, sources) {
    Memory.map = [];
    // Memory.map.name.sites // Gonna need this
      for (var x = 0; x < ROOM_WIDTH; x++) {
        for (var y = 0; y < ROOM_HEIGHT; y++) {
          //console.log(Game.map.getTerrainAt(x, y, name));
          let tile = Game.map.getTerrainAt(y, x, name);
          if (tile == "plain") {
            console.log("plain");
            if (checkWall(x, y, name)) {
              console.log("wall");
              if (empty(x, y)) {
                console.log("empty");
                if (!NRG(x, y)) {
                  console.log("!NRG");
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
function checkWall(x, y, name) {
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
  Memory.map[Memory.map.length] = {"name":name, "pos": {"x": x, "y": y}};
  console.log(Memory.map[Memory.map.length]);
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




module.exports = mapper;

// TODO only store edges, plains, with a wall adjacent, and no structure.
