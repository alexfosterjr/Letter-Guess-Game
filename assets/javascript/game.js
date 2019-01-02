var letters = ["A", "B", "C", "D", "E", "F", "G", 
"H", "I", "J", "K", "L", "M", "N", "O", "P", "Q", 
"R", "S", "T", "U", "V", "W", "X", "Y", "Z"];
var mysteryLetter = letters[Math.floor(Math.random() * letters.length)];
   document.onkeypress = function(event){
    var  userGuess = event.key

   
    var guesses = [];
//    defining variables
   var guessesLeft = 10;
   var wins =0;
   var losses=0;
   var winner = document.getElementById("wins");
   var loser = document.getElementById("losses")
   var guessedLetters = document.getElementById("guessedLetters");
   var numGuessLeft = document.getElementById("numGuessLeft");


  
   var mysteryLetter = letters[Math.floor(Math.random() * letters.length)];
   document.onkeypress = function(event){
    var  userGuess = event.key
    userGuess = userGuess.toUpperCase()
 console.log(mysteryLetter);
//  if you guess the right letter
      if(userGuess === mysteryLetter){
          wins = wins + 1;
          winner.textContent = "Wins: " + wins;
          guesses = [];
          guessesLeft = 10;
          numGuessLeft.textContent = "Guesses Left: " + guessesLeft;
          mysteryLetter = letters[Math.floor(Math.random() * letters.length)];

      }
      else{
        //   when you guess the wrong letter
          guessesLeft = guessesLeft - 1;
          numGuessLeft.textContent = "Guesses Left: " + guessesLeft;
          guesses.push(userGuess);
          guessedLetters.textContent = "Previous Guesses: " + guesses;
      }
      
    //   when you run out of guesses
      if (guessesLeft == 0) {
        mysteryLetter = letters[Math.floor(Math.random() * letters.length)];
        losses = losses + 1;
        loser.textContent = "Losses: " + losses;
        guesses = []
        guessesLeft = 10;
        
        
      }

    }
}

