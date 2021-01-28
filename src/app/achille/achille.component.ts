import { Component, OnInit, Output, Input, EventEmitter, SimpleChanges } from '@angular/core';
import dices from './achilleDice'

@Component({
  selector: 'app-achille',
  templateUrl: './achille.component.html',
  styleUrls: ['./achille.component.scss'],
})
export class AchilleComponent implements OnInit {
  @Output() AchilleInfoEmitter = new EventEmitter();
  @Output() TurnAchilleInfoEmitter = new EventEmitter();
  // @Output() ResetEmitter = new EventEmitter();
  @Input() AchilleState:any;
  @Input() NewTurn:boolean;
  @Input() AchillePv:number;
  @Input() AchilleFavor:number;
  dices;
  dicesKeeped = []
  dicesStash = []
  results = []
  // pv:number = 15
  // favor:number = 0
  rollState = false

  constructor() {}

  ngOnInit() {
    var clone = JSON.parse(JSON.stringify(dices));
    this.dices = clone
  }


  reset() {
    console.log("ext")
    if(this.NewTurn) {
      console.log("int")
      var clone = JSON.parse(JSON.stringify(dices));
      this.dices = clone
      // this.dicesKeeped = []
      // this.ResetEmitter.emit(this.NewTurn)
    }
  }


  getResult(results) {
    this.rollState = true
    this.results = results
  }

  validate() {
    this.rollState = false
    this.reset();

    for(let diceStash of this.dicesStash) {
      this.dicesKeeped.push(diceStash)
    }
    for(let diceKeeped of this.dicesKeeped) {
      var index = this.dices.findIndex(x => x.id === diceKeeped.id);
      if(index !== -1 ) {
        this.dices.splice(index, 1);
      }
    }
    if(this.dices.length === 0) {
      var HeroInfo = {
        pv: this.AchillePv,
        favor: this.AchilleFavor,
        diceKeeped: this.dicesKeeped
      }
      this.AchilleState.endTurn = true
      this.AchilleInfoEmitter.emit(HeroInfo);
      this.dicesKeeped = []
    }
    this.dicesStash = []
    this.AchilleState.current = false;
    this.TurnAchilleInfoEmitter.emit(this.AchilleState);
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
