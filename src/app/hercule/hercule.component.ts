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
    console.log(results)
    this.results = results
  }

  

  //get Dice keeped
  //TODO remove from dices the keeped ones and roll with remaining dices.
  keep(dice) {
    this.diceKeeped.push(dice)
    console.log(this.diceKeeped)
  }
}
