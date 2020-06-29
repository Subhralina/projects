document.getElementById("#button").addEventListener("click", delayDicee);

function delayDicee (){
  document.querySelector("h1").innerHTML = "Dicee Game";
    for (i=1; i<15;i++){
    var time = (i*100);
  setTimeout(playDiceeShow, time);

}
  setTimeout (playDicee, 1600);
}

function playDiceeShow(){
  var randomNumber1 = Math.floor(Math.random() * 6) + 1;
  document.querySelector(".img1").src = "images/dice" + randomNumber1 + ".png";
  var randomNumber2 = Math.floor(Math.random() * 6) + 1;
  document.querySelector(".img2").src = "images/dice" + randomNumber2 + ".png";
}

function playDicee(){
  var randomNumber1 = Math.floor(Math.random() * 6) + 1;
  document.querySelector(".img1").src = "images/dice" + randomNumber1 + ".png";
  var randomNumber2 = Math.floor(Math.random() * 6) + 1;
  document.querySelector(".img2").src = "images/dice" + randomNumber2 + ".png";
  if (randomNumber1 > randomNumber2) {
    document.querySelector("h1").innerHTML = "🚩 Player 1 wins!";
  } else if (randomNumber1 < randomNumber2) {
    document.querySelector("h1").innerHTML = "Player 2 wins! 🚩";
  } else {
    document.querySelector("h1").innerHTML = "Draw!";
  }
  }
