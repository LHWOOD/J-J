const startButton = document.querySelector("#btn");
const picSpace = document.getElementById("main");
let secondsLeft = 7;
const textM = document.createElement("h1");
const textA = document.createElement("h1");

startButton.addEventListener("click", function () {
  startButton.setAttribute("style", "display: none;");

  textM.textContent = "What do you call a sad cup of coffee?";
  textM.setAttribute("style", "left-margin: 15px");
  picSpace.appendChild(textM);

  timer();
});

function timer() {
  // Sets interval in variable
  let timerInterval = setInterval(function () {
    secondsLeft--;

    if (secondsLeft === 3) {
      textM.setAttribute("style", "display: none;");

      textA.textContent = "Depresso";
      picSpace.appendChild(textA);
    }

    if (secondsLeft === 0) {
      clearInterval(timerInterval);
      bye();
    }
  }, 1000); //1000 represents miliseconds = 1 second
}

function bye() {
  textA.setAttribute("style", "display: none;");

  const gif = document.createElement("img");

  gif.setAttribute(
    "src",
    "https://media.giphy.com/media/c2ALUTZJNBkYw/giphy.gif"
  );

  picSpace.appendChild(gif);
}
