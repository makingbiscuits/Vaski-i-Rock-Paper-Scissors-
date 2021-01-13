function computerPlay(){
    return items[Math.floor(Math.random()*items.length)];
    }
    
    let items = ["šulinys", "popierius", "žirklės"];
    
    // let playerSelection = e.target.id.toUpperCase();
    let computerSelection = computerPlay();
    let player = document.querySelectorAll(".photo-player");
    let playerSelection;
    let round;
    let equalSign = document.querySelector('#equalSign');
    let playerSign = document.querySelector('#playerSign');
    let computerSign = document.querySelector('#computerSign');
    let playerScore = document.querySelector('#playerScore');
    let computerScore = document.querySelector('#computerScore');
    let winRound = document.querySelector("#middle");
    
    let roundCount = 0;
    let playerCount = 0;
    let computerCount = 0;
    
    let resetButton = document.querySelector("#resetButton");
    
    
    let myPix = new Array("photos/rock.png","photos/paper.png","photos/scissors.png");
    
    function choosePic() {
         let randomNum = Math.floor(Math.random() * myPix.length);
         document.querySelector("#bandymas").src = myPix[randomNum];
             }
    function choosePicPC() {
         let randomNum = Math.floor(Math.random() * myPix.length);
         document.querySelector("#bandymasPC").src = myPix[randomNum];
             }         
    
    
    function singleRound(){  
    if (playerSelection == computerSelection){
    round = ++roundCount;
    playerScore.textContent = ++playerCount;
    computerScore.textContent = ++computerCount;
    winRound.textContent = "Lygiosios";
    equalSign.textContent = "=";
    computerSign.textContent = computerSelection;
    }
    else if (playerSelection == "šulinys" && computerSelection == "žirklės" || playerSelection == "popierius" && computerSelection == "šulinys" || playerSelection == "žirklės" && computerSelection == "popierius"){
    round = ++roundCount;
    playerScore.textContent = ++playerCount;
    winRound.textContent = "Valio!";
    equalSign.textContent = ">";
    computerSign.textContent = computerSelection;
    }
    else if (playerSelection == "šulinys" && computerSelection == "popierius" || playerSelection == "popierius" && computerSelection == "žirklės" || playerSelection == "žirklės" && computerSelection == "šulinys"){
    round = ++roundCount;
    computerScore.textContent = ++computerCount;
    winRound.textContent = "Et...";
    equalSign.textContent = "<";
    computerSign.textContent = computerSelection;
    }
    endGame();
    }
    
    player.forEach((player) => {
    player.addEventListener('click', () => {
      playerSelection = player.id;
      playerSign.textContent = player.id;
      computerSign.textContent = computerSelection;
      computerSelection = computerPlay();
      console.log(playerSelection, computerSelection);
    //   document.querySelector("#pavyzdys").src = "photos/" + player.id + ".png";
    });
    });
    
    let slotM = 0;
    
    
    $(".photo-player").on("click", function(){
        resetGame();
        roundGame();
        endGame();
        singleRound();
        $(".photo-player, .photo-pc").hide();
        $(".header").fadeIn();
        $(function nudavai() {
      let stop = setInterval(function(){
          ++slotM;
          if(slotM > 150){
            clearInterval(stop);
            slotM = 0;
            $("#roundButton").show();
            $("#middle").show();
            roundButton.textContent = "Dar?";
        };
        $('#bandymas').fadeOut(100, function(){
          $(this).html(choosePic()).fadeIn(100);
        });
        $('#bandymasPC').fadeOut(100, function(){
          $(this).html(choosePicPC()).fadeIn(100);
        });
      }, 1);
    });
    });
    
    
    function resetGame() {
      resetButton.addEventListener('click',() => 
        location.reload());
    }
    
    
    function roundGame(){
        $("#roundButton").on("click", function(){
        $(".photo-player, .photo-pc").show();
        $("#bandymas, #bandymasPC").hide();
        $("#roundButton").hide();
        $("#middle").hide();
    })};
    
    
    
    function endGame(){
        if (playerCount > 4){
            $("#roundButton").hide();
            winRound.textContent = "Laimėjote!";
            resetButton.textContent = "Iš naujo?";
        }
    else if (computerCount > 4){
            winRound.textContent = "Pralaimėjote!";
            resetButton.textContent = "Iš naujo?";
        }  
    }
    