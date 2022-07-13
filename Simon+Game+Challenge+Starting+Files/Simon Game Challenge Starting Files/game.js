let randomNumber = 0;
let buttonColors = ["red", "blue", "green", "yellow"];
let gamePattern = [];
let randomChosenColor = 0;
let userClickedPattern = [];
let level = 1;



function nextSequence() {
    randomNumber = Math.floor(Math.random() * 4);
    randomChosenColor = buttonColors[randomNumber];
    gamePattern.push(buttonColors[randomNumber]);
}



// console.log(randomNumber);

// console.log(randomChosenColor);

// console.log(gamePattern);



$(function() {

    // function playSound(randomChosenColor) {
    //     let audio = new Audio(`./sounds/${randomChosenColor}.mp3`);
    //     $(`#${randomChosenColor}`).click(function() {
    //         $(this).fadeOut(100).fadeIn(100);
    //         audio.play();
    //     })
    // }
    // playSound(`${randomChosenColor}`);
    // $(`#${randomChosenColor}`).click(function() {
    //     let audio = new Audio(`./sounds/${randomChosenColor}.mp3`);
    //     $(this).fadeOut(100).fadeIn(100);
    //     audio.play();
    // });
    function playSound(userChosenColour) {
        let audio = new Audio(`./sounds/${userChosenColour}.mp3`);
        $(`#${userChosenColour}`).fadeOut(100).fadeIn(100).addClass("pressed");
        setTimeout(function() {
            $(`#${userChosenColour}`).removeClass("pressed");
        }, 100);
        audio.play();
    }

    $(".btn").click(function() {
        // console.log(this.id);
        let userChosenColour = (this.id);
        // console.log(userChosenColour);
        level++;
        $("h1").html("level " + level + "")
        userClickedPattern.push(`${userChosenColour}`);
        console.log(userClickedPattern);
        playSound(`${userChosenColour}`);

        // let audio = new Audio(`./sounds/${userChosenColour}.mp3`);
        // $(this).fadeOut(100).fadeIn(100);
        // audio.play(); 
    })

    $(document).keydown(function(e) {
        // console.log(e.key);
        $("h1").html("level " + level + "")
        nextSequence();
        console.log(gamePattern);
        playSound(`${randomChosenColor}`);
    })

    function checkAnswer() {
        if (userClickedPattern[0] === gamePattern[0]) {
            console.log(userClickedPattern);
            console.log(gamePattern);
        }
        // nextSequence();


    }
    checkAnswer();


})