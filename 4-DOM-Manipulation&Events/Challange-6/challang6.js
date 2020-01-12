var scores, roundScores, activePlayer, gamePlaying;
var lastdice;
init();

document.querySelector(".btn-roll").addEventListener("click", function() {
  if (gamePlaying) {
    var dice1 = Math.floor(Math.random() * 6) + 1;
    var dice2 = Math.floor(Math.random() * 6) + 1;
    
    //var dice = 6;

    //console.log(dice + "," + activePlayer);

    document.getElementById('dice-1').style.display = 'block';
    document.getElementById('dice-2').style.display = 'block';
    document.getElementById('dice-1').src = 'dice-'+dice1+'.png';
    document.getElementById('dice-2'  ).src = 'dice-'+dice2+'.png';

     if (dice1 !== 1 && dice2 !== 1) {
      roundScores += dice1 +dice2;
      document.querySelector(
        "#current-" + activePlayer
      ).textContent = roundScores;
    } else {
      nextPlayer();
    }
    //lastdice = dice;


    // if (dice === 6 && lastdice === 6 ) {
    //     console.log('lost');
    //     scores[activePlayer] = 0;
    //     document.querySelector("#score-" + activePlayer).textContent = "lost all";
    //     lastdice = undefined;
    //     nextPlayer();
    // } else if (dice !== 1) {
    //   roundScores += dice;
    //   document.querySelector(
    //     "#current-" + activePlayer
    //   ).textContent = roundScores;
    // } else {
    //   nextPlayer();
    // }
    // lastdice = dice;
  }
});

document.querySelector(".btn-hold").addEventListener("click", function() {
  

  if (gamePlaying) {
    scores[activePlayer] += roundScores;
    document.querySelector("#score-" + activePlayer).textContent =
      scores[activePlayer];

      var input = document.querySelector('.final-score').value;
      var winningScore;

      if(input){
          winningScore = input ;
      }else{
          winningScore = 100;
      }
      
      console.log(input);  
    if (scores[activePlayer] >= winningScore) {
      document.querySelector("#name-" + activePlayer).textContent = "Winner!!";
      document.getElementById('dice-1').style.display = 'none';
      document.getElementById('dice-2').style.display = 'none';
      document
        .querySelector(".player-" + activePlayer + "-panel")
        .classList.add("winner");
      document
        .querySelector(".player-" + activePlayer + "-panel")
        .classList.remove("active");
      gamePlaying = false;
    } else {
      nextPlayer();
    }
  }
  // nextPlayer();
});

function nextPlayer() {
  activePlayer === 0 ? (activePlayer = 1) : (activePlayer = 0);
  roundScores = 0;

  document.getElementById("current-0").textContent = "0";
  document.getElementById("current-1").textContent = "0";

  document.querySelector(".player-0-panel").classList.toggle("active");
  document.querySelector(".player-1-panel").classList.toggle("active");

  document.getElementById('dice-1').style.display = 'none';
    document.getElementById('dice-2').style.display = 'none';
}

document.querySelector(".btn-new").addEventListener("click", init);

function init() {

  console.log("initilized");
  scores = [0, 0];
  roundScores = 0;
  activePlayer = 0;

  gamePlaying = true;

  document.getElementById('dice-1').style.display = 'none';
  document.getElementById('dice-2').style.display = 'none';

  document.getElementById("score-0").textContent = "0";
  document.getElementById("score-1").textContent = "0";
  document.getElementById("current-0").textContent = "0";
  document.getElementById("current-0").textContent = "0";

  document.getElementById("name-0").textContent = "Player 1";
  document.getElementById("name-1").textContent = "Player 2";

  document.querySelector(".player-0-panel").classList.remove("winner");
  document.querySelector(".player-1-panel").classList.remove("winner");
  document.querySelector(".player-0-panel").classList.remove("active");
  document.querySelector(".player-1-panel").classList.remove("active");
  document.querySelector(".player-0-panel").classList.add("active");
}
