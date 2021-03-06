let gamePattern
let userClickedPattern;
let userChosenColor;
let isStarted = false;
let index = -1;
let level = 1; //h1 level

//๐1.Generate a new random number between 0 and 3.
//2.Use the randomNumber to select a random color from the buttonColors.
//3.Add the randomChosenColor to the empty array.



$(function() {


    //๐ startGame to start play:
    //1. Edit the title from start to level 1;
    //2.execute the flashAnimate, playSound anmiate, and the animatePressed.
    function startGame() {
        // isStarted = true;
        if (isStarted) {
            // gamePattern = [];
            // userClickedPattern = [];
            // level = 1;
            // $("#level-title").html(`level ${level}`);
            // nextSequence();
        } else {
            isStarted = true;
            gamePattern = [];
            userClickedPattern = [];
            level = 1;
            $("#level-title").html(`level ${level}`);
            nextSequence();
        }
    }
    //startGame();
    //๐Get gamePattern function:
    //1.Generate a new random number between 0 and 3.
    //2.Use the randomNumber to select a random color from the buttonColors.
    //3.Add the randomChosenColor to the empty array.
    //4.Call the sound and flash function.
    function nextSequence() {
        let randomNumber = 0;
        let buttonColors = ["red", "blue", "green", "yellow"];
        let randomChosenColor = "";
        userChosenColor = "";
        randomNumber = Math.floor(Math.random() * 4);
        randomChosenColor = buttonColors[randomNumber];
        gamePattern.push(randomChosenColor);
        playSound(randomChosenColor);
        flashAnimation(randomChosenColor);
    }



    //๐Press any key to start the game:

    $("body").keyup(function(e) {
        // consojle.log(e.key);
        // isStarted = true;
        if (isStarted) {

        } else {
            startGame();

        }

        // console.log("่ชๅจ" + gamePattern);

    })



    //๐Click button function:
    //1.Select the button with the same id as the userChosenColour.
    //2.Push the userChosenColour to the userClickedPattern array.
    //3.execute the flashAnimate, playSound anmiate, and the animatePressed. 
    //4.Execute the isEqual function, to judgee the condition. 
    //4.Remove all the items in userClickedPattern
    $(".btn").click(function() {
        userChosenColor = (this.id);

        if (isStarted) {
            userClickedPattern.push(userChosenColor);
            console.log("็นๅป" + userClickedPattern);
            // flashAnimation(userChosenColor);
            playSound(userChosenColor);
            animatePressed(userChosenColor);


            if (isEqual()) {
                if (gamePattern.length === userClickedPattern.length) {
                    //After one second, start the next level. 
                    setTimeout(function() {
                        level++;
                        $("#level-title").html(`level ${level}`);
                        nextSequence();
                    }, 1000);
                    console.log("่ชๅจ" + gamePattern);
                    userClickedPattern = [];
                    index = -1;
                } else {

                }
            } else {
                gameOver();
                playSound(userChosenColor);
                animatePressed(userChosenColor);
                isStarted = false;
            }
        } else {
            gameOver();
            playSound(userChosenColor);
            animatePressed(userChosenColor);
        }
    })

    //๐Check the correct answer function:
    function isEqual() {
        index++;
        if (userClickedPattern[index] === gamePattern[index]) {
            return true;
        } else {
            return false;
        }
    }


    //๐FlahAnimation function:
    function flashAnimation(animateFlash) {
        $(`#${animateFlash}`).fadeOut(100).fadeIn(100);
    }


    //๐playSound function:
    function playSound(animateSound) {
        let audio = new Audio(`./sounds/${animateSound}.mp3`);
        audio.play();
    }


    //๐animatePressed (fast grey effect) function:
    function animatePressed(animateClass) {
        $(`#${animateClass}`).addClass("pressed");
        setTimeout(function() {
            $(`#${animateClass}`).removeClass("pressed");
        }, 60);
    }

    //๐Game over function:
    //1.Add the game-over CSS class, after 200s remove this class.
    //2.Change h1 title.
    //3.Add the gameOverSound.
    //Clear the userClickedPattern and gamePattern.
    function gameOver() {
        $("body").addClass("game-over");
        setTimeout(function() {
            $("body").removeClass("game-over");
        }, 200)

        $("#level-title").html("Game Over, Press Any Key to Restart");
        let gameOverSound = new Audio("./sounds/wrong.mp3");
        gameOverSound.play();


    }


})