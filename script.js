let riddles = [];

fetch("riddles.json")
  .then((response) => response.json())
  .then((data) => {
    riddles = data;
  });

function showRiddle() {
  if (riddles.length === 0) return;
  const randomIndex = Math.floor(Math.random() * riddles.length);
  const riddle = riddles[randomIndex];
  document.getElementById("riddleBox").innerHTML = riddle;
}
