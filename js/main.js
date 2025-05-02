import { data } from "./data/data.js";

const $gamesButton = document.getElementById("games");
const $sportsButton = document.getElementById("sports");
const $countryButton = document.getElementById("countries");

const $quizIntro = document.getElementById("intro");
const $gameIntro = document.getElementById("game-intro");

const copyButton = document.getElementById("copyBtn");

function copyCode(buttonId) {
  const button = document.getElementById(buttonId);
  const code = button.nextElementSibling.innerText;

  navigator.clipboard.writeText(code).then(() => {
    button.innerText = "Copied!";
    setTimeout(() => {
      button.innerText = "Kopieer";
    }, 2000);
  });
}

if (copyButton) {
  copyButton.addEventListener("click", () => {
    copyCode("copyBtn");
  });
}

if (
  $gamesButton &&
  $sportsButton &&
  $countryButton &&
  $quizIntro &&
  $gameIntro
) {
  let theme = "";
  let rightAnswers = 0;
  let questions = data;

  function setupQuiz(button, themeId) {
    button.addEventListener("click", () => {
      theme = themeId;
      $quizIntro.classList.add("hidden");
      $gameIntro.classList.remove("hidden");

      const themeData = data.themes.find(
        (themeData) => themeData.id === themeId
      );
      if (!themeData) return;

      let currentQuestionIndex = 0;

      function showQuestion() {
        const current = themeData.questions[currentQuestionIndex];

        $gameIntro.innerHTML = `
          <h2>${current.question}</h2>
          <img class="game-intro__image" src="${
            current.image
          }" alt="Question Image">
          <div class="answers">
            ${current.answers
              .sort(() => 0.5 - Math.random())
              .map((answer) => `<button class="answer">${answer.text}</button>`)
              .join("")}
          </div>
        `;

        document.querySelectorAll(".answer").forEach((button) => {
          button.addEventListener("click", () => {
            document
              .querySelectorAll(".answer")
              .forEach((btn) => (btn.disabled = true));
            if (
              button.textContent === current.answers.find((a) => a.isTrue).text
            ) {
              button.style.backgroundColor = "green";
              rightAnswers++;
            } else {
              button.style.backgroundColor = "red";
            }

            currentQuestionIndex++;
            if (currentQuestionIndex < themeData.questions.length) {
              setTimeout(showQuestion, 1500);
            } else {
              setTimeout(() => {
                $gameIntro.innerHTML = `
                  <h2>Quiz afgelopen!</h2>
                  <p>Je hebt ${rightAnswers} van de ${themeData.questions.length} vragen goed beantwoord.</p>
                `;
              }, 1500);
            }
          });
        });
      }

      showQuestion();
    });
  }

  setupQuiz($gamesButton, "games");
  setupQuiz($sportsButton, "sports");
  setupQuiz($countryButton, "flags");
}
