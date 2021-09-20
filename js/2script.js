var knight = document.getElementById("knight");
var ans = document.getElementById("answer");
let correct = document.querySelector(".correct");
var king = document.getElementById("king");
var check = document.getElementById("check");
var takes = document.getElementById("takes");

knight.addEventListener("click", function () {
  correct.innerHTML = "Right Piece! Now click where you would put this piece!";
  correct.classList.add("right");
});

ans.addEventListener("click", function () {
  if (correct.classList.contains("right")) {
    correct.innerHTML = "Nice! What do you think is the next best move?";
    knight.innerHTML = "";
    ans.classList.remove("white");
    ans.classList.add("green");
    knight.classList.remove("white");
    knight.classList.add("yellow");
    ans.innerHTML = "&#9816;";
    king.innerHTML = "";
    check.innerHTML = "&#9818;";
  } else {
    correct.innerHTML = "Click the piece first !!!";
  }
});

ans.addEventListener("click", function () {
  if (knight.classList.contains("yellow")) {
    takes.classList.add("pl");
  }
});

takes.addEventListener("click", function () {
  if (takes.classList.contains("pl")) {
    takes.innerHTML = "&#9816;";
    ans.innerHTML = "";
    knight.classList.remove("yellow");
    knight.classList.add("black");
    ans.classList.remove("green");
    ans.classList.add("yellow");
    takes.classList.add("green");
    correct.innerHTML = "YOU WIN!!!";
  }
});
