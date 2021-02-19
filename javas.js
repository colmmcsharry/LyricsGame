var chosenword = "helloo"
// we first set this to a random word, just as a placeholder, then in our function on line 9/10,
// when we press enter, chosenword becomes whatever the value of the form was. Also, if the chosenword is in the array
// of correct words, then the bulb comes on and a nice audio plays, if not, bulb off and other audio.

function change(){
    document.getElementById("intro").style.display = "none";
    document.getElementById("invis").style.display = "block"
}

var hiddenwords = ["me", "wondering", "everything", "hear", "dreaming", "fell", "younger", "young", "forgotten", "difference", "and", "thousand", "everything"
,"outside", "you", "anymore","typical", "happened", "secret" , "running",
/*song 2 */ 
"nervous", "God", "god", "while", "away", "remember", "jeans", "free", "demons", "heart", "heard", "soul", "die", "soul", "cry", "I", "i", "wake", "take", "funeral", "catch", "start", "help"
, "alone", "mind", "worry", "know", "disguise", "hiding", "met", "dated", "back"]
console.log(hiddenwords)

function search(ele) {
    if(event.key === 'Enter') {
        chosenword = ele.value
        if (hiddenwords.includes(chosenword)){
            document.getElementById("myImage").src = 'bulbon.gif'
            var audio = new Audio('bell.mp3');
        audio.play();
          
        } else {
            var audio2 = new Audio('glass.wav');
            audio2.play();
        }     
    }
}

function myFunction(){
    document.getElementById("myImage").src = 'bulboff.gif' 
}




