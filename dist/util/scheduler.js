var scheduler = {
  ticks5: () => {
    if (Game.time % 5 === 0) {
      return true;
    }
  }

  ticks10: () => {
    if (Game.time % 10 === 0) {
      return true;
    }
  }

  ticks25: () => {
    if (Game.time % 25 === 0) {
      return true;
    }
  }

  ticks50: () => {
    if (Game.time % 50 === 0) {
      return true;
    }
  }

  ticks100: () => {
    if (Game.time % 100 === 0) {
      return true;
    }
  }

}
