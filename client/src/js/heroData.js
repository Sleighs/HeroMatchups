var heroData = {
    Dva: {
      type: "tank",
      counters: {
        Ana: "+",
        Ashe: "+",
        Bastion: "+",
        Brigitte: "-",
        Doomfist: "-",
        Hanzo: "++",
        Junkrat: "-",
        McCree: "+",
        Mei: "-",
        Mercy: "++",
        Moira: "+",
        Pharah: "+",
        Reaper: "-",
        Sombra: "-",
        Widowmaker: "++",
        Zarya: "--"
      }
    },
    Orisa: {
      type: "tank",
      counters: {
        Ashe: "+",
        Doomfist: "+",
        Genji: "-",
        Hanzo: "-",
        Moira: "-",
        Reaper: "-",
        Torbjorn: "+",
        Widowmaker: "+"
      }
    },
    Reinhardt: {
      type: "tank",
      counters: {
        Bastion: "--",
        Brigitte: "-",
        Doomfist: "-",
        Junkrat: "--",
        Mei: "--",
        Orisa: "-",
        Pharah: "--",
        Reaper: "--",
        Soldier76: "+",
        Sombra: "-",
        Widowmaker: "+"
      }
    },
    Roadhog: {
      type: "tank",
      counters: {
        Ana: "-*",
        Baptiste: "+",
        Bastion: "+",
        Echo: "+",
        Lucio: "+",
        McCree: "+",
        Mei: "--",
        Reaper: "--",
        Sigma: "-",
        Soldier76: "+",
        Sombra: "+",
        Widowmaker: "+",
        Winston: "++",
        WreckingBall: "+",
        Zarya: "-"
      }
    },
    Sigma: {
      type: "tank",
      counters: {
        Ana: "+",
        Doomfist: "-",
        Lucio: "-",
        Roadhog: "+"
      }
    },
    Winston: {
      type: "tank",
      counters: {
        Bastion: "-",
        Dva: "++",
        Genji: "++",
        McCree: "+",
        Reaper: "--",
        Roadhog: "--",
        Symmetra: "+",
        Widowmaker: "++",
        Zenyatta: "++"
      }
    },
    WreckingBall: {
      type: "tank",
      counters: {
        Ana: "-",
        Brigitte: "--",
        Mei: "-",
        Reaper: "-",
        Roadhog: "-",
        Sombra: "--",
        Widowmaker: "+"
      }
    },
    Zarya: {
      type: "tank",
      counters: {
        Bastion: "-",
        Dva: "++",
        Genji: "++",
        Junkrat: "+",
        Mei: "+",
        Pharah: "--",
        Reaper: "-",
        Roadhog: "+",
        Torbjorn: "++",
        Zenyatta: "-"
      }
    },
    Ashe: {
      type: "dps",
      counters: {
        Ana: "-",
        Brigitte: "+",
        Dva: "+",
        Doomfist: "+",
        Hanzo: "-",
        Junkfist: "+",
        Mei: "+",
        Mercy: "+",
        Orisa: "-",
        Pharah: "++",
        Reaper: "+",
        Soldier76: "+",
        Symmetra: "+",
        Widowmaker: "-",
        Winston: "-",
        WreckingBall: "-"
      }
    },
    Bastion: {
      type: "dps",
      counters: {
        Ana: "-",
        Dva: "-",
        Echo: "+",
        Genji: "-",
        Hanzo: "-",
        Junkrat: "-",
        Reinhardt: "++",
        Roadhog: "-",
        Soldier76: "-",
        Tracer: "-",
        Widowmaker: "-",
        Winston: "++",
        Zarya: "+"
      }
    },
    Doomfist: {
      type: "dps",
      counters: {
        Ashe: "-",
        Dva: "+",
        Genji: "+",
        McCree: "-",
        Orisa: "-",
        Pharah: "--",
        Reinhardt: "+",
        Sigma: "+",
        Soldier76: "-",
        Sombra: "--"
      }
    },
    Echo: {
      type: "dps",
      counters: {
        Ana: "-",
        Bastion: "-",
        Baptiste: "-",
        McCree: "-",
        //Mei: "-",
        Roadhog: "-",
        Soldier76: "-",
        Sombra: "-"
        //Tracer: "+*",
        //Widowmaker: "-*"
      }
    },
    Genji: {
      type: "dps",
      counters: {
        Bastion: "+",
        Brigitte: "-",
        Doomfist: "-",
        Hanzo: "++",
        Mercy: "++",
        Orisa: "+",
        Pharah: "-",
        Widowmaker: "++",
        Winston: "--",
        Zarya: "--"
      }
    },
    Hanzo: {
      type: "dps",
      counters: {
        Ashe: "-",
        Bastion: "+",
        Dva: "--",
        Genji: "--",
        Orissa: "+",
        Sombra: "+",
        Torbjorn: "+",
        Tracer: "--",
        Widowmaker: "-"
      }
    },
    Junkrat: {
      type: "dps",
      counters: {
        Bastion: "+",
        Brigitte: "+",
        Dva: "+",
        Pharah: "--",
        Reaper: "+",
        Reinhardt: "++",
        Sombra: "+",
        Torbjorn: "++",
        Tracer: "+",
        Widowmaker: "--",
        Zarya: "-"
      }
    },
    McCree: {
      type: "dps",
      counters: {
        Dva: "-",
        Doomfist: "+",
        Echo: "+",
        Lucio: "++",
        Mei: "-",
        Mercy: "+",
        Pharah: "++",
        Roadhog: "-",
        Sombra: "+",
        Symmetra: "+",
        Tracer: "+",
        Widowmaker: "-",
        Winston: "-"
      }
    },
    Mei: {
      type: "dps",
      counters: {
        Ashe: "-",
        Dva: "+",
        //Echo: "+",
        Lucio: "-",
        McCree: "+",
        Pharah: "-",
        Reinhardt: "++",
        Roadhog: "++",
        Widowmaker: "-",
        WreckingBall: "+",
        Zarya: "-"
      }
    },
    Pharah: {
      type: "dps",
      counters: {
        Ana: "-",
        Ashe: "-*",
        Brigitte: "++",
        Dva: "-",
        Doomfist: "++",
        Genji: "+",
        Junkrat: "++",
        McCree: "--",
        Mei: "+",
        Reaper: "++",
        Reinhardt: "++",
        Soldier76: "-",
        Symmetra: "++",
        Widowmaker: "-"
      }
    },
    Reaper: {
      type: "dps",
      counters: {
        Ana: "-",
        Dva: "+",
        Junkrat: "-",
        Orisa: "+*",
        Pharah: "--",
        Reinhardt: "++",
        Roadhog: "++",
        Sombra: "+",
        Winston: "++",
        WreckingBall: "+",
        Zarya: "+",
        Zenyatta: "++"
      }
    },
    Soldier76: {
      type: "dps",
      counters: {
        Bastion: "+",
        Doomfist: "+",
        Echo: "+",
        Pharah: "+",
        Reinhardt: "-",
        Torbjorn: "++"
      }
    },
    Sombra: {
      type: "dps",
      counters: {
        Ana: "+",
        Brigitte: "+",
        Dva: "+",
        Doomfist: "++",
        Echo: "+",
        Hanzo: "-",
        Junkrat: "-",
        Lucio: "+",
        McCree: "-",
        Reaper: "-",
        Reinhardt: "+",
        Roadhog: "-",
        Symmetra: "+",
        Tracer: "++",
        WreckingBall: "++",
        Zenyatta: "+"
      }
    },
    Symmetra: {
      type: "dps",
      counters: {
        McCree: "-",
        Pharah: "--",
        Sombra: "-",
        //Tracer: "+*",
        Winston: "--",
        Reinhardt: "+"
      }
    },
    Torbjorn: {
      type: "dps",
      counters: {
        Ana: "-",
        Hanzo: "--",
        Junkrat: "--",
        Orisa: "-",
        Soldier: "--",
        Tracer: "+",
        Widowmaker: "--",
        Zarya: "--"
      }
    },
    Tracer: {
      type: "dps",
      counters: {
        Bastion: "+",
        Brigitte: "-",
        Hanzo: "++",
        Junkrat: "-",
        McCree: "-",
        Pharah: "-",
        Sombra: "--",
        Torbjorn: "-",
        Zenyatta: "++"
      }
    },
    Widowmaker: {
      type: "dps",
      counters: {
        Bastion: "+",
        Dva: "--",
        //Echo: "+*",
        Genji: "--",
        Hanzo: "-",
        Junkrat: "++",
        McCree: "+",
        Mei: "+",
        Orisa: "-",
        Pharah: "+",
        Reinhardt: "-",
        Torbjorn: "++",
        Winston: "--",
        WreckingBall: "-"
      }
    },
    Ana: {
      type: "healer",
      counters: {
        Ashe: "+",
        Baptiste: "+*",
        Bastion: "+",
        Dva: "-",
        Echo: "+",
        Lucio: "+",
        Moira: "+",
        Pharah: "+",
        Reaper: "+",
        Roadhog: "+*",
        Sigma: "-",
        Sombra: "-",
        Winston: "-",
        WreckingBall: "+",
        Zenyatta: "+"
      }
    },
    Baptiste: {
      type: "healer",
      counters: {
        Ana: "-*",
        Doomfist: "+",
        Dva: "+*",
        Echo: "+",
        //Junkrat: "+*",
        Roadhog: "+",
        Sombra: "-",
        Soldier: "-*"
        //Tracer: "+*"
      }
    },
    Brigitte: {
      type: "healer",
      counters: {
        Ashe: "-",
        Dva: "+",
        Genji: "+",
        Junkrat: "-",
        Pharah: "--",
        Reaper: "-",
        Reinhardt: "+",
        Sombra: "-",
        Tracer: "+",
        WreckingBall: "++"
      }
    },
    Lucio: {
      type: "healer",
      counters: {
        Ashe: "-",
        McCree: "--",
        Mei: "+",
        Roadhog: "-",
        Sigma: "+",
        Sombra: "-"
      }
    },
    Mercy: {
      type: "healer",
      counters: {
        Ashe: "-",
        Dva: "--",
        Genji: "--",
        McCree: "-"
      }
    },
    Moira: {
      type: "healer",
      counters: {
        Ana: "-",
        Dva: "-",
        Orisa: "+",
        Reinhardt: "+"
      }
    },
    Zenyatta: {
      type: "healer",
      counters: {
        Ana: "-",
        Reaper: "--",
        Sombra: "-",
        Tracer: "--",
        Zarya: "+"
      }
    }
  };

  export default heroData;