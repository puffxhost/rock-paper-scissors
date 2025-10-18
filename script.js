let setUserScore = 0;
let setComputerScore = 0;

let userScore = document.querySelector("#you-score");
let computerScore = document.querySelector("#com-score");
let mess = document.querySelector(".mess");

userScore.innerHTML = setUserScore;
computerScore.innerHTML = setComputerScore;

let selectButton = null;
let ComButton = null;

// Generate computer value
let comValueGen = () =>  {
    const arr = ["Rock", "Papper", "Sijar"];
    let idx = Math.floor(Math.random() * arr.length);
    return arr[idx];
}

// Handle user click
document.querySelectorAll(".game-button button").forEach(btn => {
  btn.addEventListener("click", () => {
    selectButton = btn.innerText;          // user's choice
    ComButton = comValueGen();             // computer choice

    console.log("User:", selectButton, "Computer:", ComButton);

    // Update score example (simple)
    if (selectButton === ComButton) {
      mess.innerHTML = "Draw";
      console.log("Draw!");
    } else if (
      (selectButton === "Rock" && ComButton === "Sijar") ||
      (selectButton === "Papper" && ComButton === "Rock") ||
      (selectButton === "Sijar" && ComButton === "Papper")
    ) {
      setUserScore++;
      userScore.innerHTML = setUserScore;
      mess.innerHTML = "User wins!";
      console.log("User wins!");
    } else {
      setComputerScore++;
      computerScore.innerHTML = setComputerScore;
      console.log("Computer wins!");
      mess.innerHTML = "Computer wins!";
    }
  });
});
