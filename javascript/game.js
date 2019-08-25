var attempts = [" ", " ", " "];
var win = 0;
var win1 = 0;
var loss = 0;
var counter = 0;
var q = 0;

var userChoiceText = document.getElementById("userchoice-text");
var winsText = document.getElementById("wins-text");
var lossesText = document.getElementById("losses-text");
var text = document.getElementById("text")
var word = ["a", "b", "c", "d", "e", "f", "g", "h", "i", "j", "k", "l", "m", "n", "o", "p", "q", "r", "s", "t", "u", "v", "w", "y", "z"]
var word1 = ["_"];
var letter = word[Math.floor(Math.random() * word.length)]

userChoiceText.textContent = "You chose: " + attempts;
winsText.textContent = "Wins: " + win1;
lossesText.textContent = "Loses: " + loss;


document.onkeyup = function(event) {

    var guess = event.key.toLowerCase();
    console.log(letter)
    userChoiceText.textContent = "You chose: " + attempts;
    winsText.textContent = "Wins: " + win1;
    lossesText.textContent = "Loses: " + loss;



    text.textContent = "Secret letter: " + word1[0] + " "
    if (counter == 7 || win == 1) {
        if (win == 1) {
            win1++;


            counter = 0;
            win = 0;
            word1 = ["_"]
            attempts = [" ", " ", " "]
            q = 0;
            letter = word[Math.floor(Math.random() * word.length)]
        } else {
            loss++;


            counter = 0;
            win = 0;
            word1 = ["_"]
            attempts = [" ", " ", " "]
            q = 0
            letter = word[Math.floor(Math.random() * word.length)]
        }
    } else {

        if (guess === letter) {
            win++

            attempts[q] = guess;
            q++;
            userChoiceText.textContent = "You chose: " + attempts;
            word1[0] = guess
            text.textContent = "Secret letter: " + word1[0] + " "
        } else {

            counter++;
            attempts[q] = guess;
            q++;
            userChoiceText.textContent = "You chose: " + attempts;
        }


    }


}