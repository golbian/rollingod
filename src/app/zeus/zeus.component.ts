import { Component, OnInit } from '@angular/core';

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
      "4 faveurs inflige 2 dégats à l'adversaire",
      "8 faveurs inflige 5 dégats à l'adversaire",
      "12 faveurs inflige 8 dégats à l'adversaire",
    ]
  }

  ////////////////////////////////// FONCTIONS //////////////////////////////////

  /**
   * Retourne la valeur de dégât du pouvoir selectionné
   * 
   * @param element item sélectionné sur l'interface
   */
  public damage(element:string) {
    let selection = this.zeus.powers.indexOf(element);
    console.log(selection);
    switch (selection) {
      case 0: {
          return 2;
      }
      case 1: {
        return 5;
      }
      case 2: {
        return 8;
      }
      default: {
        return -1;
      }
    } 
  }



  constructor() { }

  ngOnInit() {
  }

}
