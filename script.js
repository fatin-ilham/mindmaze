let riddles = [];
let currentRiddle = null;

fetch("riddles.json")
  .then((response) => response.json())
  .then((data) => {
    riddles = data;
  });

function showRiddle() {
  if (riddles.length === 0) return;
  const randomIndex = Math.floor(Math.random() * riddles.length);
  currentRiddle = riddles[randomIndex]; // Save the selected riddle
  document.getElementById("riddleBox").innerText = currentRiddle.question;
  
  // Optional UI updates if you need them here:
  document.getElementById("userAnswer").style.display = "block";
  document.getElementById("submitBtn").style.display = "inline-block";
  document.getElementById("hintBtn").style.display = "inline-block";
  document.getElementById("showAnswerBtn").style.display = "inline-block";
  document.getElementById("hintText").innerText = "";
  document.getElementById("feedback").innerText = "";
  document.getElementById("answerReveal").innerText = "";
  document.getElementById("answerReveal").style.display = "none";
  document.getElementById("resetBtn").style.display = "none";
}

