var scheduler = {
  five: function() {
    if (Game.time % 5 === 0) {
      return true;
    }
  },
  ten: function() {
    if (Game.time % 10 === 0) {
      return true;
    }
  },
  twentyFive: function() {
    if (Game.time % 25 === 0) {
      return true;
    }
  },
  fifty: function() {
    if (Game.time % 5 === 0) {
      return true;
    }
  }
};
