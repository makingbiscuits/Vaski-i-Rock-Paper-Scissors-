
let playerMove = document.querySelector('#rock');
let pcMove;

let playerScore = 0;
let pcScore = 0;
let gameRound = 0;
let results = document.querySelector('#game-results-tag');


let rock;
let paper;
let scissors;
let choices = ["rock", "paper", "scissors"]

function showResults(){
    results.textContent = 'smth';
}

// function gameRound(){
    // if (playerMove == 'rock'){
    //     results.textContent = "Yay";
    // }
// }

// function getPcMove(){
//     pcMove = Math.floor(Math.random() * choices.length);
//     return pcMove;
// }

// function gameRound(playerMove){
//     pcMove = Math.floor(Math.random() * choices.length);
//     if (playerMove == "rock"){
//         if (pcMove == "scissors"){
//             playerScore = ++1;
//             }
//             else if (pcMove == "paper"){
//                 pcScore = ++1;
//             }
//             else if (pcMove == "rock"){
//                 playerScore = ++1;
//                 pcScore = ++1;
//             }
//     }
//     gameRound = ++1;
//     prompt(playerScore, pcScore);
// }
