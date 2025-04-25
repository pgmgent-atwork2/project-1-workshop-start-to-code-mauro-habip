import { data } from './data/data.js';


const $gamesButton = document.getElementById('games');
const $sportsButton = document.getElementById('sports');
const $countryButton = document.getElementById('countries');

const $quizIntro = document.getElementById('intro');
const $gameIntro = document.getElementById('game-intro');

let theme = '';

$gamesButton.addEventListener('click', () => {
    theme = 'games';
    $quizIntro.classList.add('hidden');
    $gameIntro.classList.remove('hidden');
  
    if (theme === 'games') {
      questions = data.themes.find(themeData => themeData.id === 'games');
  
      let currentQuestionIndex = 0;
  
      function showQuestion() {
        const current = questions.questions[currentQuestionIndex];
  

        $gameIntro.innerHTML = `
          <h2>${current.question}</h2>
          <img class="game-intro__image" src="${current.image}" alt="Question Image">
          <div class="answers">
            ${current.answers
              .sort(() => 0.5 - Math.random())
              .map(answer => `<button class="answer">${answer.text}</button>`)
              .join('')}
          </div>
        `;
  

        document.querySelectorAll('.answer').forEach(button => {
          button.addEventListener('click', () => {
            document.querySelectorAll('.answer').forEach(btn => btn.disabled = true);
            if (button.textContent === current.answers.find(a => a.isTrue).text) {
                button.style.backgroundColor = 'green';
            } else {
                button.style.backgroundColor = 'red';
            }


            currentQuestionIndex++;
            if (currentQuestionIndex < questions.questions.length) {
                setTimeout(() => {
                    showQuestion();
                }, 1500);
                    

              
            } else {
                setTimeout(() => {
                    $gameIntro.innerHTML = `<h2>Quiz afgelopen!</h2>`;
                }, 1500);
              
            }
          });
        });
      }
  
      showQuestion();
    }
  });
  

$sportsButton.addEventListener('click', () => {

    theme = 'sports';
    $quizIntro.classList.add('hidden');
    $gameIntro.classList.remove('hidden');
  
    if (theme === 'sports') {
      questions = data.themes.find(themeData => themeData.id === 'sports');
  
      let currentQuestionIndex = 0;
  
      function showQuestion() {
        const current = questions.questions[currentQuestionIndex];
  

        $gameIntro.innerHTML = `
          <h2>${current.question}</h2>
          <img class="game-intro__image" src="${current.image}" alt="Question Image">
          <div class="answers">
            ${current.answers
              .sort(() => 0.5 - Math.random())
              .map(answer => `<button class="answer">${answer.text}</button>`)
              .join('')}
          </div>
        `;
  

        document.querySelectorAll('.answer').forEach(button => {
          button.addEventListener('click', () => {
            document.querySelectorAll('.answer').forEach(btn => btn.disabled = true);
            if (button.textContent === current.answers.find(a => a.isTrue).text) {
                button.style.backgroundColor = 'green';
            } else {
                button.style.backgroundColor = 'red';
            }


            currentQuestionIndex++;
            if (currentQuestionIndex < questions.questions.length) {
                setTimeout(() => {
                    showQuestion();
                }, 1500);
                    

              
            } else {
                setTimeout(() => {
                    $gameIntro.innerHTML = `<h2>Quiz afgelopen!</h2>`;
                }, 1500);
              
            }
          });
        });
      }
  
      showQuestion();
    }
  });


$countryButton.addEventListener('click', () => {

    theme = 'flags';
    $quizIntro.classList.add('hidden');
    $gameIntro.classList.remove('hidden');
  
    if (theme === 'flags') {
      questions = data.themes.find(themeData => themeData.id === 'flags');
  
      let currentQuestionIndex = 0;
  
      function showQuestion() {
        const current = questions.questions[currentQuestionIndex];
  

        $gameIntro.innerHTML = `
          <h2>${current.question}</h2>
          <img class="game-intro__image" src="${current.image}" alt="Question Image">
          <div class="answers">
            ${current.answers
              .sort(() => 0.5 - Math.random())
              .map(answer => `<button class="answer">${answer.text}</button>`)
              .join('')}
          </div>
        `;
  

        document.querySelectorAll('.answer').forEach(button => {
          button.addEventListener('click', () => {
            document.querySelectorAll('.answer').forEach(btn => btn.disabled = true);
            if (button.textContent === current.answers.find(a => a.isTrue).text) {
                button.style.backgroundColor = 'green';
            } else {
                button.style.backgroundColor = 'red';
            }


            currentQuestionIndex++;
            if (currentQuestionIndex < questions.questions.length) {
                setTimeout(() => {
                    showQuestion();
                }, 1500);
                    

              
            } else {
                setTimeout(() => {
                    $gameIntro.innerHTML = `<h2>Quiz afgelopen!</h2>`;
                }, 1500);
              
            }
          });
        });
      }
  
      showQuestion();
    }
});


let questions = data;
  

