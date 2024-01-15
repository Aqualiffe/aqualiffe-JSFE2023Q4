let listQA = {
  'cat': 'pet?',
  'everest': 'The highest mountain in the world?',
  'SpongeBob': 'whoooo who lives in a pineapple under the sea?',
  'Christmas tree': 'Who was born and grew up in the forest?',
  'Rolling Scopes School': 'School name',
}

const arrayOfImages = ['./assets/head.svg', './assets/body.svg', './assets/hand-one.svg', './assets/hand-two.svg', './assets/leg-one.svg', './assets/leg-two.svg',];

let alphabet = 'ABCDEFGHIJKLMNOPQRSTUVWXYZ';

let wrongKey = 0;
const maxKey = 6;

function randomWord(obj) {
  let keys = Object.keys(obj);
  return keys[ Math.floor(keys.length * Math.random())];
}

let currentWord = randomWord(listQA);
let currentQuestion = listQA[currentWord];
currentWord = currentWord.toUpperCase();

console.log(currentWord);


/*MAIN*/
let main = document.createElement('main');
main.className = 'main';
document.body.prepend(main);

let mainTitle = document.createElement('h1');
mainTitle.className = 'main__title';
mainTitle.textContent = 'Hangman game';
main.prepend(mainTitle);

let conteiner = document.createElement('div');
conteiner.className = 'conteiner';
main.appendChild(conteiner);

let gallows = document.createElement('div');
gallows.className = 'gallows';
conteiner.appendChild(gallows);
let allBody = document.createElement('div');
allBody.className = `gallows__allBody`;
gallows.appendChild(allBody);


for (let i = 0; i < 6; i += 1) {
  let images = document.createElement('img');
  images.src = arrayOfImages[i];
  images.className = `allBody_img part-${i}`;
  allBody.appendChild(images);
}


let controls = document.createElement('div');
controls.className = 'controls';
conteiner.appendChild(controls);

let hintConteiner = document.createElement('h2');
hintConteiner.className = 'hint';
hintConteiner.textContent = 'Hint: ' + currentQuestion;
controls.appendChild(hintConteiner);

let word = document.createElement('div');
word.className = 'word';
controls.appendChild(word);

let letter = document.createElement('span');
letter.className = 'letter';
startWord ='';

for(let i = 0; i < currentWord.length; i += 1) {
  if (currentWord[i] !== ' ') {
    startWord += '_';
  } else {
    startWord += ' ';
  }
}

letter.textContent = startWord;
word.appendChild(letter);

let CountErrorConteiner = document.createElement('h3');
CountErrorConteiner.className = 'controls__error';
CountErrorConteiner.innerHTML = 'Incorrect guesses: ' + `<span class = "count-errors">${wrongKey} / ${maxKey}</span>`;
controls.appendChild(CountErrorConteiner);


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
    console.log(clickedKey, 'есть буква');
  } else {
    console.log(clickedKey, 'нет буквы');
    wrongKey += 1;
    arrImg[wrongKey - 1].classList.add('open');
  }
  button.disabled = true;
  CountErrorConteiner.innerHTML = 'Incorrect guesses: ' + `<span class = "count-errors">${wrongKey} / ${maxKey}</span>`;
  if (wrongKey === maxKey) {

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