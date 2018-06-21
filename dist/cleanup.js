var cleanup = {
  memory: function() {
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
  }
}

module.exports = cleanup;
