var ticks = {
  five: () => {
    if (time % 5 === 0) {
      return true;
    }
  },
  ten: () => {
    if (time % 10 === 0) {
      return true;
    }
  },
  twentyFive: () => {
    if (time % 25 === 0) {
      return true;
    }
  },
  fifty: () => {
    if (time % 5 === 0) {
      return true;
    }
  }
};
