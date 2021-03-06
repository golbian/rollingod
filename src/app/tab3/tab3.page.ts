import { Component } from '@angular/core';

@Component({
  selector: 'app-tab3',
  templateUrl: 'tab3.page.html',
  styleUrls: ['tab3.page.scss']
})
export class Tab3Page {

  AchilleCurrent:boolean = false;
  HerculeCurrent:boolean = false;

  HerculeTurnCount:number = 0
  AchilleTurnCount:number = 0

  StartPlayer:string = "";
  AchilleInfo:object
  HerculeInfo:object
  HerculePv:number = 15;
  AchillePv:number = 15;
  HerculeFavor: number = 0;
  AchilleFavor:number = 0;
  NewTurn:boolean = false;

  constructor() {
  }

  /**
   * Augustin
   * Initie le turn order
   */
  ngOnInit() {
    var coinflip = Math.floor(Math.random() * 2) + 1;
    if(coinflip == 1) {
      this.StartPlayer = "Hercule"
      this.HerculeCurrent = true
      console.log("Hercule")
    } else {
      this.StartPlayer = "Achille"
      this.AchilleCurrent = true
      console.log("Achille")
    }
  }


  /**
   * Florian
   * Récupération des dés lancé et des faveurs actuelles
   */
  getAchilleInfo(HeroInfo) {
    this.AchilleInfo = HeroInfo
    this.AchilleFavor = HeroInfo.favor
    console.log(HeroInfo)
  }

  /**
   * Florian
   * Récupération des dés lancé et des faveurs actuelles
   */
  getHerculeInfo(HeroInfo) {
    this.HerculeInfo = HeroInfo
    this.HerculeFavor = HeroInfo.favor
    console.log(HeroInfo)
  }


   /**
   * Alexandre
   * Récupération de la variable de fin de tour et vérifie si le joueur à joué tout ses dés assigne le tour à l'autre joueur
   */
  getAchilleTurn(endTurn) {
    console.log("turn info: " + endTurn)
    if(endTurn === true) {
      this.AchilleTurnCount = 3
      this.endTurn();
      this.AchilleCurrent = false
    } else {
      this.AchilleTurnCount += 1
    }

    if(this.HerculeTurnCount !== 3) {
      this.HerculeCurrent = true
    } 
    this.AchilleCurrent = false
    console.log("Achille state: " + this.AchilleCurrent)
    console.log("Hercule state: " + this.HerculeCurrent)
  }

  /**
   * Alexandre
   * Récupération de la variable de fin de tour et vérifie si le joueur à joué tout ses dés assigne le tour à l'autre joueur
   */
  getHerculeTurn(endTurn) {
    console.log("turn info: " + endTurn)
    if(endTurn === true) {
      this.HerculeTurnCount = 3
      this.endTurn()
      this.HerculeCurrent = true
    } else {
      this.HerculeTurnCount += 1
    }

    if(this.AchilleTurnCount !== 3) {
      this.AchilleCurrent = true
    }
    this.HerculeCurrent = false
    console.log("Achille state: " + this.AchilleCurrent)
    console.log("Hercule state: " + this.HerculeCurrent)
  }

  //Alexandre
  /**
   * Check si le tour est fini, et fais le calcul des dégats
   */
  endTurn() {
    if(this.HerculeTurnCount === 3 && this.AchilleTurnCount === 3) {
      if(this.StartPlayer === "Achille") {
        this.ProcessDamage(this.AchilleInfo, this.HerculeInfo);
        this.StartPlayer = "Hercule"
      } else {
        this.ProcessDamage(this.HerculeInfo, this.AchilleInfo);
        this.StartPlayer = "Achille"
      }
      this.IdoleChoice();
      this.HerculeTurnCount = 0;
      console.log(this.HerculeTurnCount);
      this.AchilleTurnCount = 0;
      console.log(this.AchilleTurnCount);
    }
  }

  /**
   * Florian && théorie Augustin
   * Calcul des dégats
   */
  ProcessDamage(Player1Info, Player2Info) {
    var Player1 = {
      pv: Player1Info.pv,
      favor: Player1Info.favor,
      hache: 0,
      bouclier: 0,
      main: 0,
      fleche: 0,
      casque: 0,
    }

    var Player2 = {
      pv: Player2Info.pv,
      favor: Player2Info.favor,
      hache: 0,
      bouclier: 0,
      main: 0,
      fleche: 0,
      casque: 0,
    }

    /**
     * Ajoute les faveurs correspondantes au lancé de dés
     */

    for(const dice of Player1Info.diceKeeped) {
      if(dice.favor === true) {
        Player1.favor += 1
      }
      Player1[dice.value] += 1
    }

    for(const dice of Player2Info.diceKeeped) {
      if(dice.favor === true) {
        Player2.favor += 1
      }
      Player2[dice.value] += 1
    }


    /**
     * calculs des dégats et faveur (volé)
     */
    
    Player2.pv += this.verifyDamage(Player2.bouclier,Player1.hache)
    Player1.pv += this.verifyDamage(Player1.bouclier,Player2.hache)
    Player2.pv += this.verifyDamage(Player2.casque,Player1.fleche)
    Player1.pv += this.verifyDamage(Player1.casque,Player2.fleche)
    var test = Math.sign(Player2.favor - Player1.main);
    if( test !== -1) {
      Player2.favor -= Player2.favor - Player1.main
      Player1.favor + Player1.main
    } else {
      Player1.favor += Player2.favor
      Player2.favor = 0
    }

    var test = Math.sign(Player1.favor - Player2.main);
    if( test !== -1) {
      Player1.favor -= Player1.favor - Player2.main
      Player2.favor + Player2.main
    } else {
      Player2.favor += Player1.favor
      Player1.favor = 0
    }

    /**
     * application dégats faveur, et changements de tour
     */
    if(this.StartPlayer === "Achille") {
      this.AchillePv = Player1.pv
      this.AchilleFavor = Player1.favor
      this.HerculePv = Player2.pv
      this.HerculeFavor = Player2.favor
      this.AchilleCurrent = false;
      this.HerculeCurrent = true;
      this.StartPlayer = "Hercule"
    } else {
      this.HerculePv = Player1.pv
      this.HerculeFavor = Player1.favor
      this.AchillePv = Player2.pv
      this.AchilleFavor = Player2.favor
      this.AchilleCurrent = true;
      this.HerculeCurrent = false;
      this.StartPlayer = "Achille"
    }

    this.NewTurn = true;
    console.log(Player1, "player1")
    console.log(Player2, "player2")
  }

  /**
   * Augustin
   * Verification des dégats pour éviter les valeurs positives = heal
   */
  verifyDamage(nombre1 , nombre2):number {
    var test = Math.sign(nombre1 - nombre2)
    if(test == -1) {
      return nombre1 - nombre2
    } else {
      return 0
    }
  }

  //TODO
  IdoleChoice() {
    console.log("idol choice");
  }

}
