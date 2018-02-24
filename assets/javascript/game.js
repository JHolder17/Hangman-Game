//array of shoes
var shoes = [
    "nike",
    "adidas",
    "acsis",
    "jordan"
]

// set shoe to a word from array of shoes
var shoe = shoes[Math.floor(Math.random() * shoes.length)];

//Global vars
var wins = 0;
var remain = 10;
var guesses = [];
var s;


//Blank "_" array for chosen word
var answerArray = [];
for (var i = 0; i < shoe.length; i++) {
    answerArray[i] = " _ ";
}

//Reset game



//Game Function
function startUp() {
    $("#guessesRemaining").html(remain);
    $("#wins").html(wins);
    $("#currentWord").html(answerArray);

    //filling answer array with underscores when game first starts
    for (var i = 0; i < shoe.length; i++) {
        answerArray[i] = " _ ";
    }

    //turn the underscore array into a string & puts it into the current word div   
    s = answerArray.join(" ");
    $("#currentWord").html(answerArray);

    //make variable userGuess = document.onkeyup 
    document.onkeypress = function () {
        var userGuess = event.key;

        //cycle through shoe, if letter in shoe = letter in answer array it replaces it
        for (var i = 0; i < shoe.length; i++) {
            if (shoe[i] === userGuess) {
                answerArray[i] = userGuess;
            }

            //updates html current word with user guess
            $("#currentWord").html(answerArray);

        }
        //if user guess is not in shoe 
        if (shoe.indexOf(userGuess) === -1) {

            //push users guess into guesses array
            guesses.push(userGuess);

            //subtract a point from lives (remain)
            remain--;

            //update guesses html with user guess 
            $("#lettersGuessed").html(guesses);

            //update reamining lives
            $("#guessesRemaining").html(remain);
        }

        //Winner
        var answerArrayString = answerArray.toString();
        if (answerArrayString.indexOf("_") === -1) {

            //update wins
            wins++;

            //update wins in html
            $("#wins").html(wins);

            //reset game
        }
        //Loser
        if (remain ===0) {

            //reset game

        }    
        
    }
}
//     }
// }
// function drawGuesses() {
//     guesses.sort();
//     $("#lettersGuessed").html(guesses.join(", "));
// }




    //use either for loop, .each(), .map()
//if userGuess == element in shoe array, change innerHTML or text of the #currentWord HTML element
    //also going to update Guesses element
//else if subtract life and update Guesses element

//TO END THE GAME
    //if answerArray == shoe
        // alert "you win"
        //reset the game
            //have function called reset

//while loop
    //either: while guesses > 0
    //or: while answerArray != shoe









//When the game loads up


        //register users key press input

        // function myFunction(event) {
        // var userGuess = event.key;

        // //make sure input is an alphabetical character 

        //     //if not as to input another character

        //     //if it is check it agaist "shoe"
        //     if (shoe[i] === userGuess) {

        //         answerArray[i] = userGuess;
        //     }

        //     //if its not in "shoe" put it in lettersguessed array







//     document.getElementById("currentword").innerHTML = s;
// }

// function Letter()
// {
//     var letter = document.getElementById("letter").value;

//     if (letter.length > 0)
//     {
//         for (var i=0; i<shoe.length; i++)
//         {
//             if (shoe[i] === letter)
//             {
//                 answerArray[i] = letter;
//             }
//         }
//         count++;
//         document.getElementById("counter").innerHTML.value;
//         document.getElementById("currentWord").innerHTML = answerArray.join(" ");
//     }
//     if(count>5)
//     {
//         document.getElementById("stat").innerHTML = "Come on";
//     } 
// }

// var remainingLetters = shoe.length;

// // Game loop
// while (remainingLetters > 0) {
//     alert(answerArray.join(" "));
//     get a guess from the player

//     if the player wants to quit the game {
//         quit the game
//     }
// else if the guess is not a single letter {
//         tell the player to pic a sigle letter
//     }
// else {
//         if the guess is in the word
//         update the players prgress with the guess
//     }
// }

// congradulate the player on guessing the word
