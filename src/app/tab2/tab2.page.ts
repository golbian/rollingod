import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-tab2',
  templateUrl: 'tab2.page.html',
  styleUrls: ['tab2.page.scss']
})
export class Tab2Page implements OnInit {
  ouvrirCreation : boolean;
  private _face: { [id: number]: [face: string, favor: boolean];} = {};

  public get face(): { [id: number]: [face: string, favor: boolean] } {
    return this._face;
  }

  public set face(value: { [id: number]: [face: string, favor: boolean] }) {
    this._face = value;
  }

  private _dice: { [id: number]: [faces: []]; } = {};

  public get dice(): { [id: number]: [faces: []]; } {
    return this._dice;
  }

  public set dice(value: { [id: number]: [faces: []]; }) {
    this._dice = value;
  }

  constructor() {}

  ngOnInit(): void {
    this.ouvrirCreation = false;
  }

  // Create a 6-dice with a correspondance between index and faces
  // A boolean named favor is also used to know if de face provides a jeton
  diceCreation(index : number) {
    // Créer un Dé à 6 faces vides
    this.dice = new { id = index, faces[] = new []};

    // Créer une Liste de 6 chiffres : 1, 2, 3, 4, 5, 6
    var list = new Array();

    // Pour chaque membre de la Liste
    //   Random(pile, face, tranche)
    //   Si pile 
    //     la face d'index i du Dé donne un jeton
    //   Fin Si
    //   x = Random(0 à 6 - i)
    //   la face d'index i prend la valeur x
    //   on enlève x de la Liste
    // Fin Pour
    // Renvoie le Dé
  }

}
