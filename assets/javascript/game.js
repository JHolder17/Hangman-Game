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
    var wins =0;
    var remain = 10;
    var guesses = [];

    //Blank "_" array for chosen word
    var answerArray = [];
        for (var i = 0; i < shoe.length; i++) {
        answerArray[i] = "_";
        }
    //settng letters of chosen word to the chosen word lenght
    var remainingLetters = shoe.length;

    function drawGuesses(){
        guesses.sort(); 
        $("#lettersGuessed").html(guesses.join(", "));
    }
    
    
    // function startUp() {
    // document.getElementById("guessesRemaining").innerHTML = remain;
    // document.getElementById("wins").innerHTML = wins;


    //     }

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
