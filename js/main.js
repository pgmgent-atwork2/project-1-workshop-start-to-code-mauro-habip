import { data } from "./data/data.js";
import { copyCode } from "./copycode.js";

document.getElementById("copyBtn").addEventListener("click", () => {
  copyCode("copyBtn");
});

const $gamesButton = document.getElementById("games");
const $sportsButton = document.getElementById("sports");
const $countryButton = document.getElementById("countries");

const $quizIntro = document.getElementById("intro");
const $gameIntro = document.getElementById("game-intro");

let theme = "";

$gamesButton.addEventListener("click", () => {
  theme = "games";
  $quizIntro.classList.add("hidden");
  $gameIntro.classList.remove("hidden");

  if (theme === "games") {
    console.log("hallo");
    questions = data.themes.find((themeData) => themeData.id === "games");

    console.log(questions);

    for (let i = 0; i < questions.questions.length; i++) {
      const question = questions.questions[i].question;
      const image = questions.questions[i].image;
      const allAnswers = questions.questions[i].answers;
      const answers = allAnswers.sort(() => 0.5 - Math.random()).slice(0, 4);

      $gameIntro.innerHTML += `
            <div class="question">
                <h2>${question}</h2>
                <img src=${image} alt="Question Image">
                <div class="answers">
                ${answers
                  .map(
                    (answer) => `<button class="answer">${answer.text}</button>`
                  )
                  .join("")}
                </div>
            </div>
            `;
    }
  }
});

$sportsButton.addEventListener("click", () => {
  theme = "sports";
  $quizIntro.classList.add("hidden");
  $gameIntro.classList.remove("hidden");
});

$countryButton.addEventListener("click", () => {
  theme = "countries";
  $quizIntro.classList.add("hidden");
  $gameIntro.classList.remove("hidden");
});

let questions = data;
