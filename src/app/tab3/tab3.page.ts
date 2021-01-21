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

  AchilleInfo:object
  HerculeInfo:object

  constructor() {
  }

  ngOnInit() {
    var coinflip = Math.floor(Math.random() * 2) + 1;
    if(coinflip == 1) {
      this.HerculeState.current = true
    } else {
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
    console.log(turnInfo)
    if(turnInfo.endTurn === true) {
      // this.endTurn(this.AchilleInfo, this.HerculeInfo);
    } 
  }

  getHerculeTurn(turnInfo) {
    console.log(turnInfo)
    if(turnInfo.endTurn === true) {
      // this.endTurn(this.AchilleInfo, this.HerculeInfo)
    }
  }

  // endTurn(AchilleInfo, HerculeInfo) {
  //   console.log(AchilleInfo, HerculeInfo)
  // }

}
