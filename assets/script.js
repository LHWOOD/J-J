const startButton = document.querySelector("#btn");
const picSpace = document.getElementById("main");
let secondsLeft = 5;
const textM = document.createElement("h1");
const textA = document.createElement("h1");

startButton.addEventListener("click", function () {
  fetch("https://icanhazdadjoke.com/", {
    headers: {
      Accept: "application/json",
    },
  })
    .then(function (response) {
      return response.json();
    })
    .then(function (data) {
      console.log(data);

      // startButton.setAttribute("style", "display: none;");
      textM.textContent = data.joke;
      startButton.textContent = "Again?";
      // textM.setAttribute("style", "display: inline");
      picSpace.appendChild(textM);

      // timer();
    });
});

// function timer() {
//   // Sets interval in variable
//   let timerInterval = setInterval(function () {
//     secondsLeft--;

//     if (secondsLeft === 0) {
//       clearInterval(timerInterval);
//       textM.setAttribute("style", "display: none;");
//       startButton.setAttribute("style", "display: flex;");
//     }
//   }, 1000); //1000 represents miliseconds = 1 second
// }

// function bye() {
//   textA.setAttribute("style", "display: none;");

//   const gif = document.createElement("img");

//   gif.setAttribute(
//     "src",
//     // "https://media.giphy.com/media/c2ALUTZJNBkYw/giphy.gif"
//     // "https://media.giphy.com/media/U8GLl0bUYFLZVquOfY/giphy.gif"
//     // "https://media.giphy.com/media/35kwc8vitI34c/giphy.gif"
//     "https://media.giphy.com/media/fDbzXb6Cv5L56/giphy.gif"
//     // https://media.giphy.com/media/3o7TKDgHIAB13Eq0Ja/giphy.gif
//   );

//   picSpace.appendChild(gif);
// }
