export class Dice {
   constructor(dice) {
     this[1].value = dice[1].value;
     this[1].faveur = dice[1].faveur;
     this[2].value = dice[2].value;
     this[2].faveur = dice[2].faveur;
     this[3].value = dice[3].value;
     this[3].faveur = dice[3].faveur;
     this[4].value = dice[4].value;
     this[4].faveur = dice[4].faveur;
     this[5].value = dice[5].value;
     this[5].faveur = dice[5].faveur;
     this[6].value = dice[6].value;
     this[6].faveur = dice[6].faveur;
   }

    1= {
        value: String,
        faveur: Boolean
    };
    2= {
        value: String,
        faveur: Boolean
    };

    3= {
        value: String,
        faveur: Boolean
    };
    4= {
        value: String,
        faveur: Boolean
    };
    5= {
        value: String,
        faveur: Boolean
    };
    6= {
        value: String,
        faveur: Boolean
    };
}