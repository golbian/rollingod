import { Component, OnInit, Output, Input, EventEmitter, SimpleChanges } from '@angular/core';
import dices from './herculeDice'

@Component({
  selector: 'app-hercule',
  templateUrl: './hercule.component.html',
  styleUrls: ['./hercule.component.scss'],
})
export class HerculeComponent implements OnInit {
  @Output() HerculeInfoEmitter = new EventEmitter();
  @Output() TurnHerculeInfoEmitter = new EventEmitter();
  @Input() HerculeCurrent:any;
  // @Output() ResetEmitter = new EventEmitter();
  //@Input() HerculeState:any;
  @Input() NewTurn:boolean;
  @Input() HerculePv:number;
  // @Input() NewTurn:boolean;
  endTurn = false;
  current = false;
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

  /*ngOnChanges() {
    this.current = this.HerculeState.current;
    console.log("Hercule state: " + this.HerculeState.current)
  }*/

  // currentState() {
  //   this.current = this.HerculeState.current;
  // }

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
      this.endTurn = true
      var HeroInfo = {
        pv: this.HerculePv,
        diceKeeped: this.dicesKeeped
      }
      this.HerculeInfoEmitter.emit(HeroInfo);
      this.dicesKeeped = []
    }
    this.dicesStash = []
    this.TurnHerculeInfoEmitter.emit(this.endTurn);
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
