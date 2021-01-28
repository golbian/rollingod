import { Component, OnInit } from '@angular/core';


/**
 * Alexandre
 */

@Component({
  selector: 'app-zeus',
  templateUrl: './zeus.component.html',
  styleUrls: ['./zeus.component.scss'],
})
export class ZeusComponent implements OnInit {

  ////////////////////////////////// VARIABLES //////////////////////////////////
  zeus = {
    name : "Zeus",
    description : "Lance un terrible éclair directement sur l'adversaire",
    powers : [
      {
        favor: 4,
        damage: 2,
        description: "4 faveurs inflige 2 dégats à l'adversaire",
      },
      {
        favor: 8,
        damage: 5,
        description: "8 faveurs inflige 5 dégats à l'adversaire",
      },
      {
        favor: 12,
        damage: 8,
        description: "12 faveurs inflige 8 dégats à l'adversaire",
      },

    ]
  }

  ////////////////////////////////// FONCTIONS //////////////////////////////////


  //todo une fois implémenté dans le component principal


  constructor() { }

  ngOnInit() {
  }

}
