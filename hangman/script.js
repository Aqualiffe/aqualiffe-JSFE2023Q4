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


function randomWord(obj) {
  let keys = Object.keys(obj);
  return keys[ Math.floor(keys.length * Math.random())];
}

let currentWord = randomWord(listQA);
let currentQuestion = listQA[currentWord];
currentWord = currentWord.toUpperCase();

console.log(currentWord);

/*MODAL*/

const modal = document.createElement('div');
const modalBox = document.createElement('div');
const buttonModalClose = document.createElement('button');
const modalText = document.createElement('p');
const modalTextWord = document.createElement('p');
const btnReset = document.createElement('button');

modal.className = 'modal';
modalBox.className = 'modal-box';
buttonModalClose.className = 'modal__x x-log';
modalText.className = 'modal-text';
modalTextWord.className = 'modal-text word';
modalTextWord.textContent = `Word: ${currentWord}`;
btnReset.className = 'btn_reset';
btnReset.textContent = 'Play again';
document.body.prepend(modal);
modal.prepend(modalBox);
modalBox.prepend(btnReset);
modalBox.prepend(buttonModalClose);
modalBox.prepend(modalTextWord);
modalBox.prepend(modalText);



/*MAIN*/
const main = document.createElement('main');
main.className = 'main';
document.body.prepend(main);

const mainTitle = document.createElement('h1');
mainTitle.className = 'main__title';
mainTitle.textContent = 'Hangman game';
main.prepend(mainTitle);

const conteiner = document.createElement('div');
conteiner.className = 'conteiner';
main.appendChild(conteiner);

const gallows = document.createElement('div');
gallows.className = 'gallows';
conteiner.appendChild(gallows);
const allBody = document.createElement('div');
allBody.className = `gallows__allBody`;
gallows.appendChild(allBody);


for (let i = 0; i < 6; i += 1) {
  const images = document.createElement('img');
  images.src = arrayOfImages[i];
  images.className = `allBody_img part-${i}`;
  allBody.appendChild(images);
}


const controls = document.createElement('div');
controls.className = 'controls';
conteiner.appendChild(controls);

const hintConteiner = document.createElement('h2');
hintConteiner.className = 'hint';


const word = document.createElement('div');
word.className = 'word';
controls.appendChild(word);

const letter = document.createElement('span');
letter.className = 'letter';
let startWord ='';



const CountErrorConteiner = document.createElement('h3');
CountErrorConteiner.className = 'controls__error';

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

const resetGame = function() {
  wrongKey = 0;
  newCurrentWord = randomWord(listQA);
  if (currentWord === newCurrentWord) {
    newCurrentWord = randomWord(listQA);
  }

  currentQuestion = listQA[newCurrentWord];
  newCurrentWord = newCurrentWord.toUpperCase();
  hintConteiner.textContent = 'Hint: ' + currentQuestion;
  startWord ='';
  startTmp(newCurrentWord);
  console.log(newCurrentWord);
  currentWord = newCurrentWord;
  letter.textContent = startWord;
  word.appendChild(letter);
  for (i = 0; i < keys.length; i += 1) {
    if (keys[i].disabled){
      console.log(keys[i]);
      keys[i].disabled = false;
    }
  }
}



CountErrorConteiner.innerHTML = 'Incorrect guesses: ' + `<span class = "count-errors">${wrongKey} / ${maxKey}</span>`;
controls.appendChild(CountErrorConteiner);

hintConteiner.textContent = 'Hint: ' + currentQuestion;
controls.appendChild(hintConteiner);

  letter.textContent = startWord;
  word.appendChild(letter);



const initGame = (button, clickedKey) => {
  let arrImg = document.querySelectorAll('.allBody_img ');
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

let keyboard = document.createElement('div')
keyboard.className = 'keyboard';
controls.appendChild(keyboard);

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
      console.log(keys[i]);
      initGame(keys[i], e.key.toUpperCase())
    }
  }
});


const modalOpen = function() {
  modal.classList.add("open");
}

const modalClose = function(e) {
  const clickModal = e.composedPath().includes(modalBox);
  const clickBtnClose = e.composedPath().includes(buttonModalClose);
  if (!clickModal || clickBtnClose) {
    modal.classList.remove("open");
  }
}

buttonModalClose.addEventListener('click', modalClose);
btnReset.addEventListener('click', function() {
  modal.classList.remove("open");
  resetGame();
});

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


