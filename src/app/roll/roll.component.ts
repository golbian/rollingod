import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'app-roll',
  templateUrl: './roll.component.html',
  styleUrls: ['./roll.component.scss'],
})
export class RollComponent implements OnInit {
  // @Input() dices:any;
  results = [];
  diceKeeped= [];
  initDices= [
    {
      id: 1,
      1: {
        value: "main",
        favor: true
      },
      2: {
        value: "hache",
        favor: false
      },
      3: {
        value: "hache",
        favor: true
      },
      4:{
        value: "bouclier",
        favor: false
      },
      5: {
        value: "casque",
        favor: false
      },
      6: {
        value: "fleche",
        favor: false
      }
    },
    {
      id: 2,
      1: {
        value: "main",
        favor: false
      },
      2: {
        value: "hache",
        favor: true
      },
      3: {
        value: "hache",
        favor: false
      },
      4:{
        value: "bouclier",
        favor: true
      },
      5: {
        value: "casque",
        favor: false
      },
      6: {
        value: "fleche",
        favor: false
      }
    },
    {
      id: 3,
      1: {
        value: "main",
        favor: false
      },
      2: {
        value: "hache",
        favor: false
      },
      3: {
        value: "hache",
        favor: false
      },
      4:{
        value: "bouclier",
        favor: false
      },
      5: {
        value: "casque",
        favor: true
      },
      6: {
        value: "fleche",
        favor: true
      }
    },
    {
      id: 4,
      1: {
        value: "main",
        favor: false
      },
      2: {
        value: "hache",
        favor: false
      },
      3: {
        value: "hache",
        favor: true
      },
      4:{
        value: "bouclier",
        favor: true
      },
      5: {
        value: "casque",
        favor: false
      },
      6: {
        value: "fleche",
        favor: false
      }
    },
    {
      id: 5,
      1: {
        value: "main",
        favor: true
      },
      2: {
        value: "hache",
        favor: false
      },
      3: {
        value: "hache",
        favor: false
      },
      4:{
        value: "bouclier",
        favor: false
      },
      5: {
        value: "casque",
        favor: false
      },
      6: {
        value: "fleche",
        favor: true
      }
    },
    {
      id: 6,
      1: {
        value: "main",
        favor: false
      },
      2: {
        value: "hache",
        favor: false
      },
      3: {
        value: "hache",
        favor: false
      },
      4:{
        value: "bouclier",
        favor: true
      },
      5: {
        value: "casque",
        favor: true
      },
      6: {
        value: "fleche",
        favor: false
      }
    }
  ]

  dices = this.initDices;

  constructor() {}

  ngOnInit() {}

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
