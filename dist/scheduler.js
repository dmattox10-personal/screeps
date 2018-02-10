var scheduler = {
  ticks5: function() {
    if (Game.time % 5 === 0) {
      return true;
    }
  },

  ticks10: function() {
    if (Game.time % 10 === 0) {
      return true;
    }
  },

  ticks25: function() {
    if (Game.time % 25 === 0) {
      return true;
    }
  },

  ticks50: function() {
    if (Game.time % 50 === 0) {
      return true;
    }
  },

  ticks100: function() {
    if (Game.time % 100 === 0) {
      return true;
    }
  }

}
