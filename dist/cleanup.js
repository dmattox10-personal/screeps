var cleanup = {
  memory: function() {
    if (Memory.phase == {"undefined"}) {
      Memory.phase = 0;
      console.log(Memory.phase);
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
