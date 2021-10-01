var queen = document.getElementById("queen");
var ans = document.getElementById("ans");
var correct = document.querySelector(".correct");

queen.addEventListener("click", function () {
  correct.innerHTML = "Right Piece! Now click where you would put this piece!";
  correct.classList.add("right");
});

ans.addEventListener("click", function () {
  if (correct.classList.contains("right")) {
    correct.innerHTML = "Checkmate!";
    queen.innerHTML = "";
    ans.classList.remove("white");
    ans.classList.add("green");
    queen.classList.remove("white");
    queen.classList.add("yellow");
    ans.innerHTML = "&#9819;";
  } else {
    correct.innerHTML = "Click the piece first !!!";
  }
});

/*Solution Button*/
var button = document.getElementById("solution");

button.addEventListener("click", function () {
  correct.innerHTML = "Solution:";
  queen.innerHTML = "";
  ans.classList.remove("white");
  ans.classList.add("green");
  queen.classList.remove("white");
  queen.classList.add("yellow");
  ans.innerHTML = "&#9819;";
});
