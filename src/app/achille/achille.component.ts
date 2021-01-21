import { Component, OnInit, Output, Input, EventEmitter } from '@angular/core';
import dices from './achilleDice'

@Component({
  selector: 'app-achille',
  templateUrl: './achille.component.html',
  styleUrls: ['./achille.component.scss'],
})
export class AchilleComponent implements OnInit {
  @Output() AchilleInfoEmitter = new EventEmitter();
  @Output() TurnAchilleInfoEmitter = new EventEmitter();
  @Input() AchilleState:any;
  dices = dices
  dicesKeeped = []
  dicesStash = []
  results = []
  pv:number = 15
  favor:number = 0
  HeroInfo = {
    pv: this.pv,
    favor: this.favor,
  }
  rollState = false

  constructor() {}

  ngOnInit() {
    this.AchilleInfoEmitter.emit(this.HeroInfo);
  }

  getResult(results) {
    this.rollState = true
    this.results = results
  }

  validate() {
    this.rollState = false
    for(let diceStash of this.dicesStash) {
      if(diceStash.favor === true) {
        this.HeroInfo.favor += 1
      }
      this.dicesKeeped.push(diceStash)
    }
    for(let diceKeeped of this.dicesKeeped) {
      var index = this.dices.findIndex(x => x.id === diceKeeped.id);
      if(index !== -1 ) {
        this.dices.splice(index, 1);
      }
    }
    if(this.dices.length === 0) {
      this.AchilleState.endTurn = true
    }
    this.dicesStash = []
    this.AchilleState.current = false;
    this.TurnAchilleInfoEmitter.emit(this.AchilleState);
    this.AchilleInfoEmitter.emit(this.HeroInfo);
  }

  //get Dice keeped
  //TODO remove from dices the keeped ones and roll with remaining dices.
  keep(dice, event) {
    console.log(event.target);
    var index = this.dicesStash.findIndex(x => x.id === dice.id)
    if(index === -1) {
      this.dicesStash.push(dice)
      event.target.classList.add("highlight");
    } else {
      this.dicesStash.splice(index, 1);
      event.target.classList.remove("highlight");
    }
  }
}
