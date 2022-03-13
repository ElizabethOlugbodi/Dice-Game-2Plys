// let .dice = ["dice1.png",
// "dice2.png",
// "dice3.png",
// "dice4.png",
// "dice5.png",
// "dice6.png"];
// let .dice = document.querySelectorAll("dice");

let scores, roundScore, activePlayer, gamePlaying;

init();
// ROLL button
document.querySelector(".btn-roll").addEventListener("click", function() {
  if (gamePlaying) {
    // 1. Random number
    let dice = Math.floor(Math.random() * 6) + 1;
    // 2. Display the result
    let diceDOM = document.querySelector(".dice");
    diceDOM.style.display = "block";
    diceDOM.src = "dice-" + dice + ".png";
    // 3. Update the round score IF the rolled number is 1
    if (dice !== 1) {
      // Add score
      roundScore += dice;
      document.getElementById(
        "current-" + activePlayer
      ).textContent = roundScore;
    } else {
      // Next player
      nextPlayer();
    }
  }
});
// HOLD button
document.querySelector(".btn-hold").addEventListener("click", function() {
  if (gamePlaying) {
    // Add CURRENT score to GLOBAL score
    scores[activePlayer] += roundScore;
    // Update the UI
    document.querySelector("#score-" + activePlayer).textContent =
      scores[activePlayer];
    // Check if player won the game
    if (scores[activePlayer] >= 20) {
      document.querySelector("#name-" + activePlayer).textContent = "Winner!";
      document.querySelector(".dice").style.dispaly = "none";
      document
        .querySelector(".player-" + activePlayer + "-panel")
        .classList.add("winner");
      document
        .querySelector(".player-" + activePlayer + "-panel")
        .classList.remove("active");
      gamePlaying = false;
    } else {
      // Next player
      nextPlayer();
    }
  }
});
function nextPlayer() {
  roundScore = 0;
  activePlayer === 0 ? (activePlayer = 1) : (activePlayer = 0);
  document.getElementById("current-0").textContent = 0;
  document.getElementById("current-1").textContent = 0;
  document.querySelector(".player-0-panel").classList.toggle("active");
  document.querySelector(".player-1-panel").classList.toggle("active");
  document.querySelector(".dice").style.display = "none";
}
// NEW-GAME button
document.querySelector(".btn-new").addEventListener("click", init);
function init() {
  // Reseting score vars
  scores = [0, 0];
  roundScore = 0;
  activePlayer = 0;
  gamePlaying = true;
  document.querySelector(".dice").style.display = "none";
  // Reseting allscores
  document.getElementById("score-0").textContent = "0";
  document.getElementById("score-1").textContent = "0";
  document.getElementById("current-0").textContent = "0";
  document.getElementById("current-1").textContent = "0";
  // Reseting Player Names
  document.getElementById("name-0").textContent = "Player 1";
  document.getElementById("name-1").textContent = "Player 2";
  // Removing classes from panels
  document.querySelector(".player-0-panel").classList.remove("winner");
  document.querySelector(".player-1-panel").classList.remove("winner");
  document.querySelector(".player-0-panel").classList.remove("active");
  document.querySelector(".player-1-panel").classList.remove("active");
  document.querySelector(".player-0-panel").classList.add("active");
}



// let scoreBoard,scores, activePlayer, isPlaying;

// init();

// document.querySelector('.btn-roll').addEventListener('click', function(){
//     if(isPlaying) {
//         let dice = Math.floor(math.random()*6 + 1);

//         if(dice !=1) {
//             scoreBoard += dice;
//             document.getElementById('current-' + activePlayer).innerText = scoreBoard;
//             document.querySelector('.dice').style.display = 'block';
//             document.querySelector('.dice').src = 'dice' + dice + '.png';
//         } else {
//             switchPlayer ();
//             // scoreBoard = 0;
//             // document.getElementById('current-' + activePlayer).innerText = scoreBoard;
//             // activePlayer == 0 ? activePlayer = 1: activePlayer = 0;
//             // document.querySelector('.dice').style.display = 'none';
//             // document.querySelector('.player-0-panel').classList.remove('active');
//             // document.querySelector('.player-1-panel').classList.remove('active');
//             // document.querySelector('.player-'+activePlayer + '-panel').classList.add('active');
//         }
//     }
// })

// document.querySelector('.btn-hold').addEventListener('click', function() {
//         if (isPlaying) {
//         scores[activePlayer] = scoreBoard;
//         document.getElementById('score-' + activePlayer).innerText = scores[activePlayer];

//         if (scores[activePlayer] >= 20) {
//             document.querySelector('.player-' + activePlayer + '-panel').classList.add
//             ('winner');
//             document.getElementById('name' + activePlayer).innerText = 'winner!';
//             isPlaying = false;
//         } else {
//             switchPlayer();
//         }
//     }
// });
// function switchPlayer() {
//     scoreBoard = 0;
//     score = [0,0];
//     activePlayer = 0;
//     isPlaying = true;

//     document.getElementById('name-0').innerText = 'Player 1';
//     document.getElementById('name-1').innerText = 'Player 2';
//     document.getElementById('current-0').innerText = '0';
//     document.getElementById('current-1').innerText = '0';
//     document.getElementById('score-0').innerText = '0';
//     document.getElementById('score-1').innerText = '0';
//     document.querySelector('.dice').style.display = 'none';

//     document.querySelector('player-0-panel').classList.remove('active');
//     document.querySelector('player-0-panel').classList.remove('winner');
//     document.querySelector('player-1-panel').classList.remove('active');
//     document.querySelector('player-1-panel').classList.remove('winner');
//     document.querySelector('player-0-panel').classList.add('active');

// }

