
const $gamesButton = document.getElementById('games');
const $sportsButton = document.getElementById('sports');
const $countryButton = document.getElementById('countries');

const $quizIntro = document.getElementById('intro');

let theme = '';

$gamesButton.addEventListener('click', () => {
    theme = 'games';
    $quizIntro.classList.add('hidden');
});

$sportsButton.addEventListener('click', () => {

    theme = 'sports';
    $quizIntro.classList.add('hidden');
});

$countryButton.addEventListener('click', () => {

    theme = 'countries';
    $quizIntro.classList.add('hidden');
});