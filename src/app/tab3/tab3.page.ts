import { Component } from '@angular/core';

@Component({
  selector: 'app-tab3',
  templateUrl: 'tab3.page.html',
  styleUrls: ['tab3.page.scss']
})
export class Tab3Page {
  HerculeState = {
    current: false,
    endTurn: false
  };
  AchilleState = {
    current: false,
    endTurn: false
  }
  HerculeTurnCount:number = 0
  AchilleTurnCount:number = 0

  StartPlayer:boolean = true;
  AchilleInfo:object
  HerculeInfo:object

  constructor() {
  }

  ngOnInit() {
    var coinflip = Math.floor(Math.random() * 2) + 1;
    if(coinflip == 1) {
      this.StartPlayer = true
      this.HerculeState.current = true
    } else {
      this.StartPlayer = false
      this.AchilleState.current = true
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
  }

  getHerculeTurn(turnInfo) {
    if(turnInfo.endTurn === true) {
      this.HerculeTurnCount = 3
      this.endTurn()
    } else {
      this.HerculeTurnCount += 1
    }
    this.AchilleState.current = true
  }

  endTurn() {
    if(this.HerculeTurnCount && this.AchilleTurnCount) {
      this.StartPlayer = !this.StartPlayer
      if(this.StartPlayer) {
        this.ProcessDamage(this.AchilleInfo, this.HerculeInfo);
      } else {
        this.ProcessDamage(this.HerculeInfo, this.AchilleInfo);
      }
      
      this.IdoleChoice();
    }
  }

  ProcessDamage(Player1Info, Player2Info) {
    var Player1 = {
      favor: 0,
      hache: 0,
      bouclier: 0,
      main: 0,
      fleche: 0,
      casque: 0,
    }

    var Player2 = {
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

    console.log(Player1)
    console.log(Player2)

  }

  IdoleChoice() {
    
  }

}
