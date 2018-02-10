var scheduler = {
  fiveTicks: () => {
    if (Game.time % 5 == 0) {
      return true;
    }
    else {return false;}
  },
  tenTicks: function() {
    if (Game.time % 10 == 0) {
      return true;
    }
    else {return false;}
  },
  twentyFiveTicks: function() {
    if (Game.time % 25 == 0) {
      return true;
    }
    else {return false;}
  },
  fiftyTicks: function() {
    if (Game.time % 50 == 0) {
      return true;
    }
    else {return false;}
  }
};

module.exports = scheduler;
