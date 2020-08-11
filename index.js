
var numberofDrums = document.querySelectorAll(".drum").length

//listen for button presses and play sound


for(var i = 0; i < numberofDrums; i++){

    document.querySelectorAll(".drum")[i].addEventListener("click",function() {

        var buttonInnerHTML = this.innerHTML;

        switch (buttonInnerHTML) {
            case "w":
                    var crash = new Audio('sounds/crash.mp3');
                    crash.play();
                break;

            case "a":
                    var tom2 = new Audio('sounds/tom-2.mp3');
                    tom2.play();
                break;

            case "s":
                    var tom3 = new Audio('sounds/tom-3.mp3');
                    tom3.play();
                break;

            case "d":
                    var kick = new Audio('sounds/kick-bass.mp3');
                    kick.play();
                break;

            case "j":
                    var tom4 = new Audio('sounds/tom-4.mp3');
                    tom4.play();
                break;

            case "k":
                    var tom1 = new Audio('sounds/tom-1.mp3');
                    tom1.play();
                break;

            case "l":
                    var snare = new Audio('sounds/snare.mp3');
                    snare.play();
                break;

            default: console.log(buttonInnerHTML);
                break;
        }
        

    });
}

//listen for keyboard press and play sound

document.addEventListener("keydown", function(event){
            
    playSound(event.key);

    buttonAnimation(event.key);
});

function playSound(key){

    switch (key) {
        case "w":
                var crash = new Audio('sounds/crash.mp3');
                crash.play();
            break;

        case "a":
                var tom2 = new Audio('sounds/tom-2.mp3');
                tom2.play();
            break;

        case "s":
                var tom3 = new Audio('sounds/tom-3.mp3');
                tom3.play();
            break;

        case "d":
                var kick = new Audio('sounds/kick-bass.mp3');
                kick.play();
            break;

        case "j":
                var tom4 = new Audio('sounds/tom-4.mp3');
                tom4.play();
            break;

        case "k":
                var tom1 = new Audio('sounds/tom-1.mp3');
                tom1.play();
            break;

        case "l":
                var snare = new Audio('sounds/snare.mp3');
                snare.play();
            break;

        default: console.log(key);
            break;
    }

}


//how to add audio taken from StackOverflow:
// var audio = new Audio('sounds/tom-1.mp3');
//         audio.play();


function buttonAnimation(currentKey) {

   var activeButton = document.querySelector("." + currentKey);

    activeButton.classList.add("pressed"); // add class to an element using JS

    setTimeout(function(){

        activeButton.classList.remove("pressed");
    }, 100);
}