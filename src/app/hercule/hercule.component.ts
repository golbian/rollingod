import { Component, OnInit, Output, Input, EventEmitter } from '@angular/core';
import dices from './herculeDice'

@Component({
  selector: 'app-hercule',
  templateUrl: './hercule.component.html',
  styleUrls: ['./hercule.component.scss'],
})
export class HerculeComponent implements OnInit {
  dices = dices
  dicesKeeped = []
  dicesStash = []
  results = []
  pv:number = 15
  rollState = false

  constructor() {}

  ngOnInit() {
  }

  getResult(results) {
    this.rollState = true
    this.results = results
  }

  validate() {
    this.rollState = false
    for(let diceStash of this.dicesStash) {
      this.dicesKeeped.push(diceStash)
    }
    for(let diceKeeped of this.dicesKeeped) {
      var index = this.dices.findIndex(x => x.id === diceKeeped.id);
      if(index !== -1 ) {
        this.dices.splice(index, 1);
      }
    }
    this.dicesStash = []
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
