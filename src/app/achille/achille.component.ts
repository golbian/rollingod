import { Component, OnInit, Output, Input, EventEmitter } from '@angular/core';
import dices from './achilleDice'

@Component({
  selector: 'app-achille',
  templateUrl: './achille.component.html',
  styleUrls: ['./achille.component.scss'],
})
export class AchilleComponent implements OnInit {
  dices = dices
  diceKeeped = []
  results = []

  constructor() {}

  ngOnInit() {

  }

  getResult(results) {
    this.results = results
  }

    //get Dice keeped
  //TODO remove from dices the keeped ones and roll with remaining dices.
  keep(dice) {
    var index = this.diceKeeped.findIndex(x => x.id === dice.id)
    if(index === -1) {
      this.diceKeeped.push(dice)
    } else {
      this.diceKeeped.splice(index, 1);
    }
  }
}
