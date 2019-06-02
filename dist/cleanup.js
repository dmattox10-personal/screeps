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
  },
  preventOverflow: function() {
    for (let i = 0; i < Memory.colonies.length; i++) {
      if (Memory.colonies[i].creepID > 3000) {
        Memory.colonies[i].creepID = 0
      }
    }
  }
}

module.exports = cleanup
