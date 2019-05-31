var cleanup = {
  deadCreeps: function() {
    /*
    // Set ZERO
    if (!Memory.phase) {
      Memory.phase = 0;
    }
    */
    for(var name in Memory.creeps) {
        if(!Game.creeps[name]) {
            delete Memory.creeps[name]
      }
    }
  },
  preventShardStorage: function() {
    if (Memory.colonies.length > 100) {
      delete Memory.colonies
    }
  }
}

module.exports = cleanup
