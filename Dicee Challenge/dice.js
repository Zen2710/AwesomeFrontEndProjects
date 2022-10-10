//Number generation
function randgen1() {
  x = Math.floor(Math.random() * 6 + 1);
}

function randgen2() {
  y = Math.floor(Math.random() * 6 + 1);
}

//Logic
randgen1();
randgen2();

if (x > y) {
  document.querySelector("h1").innerHTML = "Player 1 Wins";
} else if (x == y) {
  document.querySelector("h1").innerHTML = "Tis a Draw, BITCHH!!!";
} else {
  document.querySelector("h1").innerHTML = "Player 2 Wins";
}

//Conditionals

// if (x == 1) {
//   document.getElementById("img1").src = "images/dice1.png";
// } else if (x == 2) {
//   document.getElementById("img1").src = "images/dice2.png";
// } else if (x == 3) {
//   document.getElementById("img1").src = "images/dice3.png";
// } else if (x == 4) {
//   document.getElementById("img1").src = "images/dice4.png";
// } else if (x == 5) {
//   document.getElementById("img1").src = "images/dice5.png";
// } else {
//   document.getElementById("img1").src = "images/dice6.png";
// }

// if (y == 1) {
//   document.getElementById("img2").src = "images/dice1.png";
// } else if (y == 2) {
//   document.getElementById("img2").src = "images/dice2.png";
// } else if (y == 3) {
//   document.getElementById("img2").src = "images/dice3.png";
// } else if (y == 4) {
//   document.getElementById("img2").src = "images/dice4.png";
// } else if (y == 5) {
//   document.getElementById("img2").src = "images/dice5.png";
// } else {
//   document.getElementById("img2").src = "images/dice6.png";
// }

if (x == 1) {
  document.getElementsByClassName("img1")[0].src = "images/dice1.png";
} else if (x == 2) {
  document.getElementsByClassName("img1")[0].src = "images/dice2.png";
} else if (x == 3) {
  document.getElementsByClassName("img1")[0].src = "images/dice3.png";
} else if (x == 4) {
  document.getElementsByClassName("img1")[0].src = "images/dice4.png";
} else if (x == 5) {
  document.getElementsByClassName("img1")[0].src = "images/dice5.png";
} else {
  document.getElementsByClassName("img1")[0].src = "images/dice6.png";
}

if (y == 1) {
  document.getElementsByClassName("img2")[0].src = "images/dice1.png";
} else if (y == 2) {
  document.getElementsByClassName("img2")[0].src = "images/dice2.png";
} else if (y == 3) {
  document.getElementsByClassName("img2")[0].src = "images/dice3.png";
} else if (y == 4) {
  document.getElementsByClassName("img2")[0].src = "images/dice4.png";
} else if (y == 5) {
  document.getElementsByClassName("img2")[0].src = "images/dice5.png";
} else {
  document.getElementsByClassName("img2")[0].src = "images/dice6.png";
}
