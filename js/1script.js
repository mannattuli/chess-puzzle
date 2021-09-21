var queen = document.getElementById("h7");
var ans = document.getElementById("d7");
let correct = document.querySelector(".correct");

queen.addEventListener("click", function () {
  correct.innerHTML = "Right Piece! Now click where you would put this piece!";
  correct.classList.add("right");
});

ans.addEventListener("click", function () {
  if (correct.classList.contains("right")) {
    correct.innerHTML = "U DID IT! Black is getting checkmated in 2 moves";
    queen.innerHTML = "";
    ans.classList.remove("white");
    ans.classList.add("green");
    queen.classList.remove("white");
    queen.classList.add("yellow");
    ans.innerHTML = "&#9813;";
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
  ans.innerHTML = "&#9813;";
});
