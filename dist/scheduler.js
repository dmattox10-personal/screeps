var scheduler = {
  five: (Game) => {
    console.log("five!");
    if (Game.time % 5 == 0) {
      var time = 100;
      return time;
    }
    else {return false;}
  },
  ten: function(time) {
    if (time % 10 == 0) {
      return true;
    }
    else {return false;}
  },
  twentyFive: function(time) {
    if (time % 25 == 0) {
      return true;
    }
    else {return false;}
  },
  fifty: function(time) {
    if (time % 5 == 0) {
      return true;
    }
    else {return false;}
  }
};
