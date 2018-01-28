var cleanup = {
  memory: function() {
    console.log(Memory.phase);
    for(var name in Memory.creeps) {
        if(!Game.creeps[name]) {
            delete Memory.creeps[name];
            console.log('Clearing non-existing creep memory:', name);
        }
    }
  }
};

module.exports = cleanup;
