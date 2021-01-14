import { Component, OnInit, Output, Input, EventEmitter } from '@angular/core';
import dices from './herculeDice'

@Component({
  selector: 'app-hercule',
  templateUrl: './hercule.component.html',
  styleUrls: ['./hercule.component.scss'],
})
export class HerculeComponent implements OnInit {
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
