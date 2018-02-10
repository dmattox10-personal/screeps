var ticks = {
  five: () => {
    if (Game.time % 5 === 0) {
      return true;
    }
  },
  ten: () => {
    if (Game.time % 10 === 0) {
      return true;
    }
  },
  twentyFive: () => {
    if (Game.time % 25 === 0) {
      return true;
    }
  },
  fifty: () => {
    if (Game.time % 5 === 0) {
      return true;
    }
  }
};
