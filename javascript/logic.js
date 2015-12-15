$(document).ready(function() {
  $("#bulbasaur").hide();
  $("#charmander").hide();
  $("#squirtle").hide();
  $("#bulbasaur-second").hide();
  $("#charmander-second").hide();
  $("#squirtle-second").hide();
  $("img.main-block").addClass("img-responsive").css("width", "150").css("height","150");
  $("button.pokemon").css("width", "100").css("height", "100").addClass("img-responsive hvr-pulse-grow");
  

  var buttonChoices = ["grass", "fire", "water"];
  var grassChoice = buttonChoices[0];
  var fireChoice = buttonChoices[1];
  var waterChoice = buttonChoices[2];


  

  $("button.pokemon").on("click", function() {
    var computerChoice = buttonChoices[Math.floor(Math.random() * buttonChoices.length)];
    var userChoice = ($(this).attr("data-tag"));
    $("#userScore").fadeIn(4000);
    $("#computerScore").fadeIn(4000);
    
    //rock outcome
      if (userChoice === grassChoice ) {
        usershowBulbasaur();
        helloGoodbye.gameState.roundCount++;
        if (computerChoice === grassChoice) {
          computershowBulbasaur();         
        }
        else if (computerChoice === fireChoice) {
          computershowCharmander();
          helloGoodbye.gameState.computerScore++;
        }
        else if (computerChoice === waterChoice) {
          computershowSquirtle();
          helloGoodbye.gameState.userScore++;
        }
      }   
    //paper outcome
      if (userChoice === fireChoice ) {
        usershowCharmander();
        helloGoodbye.gameState.roundCount++;
        if (computerChoice === grassChoice) {
          computershowBulbasaur();
          helloGoodbye.gameState.userScore++;
        }
        else if (computerChoice === fireChoice) {
          computershowCharmander();
          
        }
        else if (computerChoice === waterChoice) {
          computershowSquirtle();
          helloGoodbye.gameState.computerScore++;
        }
      }

    // scissor outcome
      if (userChoice === waterChoice ) {
        usershowSquirtle();
        helloGoodbye.gameState.roundCount++;
        if (computerChoice === grassChoice) {
          computershowBulbasaur();
          helloGoodbye.gameState.computerScore++;
        }
        else if (computerChoice === fireChoice) {
          computershowCharmander();
          helloGoodbye.gameState.userScore++;

        }
        else if (computerChoice === waterChoice) {
          computershowSquirtle();
          
        }
      }
    
    $("span").each(function() {
      $(this).html(helloGoodbye.gameState[$(this).attr("id")]);
    });


      
    function usershowBulbasaur () {
      $("#bulbasaur").fadeIn(700)
      $("#charmander").hide();
      $("#squirtle").hide();
    }
    function usershowCharmander () {
      $("#bulbasaur").hide();
      $("#charmander").fadeIn(700);
      $("#squirtle").hide();
    }
    function usershowSquirtle () {
      $("#bulbasaur").hide();
      $("#charmander").hide();
      $("#squirtle").fadeIn(700);
    }
    function computershowBulbasaur () {
      $("#bulbasaur-second").fadeIn(700);
      $("#charmander-second").hide();
      $("#squirtle-second").hide();
    }
    function computershowCharmander () {
      $("#bulbasaur-second").hide();
      $("#charmander-second").fadeIn(700);
      $("#squirtle-second").hide();
    }
    function computershowSquirtle () {
      $("#bulbasaur-second").hide();
      $("#charmander-second").hide();
      $("#squirtle-second").fadeIn(700);
    }
    });

});


