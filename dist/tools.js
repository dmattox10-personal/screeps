// TODO Eventually, check for memory.colonies against current room name, to never run this again?
const ROOM_WIDTH = 50
const values = require('values')
let log = console.log.bind(console)
let tools = {
  setup: () => {

    for (var colony_name in Game.rooms) {
      for (var spawn_name in Game.spawns) {
        let current_colony = Game.rooms[colony_name] // DNM
        let current_colony_name = current_colony.name // DNM
        // In case of total desctruction we must recreate the memory object
        if (!Memory.colonies) {
          Memory.colonies = []
        } 
        // CREATE COLONY OBJECT
        if (!search(colony_name, Memory.colonies)) {
          let colony = {}
          colony.terrain = new Array(values.ROOM_HEIGHT).fill(0).map(() => new Array(values.ROOM_WIDTH).fill('0'))
          colony.name = current_colony_name
          colony.sources = Game.rooms[current_colony_name].find(FIND_SOURCES)
          colony.phase = 0
          colony.danger = 0
          colony.mapRow = 0
          colony.mapColumn = 0
          colony.buildTiles = []
          colony.structures = []
          colony.spawns = []
          colony.spawns[0] = spawn_name
          // TODO Map row by row, saving the NEXT row as a variable!
          // TODO set colony.level to RCL?
          // TODO Store the map as an array on the colony instead of solo
          // TODO Harvesters level?
          Memory.colonies.push(colony)
        }
      } // Game.spawns
    } // Game.rooms
  }, // Setup
  map: (name, y) => {
    log('mapping')
    for (var x = 0; x < ROOM_WIDTH; x++) {
      log('column ' + x + ', row ' + y)
        let currentTile = Game.map.getTerrainAt(x, y, name)
        if (currentTile === 'plain' && !nearWall(x, y, name) && !nearSource(x, y, name)) {
          log('Tile is ' + currentTile)
          if(storeTile(x, y, name)) {
            console.log('Tile Stored')
          }
        }
      }
  },
} //END TOOLS

let search = (colony_name, colonyArray) => {
    for (var i=0; i < colonyArray.length; i++) {
        if (colonyArray[i].name === colony_name) {
            return true
        }
        return false
    }
}
let nearWall = (x, y, name) => {
  if (Game.map.getTerrainAt(x + 1, y, name) == 'wall' ||
      Game.map.getTerrainAt(x - 1, y, name) == 'wall' ||
      Game.map.getTerrainAt(x, y + 1, name) == 'wall' ||
      Game.map.getTerrainAt(x, y - 1, name) == 'wall') {
        log('Too close to a wall at ' + y)
    return true;
  }
  else {
    log('Free Real Estate!')
    return false;
  }
}
let nearSource = (x, y, name) => {
  const pos = Game.rooms[name].getPositionAt(x, y);
  const source = pos.findClosestByRange(FIND_SOURCES_ACTIVE);
  if (source > 3) {
    log('Not near a source')
    return false;
  }
  else {
    log('Near an energy source at ' + y)
    return true;
  }
}
let storeTile = (x, y, name) => {
  log('Need to store tile at x:' + x + ' y:' + y + ', in room ' + name)
 let pos = {'x':x, 'y':y }
  for (let i = 0; i < Memory.colonies.length; i++) {
    if (Memory.colonies[i].name === name) {
  Memory.colonies[i].buildTiles.push(pos)
  return true
    }
  }
}

module.exports = tools
