import { Component, OnInit, Input } from '@angular/core';
import d20 from 'd20';

@Component({
  selector: 'app-roll',
  templateUrl: './roll.component.html',
  styleUrls: ['./roll.component.scss'],
})
export class RollComponent implements OnInit {
  // @Input() dices:any;
  dices= [
    {
      1: {
        value: "main",
        faveur: true
      },
      2: {
        value: "hache",
        faveur: false
      },
      3: {
        value: "hache",
        faveur: true
      },
      4:{
        value: "bouclier",
        faveur: false
      },
      5: {
        value: "casque",
        faveur: false
      },
      6: {
        value: "fleche",
        faveur: false
      }
    },
    {
      1: {
        value: "main",
        faveur: false
      },
      2: {
        value: "hache",
        faveur: true
      },
      3: {
        value: "hache",
        faveur: false
      },
      4:{
        value: "bouclier",
        faveur: true
      },
      5: {
        value: "casque",
        faveur: false
      },
      6: {
        value: "fleche",
        faveur: false
      }
    },
    {
      1: {
        value: "main",
        faveur: false
      },
      2: {
        value: "hache",
        faveur: false
      },
      3: {
        value: "hache",
        faveur: false
      },
      4:{
        value: "bouclier",
        faveur: false
      },
      5: {
        value: "casque",
        faveur: true
      },
      6: {
        value: "fleche",
        faveur: true
      }
    },
    {
      1: {
        value: "main",
        faveur: false
      },
      2: {
        value: "hache",
        faveur: false
      },
      3: {
        value: "hache",
        faveur: true
      },
      4:{
        value: "bouclier",
        faveur: true
      },
      5: {
        value: "casque",
        faveur: false
      },
      6: {
        value: "fleche",
        faveur: false
      }
    },
    {
      1: {
        value: "main",
        faveur: true
      },
      2: {
        value: "hache",
        faveur: false
      },
      3: {
        value: "hache",
        faveur: false
      },
      4:{
        value: "bouclier",
        faveur: false
      },
      5: {
        value: "casque",
        faveur: false
      },
      6: {
        value: "fleche",
        faveur: true
      }
    },
    {
      1: {
        value: "main",
        faveur: false
      },
      2: {
        value: "hache",
        faveur: false
      },
      3: {
        value: "hache",
        faveur: false
      },
      4:{
        value: "bouclier",
        faveur: true
      },
      5: {
        value: "casque",
        faveur: true
      },
      6: {
        value: "fleche",
        faveur: false
      }
    }
  ]


  constructor() {}

  ngOnInit() {
      let rolling = d20.roll('1d6')
      console.log(rolling)
  }

}
