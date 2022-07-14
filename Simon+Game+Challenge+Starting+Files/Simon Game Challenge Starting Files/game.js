let randomNumber = 0;
let buttonColors = ["red", "blue", "green", "yellow"];
let gamePattern;
let randomChosenColor = "";
let userClickedPattern;
let level;
let i;
let isStarted = false;







$(function() {
    // 😊Generate random function:
    function getRandom() {
        randomNumber = Math.floor(Math.random() * 4);
        randomChosenColor = buttonColors[randomNumber];
        return randomChosenColor;
    }


    // 😊Generate sound function:
    function soundPlay(r) {
        let audio = new Audio(`./sounds/${r}.mp3`);
        audio.play();
    }


    // 😊Generate flash function:
    function flash(f) {
        $(`#${f}`).fadeOut(100).fadeIn(100).addClass("pressed");
        setTimeout(function() {
            $(`#${f}`).removeClass("pressed");
        }, 100);
    }


    // 😊Execute nextSequence function:
    function nextSequence() {
        let random = getRandom();
        gamePattern.push(random);
        console.log("gamePattern:" + gamePattern);

        soundPlay(random);
        flash(random);
    }

    function startGame() {
        isStarted = true;
        i = -1;
        level = 1;
        gamePattern = [];
        userClickedPattern = [];
        nextSequence();

    }

    // 😊Press keybord execute nextSequence function:
    $(document).keyup(function(e) {

        if (isStarted === false) {

            startGame();

        }

    })


    // 😊Users click:
    $(".btn").click(function() {
        if (isStarted) {
            let userChosenColour = (this.id);
            userClickedPattern.push(userChosenColour);
            soundPlay(userChosenColour);
            flash(userChosenColour);
            console.log("click:" + userClickedPattern);
            //   i = -1; 不在这里写i 在底下写！！！！

            if (isEqual()) {
                if (userClickedPattern.length == gamePattern.length) {
                    setTimeout(function() {
                        nextSequence();
                    }, 800)

                    userClickedPattern = [];
                    i = -1;
                }

            } else {

                alert("Game over");
                isStarted = false;
            }
        } else {
            alert("Game has not started!");
        }



        //  console.log(userClickedPattern);
    })

    //😊Check Answers:
    function isEqual() {
        i++;
        if (userClickedPattern[i] == gamePattern[i]) {
            return true;

        } else {
            return false;
        }
    }

    // // 😊Add sound and background flash effects
    // function playSound(s) {
    //     let audio = new Audio(`./sounds/${s}.mp3`);
    //     $(`#${s}`).fadeOut(100).fadeIn(100).addClass("pressed");
    //     setTimeout(function() {
    //         $(`#${s}`).removeClass("pressed");
    //     }, 100);
    //     audio.play();
    // }

    // // 😊 h1 change to level  1, but only execute once:
    // let func = function key() {
    //     $("h1").htkml("level " + level + "")
    //     nextSequence();
    //     console.log(gamePattern);
    //     playSound(`${randomChosenColor}`);
    //     func = function() {};
    // }
    // $(document).keydown(function(e) {
    //     func();
    // })


    // // 😊Users click
    // $(".btn").click(function() {
    //     // console.log(this.id);
    //     let userChosenColour = (this.id);

    //     level++;
    //     $("h1").html("level " + level + "");
    //     userClickedPattern.push(`${userChosenColour}`);
    //     checkAnswer();
    //     // playSound(`${userChosenColour}`);
    //     console.log(userClickedPattern);
    //     console.log(gamePattern);


    // })


    // function checkAnswer() {
    //     for (let i = 0; i < userClickedPattern.length; i++) {
    //         if (userClickedPattern[i] == gamePattern[i]) {
    //             nextSequence();
    //             playSound(`${randomChosenColor}`);
    //             console.log(gamePattern);
    //         } else {
    //             alert("wrong");
    //         }



    //         //     } else {
    //         //        
    //         //     }
    //     }
    //     // nextSequence();
    //     // console.log(gamePattern);
    // }

})