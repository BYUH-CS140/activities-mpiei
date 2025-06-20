function checkGuess() {
    const answer = "lion";
    const guess = document.getElementById("guess").value.toLowerCase().trim();
    const result = document.getElementById("result");
  
    if (guess === answer) {
      result.textContent = "Correct! 🦁 You guessed it!";
      result.style.color = "green";
    } else {
      result.textContent = "Oops! Try again.";
      result.style.color = "red";
    }
  }
  