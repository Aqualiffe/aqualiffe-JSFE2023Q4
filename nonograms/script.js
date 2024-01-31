const main = document.createElement('main');
main.className = 'main';
document.body.prepend(main);
const gameConteiner = document.createElement('div');
gameConteiner.className = 'game-conteiner';
main.prepend(gameConteiner);

const canvas = document.createElement('canvas');
canvas.id = 'canvas';
gameConteiner.prepend(canvas);


context = canvas.getContext("2d");
canvas.width = 600;
canvas.height = 600;


gameConteiner.appendChild(canvas);