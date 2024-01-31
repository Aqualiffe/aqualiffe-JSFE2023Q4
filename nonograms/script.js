import { matix1, matrixRepka, matrixCofe } from './matrix.js';

const main = document.createElement('main');
main.className = 'main';
document.body.appendChild(main);
const infoConteiner = document.createElement('div');
infoConteiner.className = 'info-conteiner';
main.appendChild(infoConteiner);
const mainTitle  = document.createElement('h1');
mainTitle.className = 'main__title';
mainTitle.textContent = 'Nonograms game';
infoConteiner.appendChild(mainTitle);



const gameConteiner = document.createElement('div');
gameConteiner.className = 'game-conteiner';
main.appendChild(gameConteiner);

let canvas = document.createElement('canvas');
canvas.id = 'canvas';
gameConteiner.appendChild(canvas);


//Canvas
let context = canvas.getContext("2d");

let currentMatrix = matrixRepka;

// console.log(currentMatrix.length);
// console.log(currentMatrix[0].length);


let matrixWidth = currentMatrix[0].length;
let matrixHeight = currentMatrix.length;

let numField = function(matrix){
  let numbers = [];
  for (let i = 0; i < matrix.length; i++){
    let count = 0;
    let counts = [];
    for(let j = 0; j < matrix[i].length; j++){
      if(matrix[i][j] == 1){
        count ++;
        if(j == matrix[i].length - 1){
          counts.push(count);
        }
      } else if (count != 0){
        counts.push(count);
        count = 0;
      }
    }
    numbers.push(counts);
  }
  return numbers;
};

let invertMatrix = function(){
  let newMatrix = [];
  for(let i = 0; i < currentMatrix[0].length; i++){
    let newRow = [];
    for(let j = 0; j < currentMatrix.length; j++){
      newRow.push(currentMatrix[j][i]);
    }
    newMatrix.push(newRow);
  }
  return newMatrix;
};

let transMatrix = invertMatrix();

let leftNum = numField(currentMatrix);//left
let topNum = numField(transMatrix);//top

let maxField = function(matrix){
  let maxWidth = 0;
  for(let i = 0; i < matrix.length; i++) {
    if (maxWidth < matrix[i].length) maxWidth = matrix[i].length;
  }
  return maxWidth;
};


let numLeft = maxField(leftNum);
let numTop = maxField(topNum);

let fieldWidth = matrixWidth * 20 + numLeft * 20;
let fieldHeight = matrixHeight * 20 + numTop * 20;

canvas.width = fieldWidth;
canvas.height = fieldHeight;

const drowClear = function(fieldWidth, fieldHeight) {
  context.beginPath();
  context.strokeStyle = "#888";

  for (var x = numLeft * 20; x <= fieldWidth; x += 20) {
    context.moveTo(x, 0);
    context.lineTo(x, fieldWidth);
  }

  for (var y = numTop * 20; y <= fieldHeight; y += 20) {
    context.moveTo(0, y);
    context.lineTo(fieldHeight, y);
  }
  context.stroke();
  context.closePath();

  context.beginPath();
  context.strokeStyle = "#484848";

  for (var x = numLeft * 20; x <= fieldWidth; x += 100) {
    context.moveTo(x, 0);
    context.lineTo(x, fieldWidth);
  }

  for (var y = numTop * 20; y <= fieldHeight; y += 100) {
    context.moveTo(0, y);
    context.lineTo(fieldHeight, y);
  }
  context.stroke();
  context.closePath();
}

drowClear(fieldWidth, fieldHeight);