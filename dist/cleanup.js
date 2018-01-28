var cleanup = {
  memory: function() {
    if (!Memory.phase) {
      Memory.phase = 0;
    }
    for(var name in Memory.creeps) {
        if(!Game.creeps[name]) {
            delete Memory.creeps[name];
            console.log('Clearing non-existing creep memory:', name);
        }
    }
  }
};

module.exports = cleanup;
