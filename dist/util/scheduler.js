var scheduler = {
  five: () => {
    if (Game.time % 5 == 0) {
      return true;
    }
    else {return false;}
  },
  ten: function() {
    if (Game.time % 10 == 0) {
      return true;
    }
    else {return false;}
  },
  twentyFive: function() {
    if (Game.time % 25 == 0) {
      return true;
    }
    else {return false;}
  },
  fifty: function() {
    if (Game.time % 5 == 0) {
      return true;
    }
    else {return false;}
  }
};

module.exports = scheduler;
