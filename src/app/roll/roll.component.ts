import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';
// import dices from './dice';

@Component({
  selector: 'app-roll',
  templateUrl: './roll.component.html',
  styleUrls: ['./roll.component.scss'],
})
export class RollComponent implements OnInit {
  @Input() dices:any;
  @Output() resultEmitter = new EventEmitter();
  results = [];
  diceKeeped= [];

  constructor() {}

  ngOnInit() {
    // console.log(this.dices)
  }
  //Florian
  roll() {
    console.log(this.dices)
    this.results = [];
    for(let dice of this.dices) {
      // random number
      let rolling = Math.floor(Math.random() * 6) + 1;

      // get corresponding face for every dice
      var output = {
        id: dice.id,
        value: dice[rolling].value,
        favor: dice[rolling].favor,
        icon: dice[rolling].icon
      }

      // push all output in the results array
      this.results.push(output)
    }
    this.resultEmitter.emit(this.results);
  }
}
