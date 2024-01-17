let listQA = {
  'cat': 'Pet?',
  'everest': 'The highest mountain in the world?',
  'SpongeBob': 'whoooo who lives in a pineapple under the sea?',
  'Christmas tree': 'Who was born and grew up in the forest?',
  'Rolling Scopes School': 'School name',
  'Hangman': 'Name of the game' ,
  'HTML': 'The most basic building block of the Web',
  'CSS': 'A stylesheet language used to describe the presentation of a document written in HTML or XML ',
  'dog': 'Pet, peoples best friend',
}

const arrayOfImages = ['./assets/head.svg', './assets/body.svg', './assets/hand-one.svg', './assets/hand-two.svg', './assets/leg-one.svg', './assets/leg-two.svg',];

let alphabet = 'ABCDEFGHIJKLMNOPQRSTUVWXYZ';

let wrongKey = 0;
const maxKey = 6;
let result = ['You won', 'You lost'];
let currentWord = '';
let currentQuestion = '';
let startWord ='';

function randomWord(obj) {
  let keys = Object.keys(obj);
  return keys[ Math.floor(keys.length * Math.random())];
}

/*MODAL*/

const modal = document.createElement('div');
const modalBox = document.createElement('div');
const buttonModalClose = document.createElement('button');
const modalText = document.createElement('p');
const modalTextWord = document.createElement('p');
const btnReset = document.createElement('button');
const btnResetModal = document.createElement('button');

modal.className = 'modal';
modalBox.className = 'modal-box';
buttonModalClose.className = 'modal__x x-log';
modalText.className = 'modal-text';
modalTextWord.className = 'modal-text word';
btnReset.className = 'btn_reset';
btnReset.textContent = 'Play again';
btnResetModal.className = 'btn_reset';
btnResetModal.textContent = 'Play again';
modalText.textContent = `${result[1]}`;
document.body.prepend(modal);
modal.prepend(modalBox);
modalBox.prepend(btnResetModal);
modalBox.prepend(buttonModalClose);
modalBox.prepend(modalText);



/*MAIN*/
const main = document.createElement('main');
main.className = 'main';
const mainTitle = document.createElement('h1');
mainTitle.className = 'main__title';
mainTitle.textContent = 'Hangman game';
const conteiner = document.createElement('div');
conteiner.className = 'conteiner';
const gallows = document.createElement('div');
gallows.className = 'gallows';
const allBody = document.createElement('div');
allBody.className = `gallows__allBody`;
const controls = document.createElement('div');
controls.className = 'controls';
const hintConteiner = document.createElement('h2');
hintConteiner.className = 'hint';
const word = document.createElement('div');
word.className = 'word';
const letter = document.createElement('span');
letter.className = 'letter';
const CountErrorConteiner = document.createElement('h3');
CountErrorConteiner.className = 'controls__error';
CountErrorConteiner.innerHTML = 'Incorrect guesses: ' + `<span class = "count-errors">${wrongKey} / ${maxKey}</span>`;
hintConteiner.textContent = 'Hint: ' + currentQuestion;
letter.textContent = startWord;
let keyboard = document.createElement('div');
keyboard.className = 'keyboard';


document.body.prepend(main);
main.prepend(mainTitle);
main.appendChild(conteiner);
conteiner.appendChild(gallows);
gallows.appendChild(allBody);

for (let i = 0; i < 6; i += 1) {
  const images = document.createElement('img');
  images.src = arrayOfImages[i];
  images.className = `allBody_img part-${i}`;
  allBody.appendChild(images);
}
let arrImg = document.querySelectorAll('.allBody_img ');

conteiner.appendChild(controls);
controls.appendChild(word);
controls.appendChild(CountErrorConteiner);
controls.appendChild(hintConteiner);
word.appendChild(letter);
modalBox.prepend(modalTextWord);
controls.appendChild(keyboard);
main.appendChild(btnReset);

const startTmp = function(currentWord) {
  for(let i = 0; i < currentWord.length; i += 1) {
    if (currentWord[i] !== ' ') {
      startWord += '_';
    } else {
      startWord += ' ';
    }
  }
}
startTmp(currentWord);

const startGame = function() {
  currentWord = randomWord(listQA);
  currentQuestion = listQA[currentWord];
  currentWord = currentWord.toUpperCase();
  startWord ='';
  wrongKey = 0;
  currentWord = randomWord(listQA);
  currentQuestion = listQA[currentWord];
  currentWord = currentWord.toUpperCase();
  hintConteiner.textContent = 'Hint: ' + currentQuestion;
  startWord ='';
  startTmp(currentWord);
  letter.textContent = startWord;
  word.appendChild(letter);
  for (let i = 0; i < keys.length; i += 1) {
    if (keys[i].disabled){
      keys[i].disabled = false;
    }
  }
  for (let i = 0; i < 6; i += 1) {
    arrImg[i].classList.remove("open");
  }
  CountErrorConteiner.innerHTML = 'Incorrect guesses: ' + `<span class = "count-errors">${wrongKey} / ${maxKey}</span>`;
  modalTextWord.textContent = `Word: ${currentWord}`;
  console.log(currentWord);
}


const initGame = (button, clickedKey) => {

  if (currentWord.includes(clickedKey)) {
    startWord = startWord.split('');
    for(let i = 0; i < startWord.length; i += 1) {
      if (currentWord[i] === clickedKey){
        startWord[i] = clickedKey;
      }
    }
    startWord = startWord.join('');
    letter.textContent = startWord;
    word.appendChild(letter);
    button.disabled = true;
    // console.log(clickedKey, 'есть буква');
  } else {
    // console.log(clickedKey, 'нет буквы');
    wrongKey += 1;
    arrImg[wrongKey - 1].classList.add('open');
  }
  button.disabled = true;
  CountErrorConteiner.innerHTML = 'Incorrect guesses: ' + `<span class = "count-errors">${wrongKey} / ${maxKey}</span>`;
  if (wrongKey === maxKey) {
    modalText.textContent = `${result[1]}`;
    modalOpen();
  }
  if (startWord === currentWord) {
    modalText.textContent = `${result[0]}`;
    modalOpen();
  }
}

for (let i = 0; i < alphabet.length; i += 1) {
  const button = document.createElement ('button');
  button.className = 'key';
  button.innerHTML += alphabet[i];
  keyboard.appendChild(button);
  button.addEventListener('click', e => initGame(e.target, alphabet[i]));
}

let keys = document.querySelectorAll('.key');
document.body.addEventListener('keydown', e => {
  if (!alphabet.toUpperCase().includes(e.key)) {
    console.log('Слово состоит из английских букв');
  }
  for (i = 0; i < keys.length; i += 1) {
    if (keys[i].textContent.includes(e.key.toUpperCase()) && !keys[i].disabled){
      initGame(keys[i], e.key.toUpperCase())
    }
  }
});


const modalOpen = function() {
  modal.classList.add("open");
}

// const modalClose = function(e) {
//   const clickModal = e.composedPath().includes(modalBox);
//   const clickBtnClose = e.composedPath().includes(buttonModalClose);
//   if (!clickModal || clickBtnClose) {
//     modal.classList.remove("open");
//   }
// }

buttonModalClose.addEventListener('click', function() {
  modal.classList.remove("open");
  startGame();
});
btnReset.addEventListener('click', function() {
  startGame();
});
btnResetModal.addEventListener('click', function() {
  modal.classList.remove("open");
  startGame();
});


startGame();

/*FOOTER*/
let footer = document.createElement('footer');
let year = document.createElement('p');
let linkTRSS = document.createElement('a');
let linkGit = document.createElement('a');

year.innerHTML = '<p>© 2024</p>';
linkTRSS.innerHTML = '<a href="https://rs.school/js/" target="_blank" class="footer-TRSS"><img src="./assets/rs_school_js.svg" width="121" alt="The Rolling Scopes School"></a>';
linkGit.innerHTML = '<a href="https://github.com/Aqualiffe" target="_blank" class="git-name"><img src="./assets/github-logo.png" width="30" alt="github.com/Aqualiffe">Aqualiffe</a>';
footer.appendChild(year);
footer.appendChild(linkTRSS);
footer.appendChild(linkGit);
document.body.append(footer);