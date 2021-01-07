import { Component, OnInit, Input } from '@angular/core';
const dices = require("./dice.json")

@Component({
  selector: 'app-roll',
  templateUrl: './roll.component.html',
  styleUrls: ['./roll.component.scss'],
})
export class RollComponent implements OnInit {
  // @Input() dices:any;
  results = [];
  diceKeeped= [];
  initDices= dices;

  dices = this.initDices;

  constructor() {}

  ngOnInit() {
      console.log(this.initDices)
  }

  roll() {
    for(let dice of this.dices) {
      // random number
      let rolling = Math.floor(Math.random() * 6) + 1;
      console.log(rolling)

      // get corresponding face for every dice
      var output = {
        id: dice.id,
        value: dice[rolling].value,
        favor: dice[rolling].favor
      }

      // push all output in the results array
      this.results.push(output)
      console.log(output)
    }
    console.log(this.results)
  }


  //get Dice keeped
  //TODO remove from dices the keeped ones and roll with remaining dices.
  keep(dice) {
    this.diceKeeped.push(dice)
    console.log(this.diceKeeped)
  }
}
