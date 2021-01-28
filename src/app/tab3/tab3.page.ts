import { Component } from '@angular/core';

@Component({
  selector: 'app-tab3',
  templateUrl: 'tab3.page.html',
  styleUrls: ['tab3.page.scss']
})
export class Tab3Page {
  HerculeState = {
    current: false,
    endTurn: false,
  };
  AchilleState = {
    current: false,
    endTurn: false,
  }
  HerculeTurnCount:number = 0
  AchilleTurnCount:number = 0

  StartPlayer:string = "";
  AchilleInfo:object
  HerculeInfo:object
  HerculePv:number = 15;
  AchillePv:number = 15;
  NewTurn:boolean = false;

  constructor() {
  }

  ngOnInit() {
    var coinflip = Math.floor(Math.random() * 2) + 1;
    if(coinflip == 1) {
      this.StartPlayer = "Hercule"
      this.HerculeState.current = true
      console.log("Hercule")
    } else {
      this.StartPlayer = "Achille"
      this.AchilleState.current = true
      console.log("Achille")
    }
  }

  getAchilleInfo(HeroInfo) {
    this.AchilleInfo = HeroInfo
    console.log(HeroInfo)
  }

  getHerculeInfo(HeroInfo) {
    this.HerculeInfo = HeroInfo
    console.log(HeroInfo)
  }

  getAchilleTurn(turnInfo) {
    if(turnInfo.endTurn === true) {
      this.AchilleTurnCount = 3
      this.endTurn();
    } else {
      this.AchilleTurnCount += 1
    }
    this.HerculeState.current = true
    this.AchilleState.current = false
  }

  getHerculeTurn(turnInfo) {
    if(turnInfo.endTurn === true) {
      this.HerculeTurnCount = 3
      this.endTurn()
    } else {
      this.HerculeTurnCount += 1
    }
    this.AchilleState.current = true
    this.HerculeState.current = false
  }

  endTurn() {
    if(this.HerculeTurnCount === 3 && this.AchilleTurnCount === 3) {
      if(this.StartPlayer === "Achille") {
        this.ProcessDamage(this.AchilleInfo, this.HerculeInfo);
        this.StartPlayer = "Hercule"
      } else {
        this.ProcessDamage(this.HerculeInfo, this.AchilleInfo);
        this.StartPlayer = "Achille"
      }
      this.IdoleChoice();
      this.HerculeTurnCount = 0
      this.AchilleTurnCount = 0
    }
  }

  ProcessDamage(Player1Info, Player2Info) {
    var Player1 = {
      pv: Player1Info.pv,
      favor: 0,
      hache: 0,
      bouclier: 0,
      main: 0,
      fleche: 0,
      casque: 0,
    }

    var Player2 = {
      pv: Player2Info.pv,
      favor: 0,
      hache: 0,
      bouclier: 0,
      main: 0,
      fleche: 0,
      casque: 0,
    }

    for(const dice of Player1Info.diceKeeped) {
      if(dice.favor === true) {
        Player1.favor += 1
      }
      Player1[dice.value] += 1
    }

    for(const dice of Player2Info.diceKeeped) {
      if(dice.favor === true) {
        Player2.favor += 1
      }
      Player2[dice.value] += 1
    }


    
    Player2.pv += this.verifyDamage(Player2.bouclier,Player1.hache)
    Player1.pv += this.verifyDamage(Player1.bouclier,Player2.hache)
    Player2.pv += this.verifyDamage(Player2.casque,Player1.fleche)
    Player1.pv += this.verifyDamage(Player1.casque,Player2.fleche)
    var test = Math.sign(Player2.favor - Player1.main);
    if( test !== -1) {
      Player2.favor -= Player2.favor - Player1.main
      Player1.favor + Player1.main
    } else {
      Player1.favor += Player2.favor
      Player2.favor = 0
    }

    var test = Math.sign(Player1.favor - Player2.main);
    if( test !== -1) {
      Player1.favor -= Player1.favor - Player2.main
      Player2.favor + Player2.main
    } else {
      Player2.favor += Player1.favor
      Player1.favor = 0
    }

    if(this.StartPlayer === "Achille") {
      this.AchillePv = Player1.pv
      this.HerculePv = Player2.pv
    } else {
      this.HerculePv = Player1.pv
      this.AchillePv = Player2.pv
    }

    this.NewTurn = true;
    console.log(Player1, "player1")
    console.log(Player2, "player2")
  }

  verifyDamage(nombre1 , nombre2) {
    var test = Math.sign(nombre1 - nombre2)
    if(test == -1) {
      return nombre1 - nombre2
    } else {
      return 0
    }
  }

  IdoleChoice() {
    
  }

}
