//Este es el test Ignasi
describe('passwordValidation', function() {

    // beforeEach(function() {

    // });

    it('checks if the size is equal to config parameter', function() {        
        expect(passwordValidation('123456789A#')).toBeTruthy();
        expect(passwordValidation('1234A')).toBeFalsy();

    });

    it('checks if the number of uppercase letters is equal to config parameter', function() {
        expect(passwordValidation('1234567890A#')).toBeTruthy();
        expect(passwordValidation('1234567890a')).toBeFalsy();
    });

    it('checks if there are numbers in the pwd equal to config parameter', function() {

        expect(passwordValidation('1234567890A#')).toBeTruthy();
        expect(passwordValidation('Abcdefghadw$ndiwdw')).toBeFalsy();
    });

    it('checks for special characters provided in the config parameter', function() {
        expect(passwordValidation('123456789A#')).toBeTruthy();
        expect(passwordValidation('12345678Awskqws')).toBeFalsy();
    });

    it('accepts an alternative config file if passed', function () {
        var altConfig = {
            size: 5,
            uppercase: 2,
            numbers: 3,
            special: "#%&!"
        }
        expect(passwordValidation('123AF#', altConfig)).toBeTruthy();
        expect(passwordValidation('14A#', altConfig)).toBeFalsy();   
    });

});

//Hasta aquí el test Ignasi

//Implementación Ignasi
function passwordValidation(pwd, obj) {

    var config = obj ||{
        size: 10,
        uppercase: 1,
        numbers: 2,
        special: "$#%&-!?"
    };

    if (pwd.length < config.size) {
        return false }
        //
    if (pwd.replace(/[^A-Z]/g, '').length <= config.uppercase) {
        return false }
    if (pwd.replace(/[^0-9]/g, '').length <= config.numbers) {
        return false }
//La barra / hace  que trate el regex como un caracter y no como una expresión
    if (!(/[\$#%&\-!\?]/.test(pwd))) {
        return false }

    return true;


}



//Test Dídac
//Hay varias bebidas, y en función de la edad devolverá una cosa u otra
describe("drinkAbout", function() {
var app;

  beforeEach(function() { 
      drinkAbout();
  });

  

  it("drink toddy OK! 0-13", function() {
       

        expect(drinkAbout(13)).toBe("drink toddy");
  });

  it("drink coke OK! 14-17", function() {
    
    
        expect(drinkAbout(16)).toBe("drink coke");
  });


  });

//Implementación Dídac
function drinkAbout(year){

    if(year <= 13){
        return "drink toddy";
    } else if(year <=17){
        return "drink coke";
    } else if(year <= 18){
        return "drink beer";
    } else if(year <= 29){
        return "drink beer";
    }else if(year > 30){
        return "drink whisky";
    }

}
drinkAbout(13);







//Test Yasmina
describe("RockPaperScissors", function() {
  
  
  beforeEach(function() {
    
  });

  function getRandomValue () {
    var values = ['ROCK', 'PAPER', 'SCISSORS']
    return values[Math.floor(Math.random()*3)]
  }

  it("Decides the correct winner between two random values", function() {
    val1 = getRandomValue();
    val2 = getRandomValue();
    var players = [val1, val2];
    players.sort()
    var result = ''
    if (val1 === val2) {
      result = val1 + ' vs ' + val2 + ' => tie!'
    } else if (players[0] === 'PAPER' && players[0] === 'ROCK') {
      result = val1 + ' vs ' + val2 + ' => PAPER wins!'
    } else if (players[0] === 'PAPER' && players[0] === 'SCISSORS') {
      result = val1 + ' vs ' + val2 + ' => SCISSORS wins!'
    } else {
      result = val1 + ' vs ' + val2 + ' => ROCK wins!'
    }
    expect(game.rockPaperScissors(val1, val2)).toBe(result);
  });

  it("If the function is called with 'PAPER' the move of the second player is randomly generated", function() {
    val1 = 'PAPER'
    result1 = 'PAPER vs PAPER => tie!'
    result2 = 'PAPER vs SCISSORS => SCISSORS wins!'
    result3 = 'PAPER vs ROCK => PAPER wins!'

    expect(game.rockPaperScissors(val1)).toBe((result1 || result2) || result3);
  });

  it("If the function is called with 'ROCK' the move of the second player is randomly generated", function() {
    val1 = 'ROCK'
    result1 = 'ROCK vs ROCK => tie!'
    result2 = 'ROCK vs SCISSORS => ROCK wins!'
    result3 = 'ROCK vs PAPER => PAPER wins!'

    expect(game.rockPaperScissors(val1)).toBe((result1 || result2) || result3);
  });

  it("If the function is called with 'SCISSORS' the move of the second player is randomly generated", function() {
    val1 = 'SCISSORS'
    result1 = 'SCISSORS vs SCISSORS => tie!'
    result2 = 'SCISSORS vs ROCK => ROCK wins!'
    result3 = 'SCISSORS vs PAPER => SCISSORS wins!'

    expect(game.rockPaperScissors(val1)).toBe((result1 || result2) || result3);
  });


  it("Ranking sums ok if the winner is player1", function() {
    var count1 = game.player1
    game.rockPaperScissors('ROCK', 'SCISSORS')
    expect(game.player1).toBe(count1+1);
  });

  it("Ranking sums ok if the winner is player2", function() {
    var count2 = game.player2
    game.rockPaperScissors('ROCK', 'PAPER')
    expect(game.player2).toBe(count2+1);
  });

  it("The ranking does not add up to the player1 if there is a tie", function() {
    var value = getRandomValue();
    var count1 = game.player1
    game.rockPaperScissors(value, value)
    expect(game.player1).toBe(count1);
  });

  it("The ranking does not add up to the player2 if there is a tie", function() {
    var value = getRandomValue();
    var count2 = game.player2
    game.rockPaperScissors(value, value)
    expect(game.player2).toBe(count2);
  });

  it("Shows the correct winner", function() {
    var player1 = game.player1;
    var player2 = game.player2;
    result = ''
    if (player1 === player2) {
      result = 'There is a tie!'
    } else if (player1 > player2) {
      result = 'Player1 is winning!'
    } else {
      result = 'Player2 is winning!'
    }
    expect(game.winner()).toBe(result);
  });

});



//Implementación Yasmina
var game = {
  player1: 0,
  player2: 0,
  rockPaperScissors : function (val1, val2) {
    if (val2 === undefined) {
        val2 = getValue()
    }
    var values = [val1, val2];
    values.sort();
    if (val1 === val2) {
        return val1 + ' vs ' + val2 + ' => tie!'
    } else if (values[0] === 'PAPER' && values[1] === 'ROCK') {
        (val1 === values[0]) ? game.player1+=1 : game.player2+=1
        return val1 + ' vs ' + val2 + ' => PAPER wins!'
    } else if (values[0] === 'PAPER' && values[1] === 'SCISSORS') {
        (val1 === values[0]) ? game.player2+=1 : game.player1+=1
        return val1 + ' vs ' + val2 + ' => SCISSORS wins!'
    } else {
        (val1 === values[0]) ? game.player1+=1 : game.player2+=1
        return val1 + ' vs ' + val2 + ' => ROCK wins!'
    }
  }, 
  winner: function() {
    if (this.player1 === this.player2) {
        return 'There is a tie!'
    } else if (this.player1 > this.player2) {
        return 'Player1 is winning!'
    } else {
        return 'Player2 is winning!'
    }
  }
}

function getValue () {
    var values = ['PAPER', 'ROCK', 'SCISSORS']
    return values[Math.floor(Math.random()*3)]
}







