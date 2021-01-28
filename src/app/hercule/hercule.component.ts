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
  @Input() HerculeCurrent:boolean;
  @Input() NewTurn:boolean;
  @Input() HerculePv:number;
  @Input() HerculeFavor:number;
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
  /**
   * Florian
   * Initation des dés pour l'envoi au roll component
   */
  ngOnInit() {
    var clone = JSON.parse(JSON.stringify(dices));
    this.dices = clone
  }

  /**
   * Augustin
   * Nouveau tour, reset des dés
   */
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

  /**
   * 
   * Augustin
   * Récupération des dés lancé
   */
  getResult(results) {
    this.rollState = true
    this.results = results
  }

  /**
   * Florian
   * Validation du tour , dés gardés et envoie des donnés au turn order
   */
  //
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
        favor: this.HerculeFavor,
        diceKeeped: this.dicesKeeped
      }
      this.HerculeInfoEmitter.emit(HeroInfo);
      this.dicesKeeped = []
    }
    this.dicesStash = []
    this.TurnHerculeInfoEmitter.emit(this.endTurn);
  }

  /**
   * Alexandre
   * Récuperation des dés garders sur un lancé
   */
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
