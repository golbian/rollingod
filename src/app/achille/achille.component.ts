import { Component, OnInit, Output, Input, EventEmitter } from '@angular/core';
import dices from './achilleDice'

@Component({
  selector: 'app-achille',
  templateUrl: './achille.component.html',
  styleUrls: ['./achille.component.scss'],
})
export class AchilleComponent implements OnInit {
  dices = dices
  dicesKeeped = []
  dicesStash = []
  results = []
  pv:number = 15

  constructor() {}

  ngOnInit() {
  }

  getResult(results) {
    this.results = results
  }

  validate() {
    for(let diceKeeped of this.dicesKeeped) {
      var index = this.dices.findIndex(x => x.id === diceKeeped.id);
      if(index !== -1 ) {
        this.dices.splice(index, 1);
      }
      console.log(this.dices)
    }

    for(let diceStash of this.dicesStash) {
      this.dicesKeeped.push(diceStash)
    }
  }

  //get Dice keeped
  //TODO remove from dices the keeped ones and roll with remaining dices.
  keep(dice) {
    var index = this.dicesStash.findIndex(x => x.id === dice.id)
    if(index === -1) {
      this.dicesStash.push(dice)
    } else {
      this.dicesStash.splice(index, 1);
    }
  }
}

