let userScore = 0;
let compScore = 0;
const userScore_span = document.getElementById("userScore");
const compScore_span = document.getElementById("computerScore");
const scorebord_div = document.querySelector("scorebord");
var results_p = document.querySelector(".results > p");
const rock_div = document.getElementById("r");
const paper_div = document.getElementById("p");
const scissors_div = document.getElementById("s");
const smallUserWord = "user".fontsize(3).sub();
const smallCompWord = "comp".fontsize(3).sub();

function compMove(){
    let choices = ["r", "p", "s"];
    let moveIndex = Math.floor(Math.random()*3)
    return choices[moveIndex]
}

function getWord(letter){
    if(letter == "r"){return "Rock"}
    if(letter == "p"){return "Paper"}
    return "Scissors";
}

function win(userChoice, compChoice){    
    userScore++;
    userScore_span.innerHTML = userScore;
    results_p.innerHTML = getWord(userChoice) + smallUserWord + " beats "+ getWord(compChoice) + smallCompWord + ". You won!";
    document.getElementById(userChoice).classList.add('greenglow');
    setTimeout(() => document.getElementById(userChoice).classList.remove('greenglow'),300);
}

function lose(userChoice, compChoice){
    compScore++;
    compScore_span.innerHTML = compScore;
    results_p.innerHTML = getWord(compChoice) + smallCompWord + " beats "+ getWord(userChoice) + smallUserWord + ". You lost.";
    document.getElementById(userChoice).classList.add('redglow');
    setTimeout(() => document.getElementById(userChoice).classList.remove('redglow'),300);

}

function tie(userChoice, compChoice){
    results_p.innerHTML = getWord(userChoice) + smallUserWord + " is equal "+ getWord(compChoice) + smallCompWord + ". It's a tie.";
    document.getElementById(userChoice).classList.add('greyglow');
    setTimeout(() => document.getElementById(userChoice).classList.remove('greyglow'),300);

}

function game(userChoice){
    let compChoice = compMove();
    switch (userChoice + compChoice){
        case "rp":
        case "ps":
        case "sr":
            lose(userChoice, compChoice);
            break;
        case "rr":
        case "pp":
        case "ss":
            tie(userChoice, compChoice);
            break;
        case "rs":
        case "pr":
        case "sp":
            win(userChoice, compChoice);
            break;
    }
}

function main(){
    rock_div.addEventListener('click',() => game('r'));
    paper_div.addEventListener('click',() => game('p'));
    scissors_div.addEventListener('click',() => game('s'));
}
main();