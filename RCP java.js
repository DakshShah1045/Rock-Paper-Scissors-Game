let score = JSON.parse(localStorage.getItem('score')) || {
        wins: 0,
        losses: 0,
        ties: 0
      };

      updateScore();


     


      /*
      if (!score) {
        score = {
          wins: 0,
          losses: 0,
          ties: 0
        };
      }
      */

   let isAutoPlaying = false
   let IntervalID = ''

   function autoPlay(){
    if(!isAutoPlaying){
      IntervalID = setInterval(()=>{

        let playerMove = pickComputerMove()
        playGame(playerMove)

      },1000)
      isAutoPlaying = true
      document.querySelector('.autoplay').innerHTML = 'Stop Play'
    }
    else{
      clearInterval(IntervalID)
      isAutoPlaying = false
      document.querySelector('.autoplay').innerHTML = 'Auto Play'
    }
   }

     



      
  



 
       



      function playGame(playerMove) {
        const computerMove = pickComputerMove();

        let result = '';

        if (playerMove === 'scissors') {
          if (computerMove === 'rock') {
            result = 'You lose.';
          } else if (computerMove === 'paper') {
            result = 'You win.';
          } else if (computerMove === 'scissors') {
            result = 'Tie.';
          }

        } else if (playerMove === 'paper') {
          if (computerMove === 'rock') {
            result = 'You win.';
          } else if (computerMove === 'paper') {
            result = 'Tie.';
          } else if (computerMove === 'scissors') {
            result = 'You lose.';
          }
          
        } else if (playerMove === 'rock') {
          if (computerMove === 'rock') {
            result = 'Tie.';
          } else if (computerMove === 'paper') {
            result = 'You lose.';
          } else if (computerMove === 'scissors') {
            result = 'You win.';
          }
        }

        if (result === 'You win.') {
          score.wins += 1;
        } else if (result === 'You lose.') {
          score.losses += 1;
        } else if (result === 'Tie.') {
          score.ties += 1;
        }

        localStorage.setItem('score', JSON.stringify(score));
        updateScore();

        document.querySelector('.js-result').innerHTML=`${result}`

        document.querySelector('.js-move').innerHTML=`You 
        <img src="C:/Users/VAISHALI/Desktop/HTML/youtube/youtube.video/javascript/${playerMove}-emoji.png" class="rock">
        <img src="C:/Users/VAISHALI/Desktop/HTML/youtube/youtube.video/javascript/${computerMove}-emoji.png" class="rock">
        Computer`

        
      }


      function updateScore() {
       document.querySelector('.js-score').innerHTML = 
       `Wins: ${score.wins}, Losses: ${score.losses}, Ties: ${score.ties}`
      }


      function pickComputerMove() {
        const randomNumber = Math.random();

        let computerMove = '';

        if (randomNumber >= 0 && randomNumber < 1 / 3) {
          computerMove = 'rock';
        } else if (randomNumber >= 1 / 3 && randomNumber < 2 / 3) {
          computerMove = 'paper';
        } else if (randomNumber >= 2 / 3 && randomNumber < 1) {
          computerMove = 'scissors';
        }

        return computerMove;
      }

      let reset = document.querySelector('.js-reset')
      reset.addEventListener('click' , () => {
        document.querySelector('.alert').innerHTML = `
        Do You Want To Reset The Score 
        <button class="js-yes"
        onclick="
        score.wins = 0;
      score.losses = 0;
      score.ties = 0;
      localStorage.removeItem('score');
      updateScore();
      document.querySelector('.alert').innerHTML = '';

        "> Yes
        </button> 
        <button class="js-no"
        onclick="
        document.querySelector('.alert').innerHTML = '';

        ">
        No
        </button>
        `

      })

     
      


     

      /*
      onclick="

      score.wins = 0;
      score.losses = 0;
      score.ties = 0;
      localStorage.removeItem('score');
      updateScore();

    " 

    */

