let guess_number = Math.ceil(Math.random() * 100);
function checkGuess() {
  let uservalue = parseInt(document.getElementById("userInput").value);
  let gameResult = document.getElementById("gameResult");
  //console.log(guess_number);
  if (isNaN(uservalue)) {
    gameResult.textContent = "Please enter a valid number!";
    gameResult.style.color = "black";
    return;
  }

  if (uservalue === guess_number) {
    gameResult.textContent = "🎉 Congrats! You guessed it right!";
    gameResult.style.color = "green";
  } else if (uservalue < guess_number) {
    gameResult.textContent = "⬆️ Too low! Try a bigger number.";
    gameResult.style.color = "blue";
  } else if(uservalue>guess_number){
    gameResult.textContent = "⬇️ Too high! Try a smaller number.";
    gameResult.style.color = "red";
  }
  else{
    gameResult.textContent = "Please enter a valid number between 1 to 100";
    gameResult.style.color = "black";
    return;
  }
}
