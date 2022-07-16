let randomNumber = 0;
let buttonColors = ["red", "blue", "green", "yellow"];
let randomChosenColor = "";
let gamePattern = [];
let userChosenColour = "";
let userClickedPattern = [];
let isStarted = true;
let index = -1;

//😊1.Generate a new random number between 0 and 3.
//2.Use the randomNumber to select a random color from the buttonColors.
//3.Add the randomChosenColor to the empty array.



$(function() {


    //😊 startGame to start play:
    //1. Edit the title from start to level 1;
    //2.execute the flashAnimate, playSound anmiate, and the animatePressed.
    function startGame() {
        if (isStarted) {
            $("#level-title").html("level 1");
            nextSequence();
        } else {
            let i = 1;
            i++;
            $("#level-title").html(`level ${i}`);
        }
    }

    //😊Get gamePattern function:
    //1.Generate a new random number between 0 and 3.
    //2.Use the randomNumber to select a random color from the buttonColors.
    //3.Add the randomChosenColor to the empty array.
    function nextSequence() {
        randomNumber = Math.floor(Math.random() * 4);
        randomChosenColor = buttonColors[randomNumber];
        gamePattern.push(randomChosenColor);
        playSound(randomChosenColor);
        flashAnimation(randomChosenColor);
    }



    //😊 keyup to start the game:
    $(document).keyup(function(e) {
        // console.log(e.key);

        startGame();
        isStarted = false;

        console.log("自动" + gamePattern);
    })



    //😊Click button function:
    //1.Select the button with the same id as the userChosenColour.
    //2.Push the userChosenColour to the userClickedPattern array.
    //3.execute the flashAnimate, playSound anmiate, and the animatePressed.
    $(".btn").click(function() {
        userChosenColor = (this.id);
        userClickedPattern.push(userChosenColor);
        console.log("点击" + userClickedPattern);
        // flashAnimation(userChosenColor);
        playSound(userChosenColor);
        animatePressed(userChosenColor);


        if (isEqual()) {
            if (gamePattern.length === userClickedPattern.length) {
                //After one second, start the next level. 
                setTimeout(function() {
                    nextSequence();
                }, 1000);
                console.log("自动" + gamePattern);
                userClickedPattern = [];
                index = -1;
            } else {

            }
        } else {
            console.log("wrong");
        }
        //4.Remove all the items in userClickedPattern

    })

    //😊Check the correct answer function:
    function isEqual() {
        index++;
        if (userClickedPattern[index] === gamePattern[index]) {

            return true;
        } else {
            // gameOver();
            return false;
            //从第一关开始！！！！
        }
    }


    //😊FlahAnimation function:
    function flashAnimation(animateFlash) {
        $(`#${animateFlash}`).fadeOut(100).fadeIn(100);
    }


    //😊playSound function:
    function playSound(animateSound) {
        let audio = new Audio(`./sounds/${animateSound}.mp3`);
        audio.play();
    }


    //😊animatePressed (fast grey effect) function:
    function animatePressed(animateClass) {
        $(`#${animateClass}`).addClass("pressed");
        setTimeout(function() {
            $(`#${animateClass}`).removeClass("pressed");
        }, 60);
    }

    //😊Game over function:
    function gameOver() {
        $(document).addClass("game-over");
        setTimeout(function() {
            $(document).removeClass("game-over");
        }, 200)

        $("#level-title").html("Game Over, Press Any Key to Restart");
    }
})