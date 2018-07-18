// TODO Anything scheduled, needs to save it's data to memory

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
  },
  hundredTicks: () => {
    if (Game.time % 100 == 0) {
      return true;
    }
    else {return false;}
  },
  fiveHundredTicks: () => {
    if (Game.time % 500 == 0){
      return true
    }
    return false
  },
  thousandTicks: () => {
    if (Game.time % 1000 == 0) {
      return true;
    }
    else {return false;}
  }
};

module.exports = scheduler;
