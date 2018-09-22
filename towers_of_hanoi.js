const readline = require('readline');

const reader = readline.createInterface({
  input: process.stdin,
  output: process.stdout
});


class Game {
  constructor() {
    this.towers = [[3,2,1],[],[]];
  }

  promptMove(callback) {
    console.log(this.towers);
    reader.question('choose a tower to move from', function(from_tower){
      const fromT = parseInt(from_tower);
      reader.question('chooser a tower to move to', function(to_tower){
        const toT = parseInt(to_tower);

        callback(fromT, toT);
      });
    });
  }

  // runGame(){
  //   this.promptMove(function(fromT, toT){
  //     console.log(`From: ${fromT}, To: ${toT}`);
  //   });
  // }

  isValidMove(start, end) {
    const startDisc = this.towers[start][this.towers[start].length-1];
    const endDisc = this.towers[end][this.towers[end].length-1];

    if (this.towers[start].length === 0) {
      return false;
    } else if (this.towers[end].length > 0 && endDisc > startDisc) {
      return false;
    }
    return true;
  }

  move(start, end) {
    if (this.isValidMove(start,end)) {
      const startDisc = this.towers[start].pop();
      this.towers[end].push(startDisc);
      return true;
    }
    return false;
  }

  print() {
    console.log(JSON.stringify(this.towers));
  }

  isWon() {
    if (this.towers[0].length === 0 &&
       (this.towers[1].length === 0 || this.towers[2].length === 0)){
         return true;
    }
    return false;
  }

  run(completionCallback) {
    this.promptMove(function(start, end){
      if (this.move(start,end)){
        
      } else {
        console.log("YOU DUN GOOFED");
      }
    });
  }
}

const tower_game = new Game();
tower_game.move(0,1);
tower_game.move(0,2);
tower_game.move(1,2);
tower_game.move(0,1);
tower_game.move(2,0);
tower_game.move(2,1);
tower_game.move(0,1);
console.log(tower_game.isWon());
reader.close();
