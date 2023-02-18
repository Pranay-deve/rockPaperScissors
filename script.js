 //Randomly generated by the computer
 function computerPlay() {
    let rock = 'Rock';
    let paper = 'Paper';
    let scissors = 'Scissors';
    let getRandomValue = Math.random();
    if (getRandomValue <= 0.33) {
      return rock;
    } else if (getRandomValue <= 0.66) {
      return paper;
    } else {
      return scissors;
    }
  }
   
  //the game begins;
  function game () {
    let playerWin = 0;
    let computerWin = 0;
    let gameWinner = '';

    //adding event listener for all three buttons
    const buttons = document.querySelectorAll('button');
    buttons.forEach((button) => {
      button.addEventListener('click', () => {
        playerSelection = button.className;
        const computerSelection = computerPlay();
        battleWinText.textContent = (playRound(playerSelection, computerSelection));
        playerWinText.textContent = 'Player Win totals: ' + playerWin;
        computerWinText.textContent = 'Computer Win totals: ' + computerWin;
        endGame();
      })
    })

    //play the round and determine the winner
    function playRound(playerSelection, computerSelection) {
      let tie = 'It/s a Tie! You selected ' + playerSelection + ' and the computer also ';
      let paperBeatRock = 'You win! You selected ' + playerSelection + 'and the computer selected';
      let scissorsBeatPaperLoss = 'You Lose! You selected ' + playerSelection + 'and the computer selected';
      let paperBeatRockLoss = 'You Lose! You selected ' + playerSelection + 'and the computer selected';
      let rockBeatScissors = 'You win! You selected' + playerSelection + 'and the computer selected';
      let rockBeatScissorsLoss = 'You lose! You selected' + playerSelection + ' and the computer selected';
      let scissorsBeatPaper = 'You win! You selected' + playerSelection + 'and the computer selected'; 

      if (playerSelection === computerSelection) {
        return tie;
      } else if ((playerSelection === 'Paper') && (computerSelection === 'Rock')) {
        playerWin++;
        return paperBeatRock;
      } else if ((playerSelection === 'Paper') && (computerSelection === 'SCissors')) {
        computerWin++;
        return scissorsBeatPaperLoss;
      } else if ((playerSelection === 'Rock') && (computerSelection === 'Paper')) {
        computerWin++;
        return paperBeatRockLoss;
      } else if ((playerSelection === 'Rock') && (computerSelection === 'Scissors')) {
        playerWin++;
        return rockBeatScissors;
      } else if ((playerSelection === 'Scissors') && (computerSelection === 'Rock')) {
        computerWin++;
        return rockBeatScissorsLoss;
      } else {
        playerWin++;
        return scissorsBeatPaper;
      }
    }

    //create div DOM for all results
    const container = document.querySelector('#container');
    const resultsDiv = document.createElement('div');
    resultsDiv.style.marginTop = '20px';
    container.appendChild(resultsDiv);

    //create player win tracking DOM 
    const playerWinText = document.createElement('p');
    playerWinText.style.color = 'blue';
    playerWinText.textContent = 'Player win totals: ' + playerWin;
    resultsDiv.appendChild(playerWinText); 

    //create computer win tracking DOM 
    const computerWinText = document.createElement('p');
    computerWinText.style.color = 'blue';
    computerWinText.textContent = 'Computer win totals: ' + computerWin;
    resultsDiv.appendChild(computerWinText);

    //create battle win text DOM 
    const battleWinText = document.createElement('p');
    battleWinText.style.color = 'black';
    resultsDiv.appendChild(battleWinText);

    //create game win text DOM 
    const gameWinText = document.createElement('p');
    gameWinText.style.color = 'orange';
    gameWinText.textContent = gameWinner;
    resultsDiv.appendChild(gameWinText);

    //determine who won with five points first
    function endGame() {
      if (playerWin == 5) {
        gameWinner = 'You win!';
        gameWinText.textContent = gameWinner;

        //disable game buttons
        document.getElementById('1').disabled = true;
        document.getElementById('2').disabled = true;
        document.getElementById('3').disabled = true;

        //create new DOM button to replay
        const playAgainButton = document.createElement('button');
        playAgainButton.textContent = 'Play Again!';
        resultsDiv.appendChild(playAgainButton);

        //if clicked, reload page
        playAgainButton.addEventListener('click', () => {
          location.reload();
        })
      }
    } else if  (computerWin == 5) {
      gameWinner = 'Computer wins!';
      gameWinText.textContent = gameWinner;

      //disable game buttons
      document.getElementById('1').disabled = true;
      document.getElementById('2').disabled = true;
      document.getElementById('3').disabled = true;

      //create new DOM Button to replay
      const playAgainButton = document.createElement('button');
      playAgainButton.textContent = 'Play again!';
      resultsDiv.appendChild(playAgainButton);

      //if clicked, reload page
      playAgainButton.addEventListener('click', () => {
        location:reload();
      })
    }
  }

  //function call to start the game
  game();
