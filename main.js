

const player1 = {
    name:'Scorpion',
    hp: 100,
    img: 'https://reactmarathon-api.herokuapp.com/assets/scorpion.gif',
    weapen: ['Kunai on a chain','Basket Guard Sword','Ninjato','Fire Ball'],
    attack:function () {
        console.log(this.name + 'Fight...')
    }
};

const player2 = {
    name:'Sub Zero',
    hp: 80,
    img: 'https://reactmarathon-api.herokuapp.com/assets/subzero.gif',
    weapen: ['Ice Daggers','Ice Hammer','Ice Sword','Freezing'],
    attack: function () {
        console.log(this.name + 'Fight...')
    }
};

// function createPlayer(playerClass,playerName) {
//     const $player = document.createElement('div');
//     $player.classList.add(playerClass);

//     const $progressBar = document.createElement('div');
//     $progressBar.classList.add('progressbar');

//     const $character = document.createElement('div');
//     $character.classList.add('character');

//     const $life = document.createElement('div');
//     $life.classList.add('name');
//     $life.style.width = hp + '%';

//     const $name = document.createElement('div');
//     $name.classList.add('name');
//     $name.innerText = playerName.name;

//     const $img = document.createElement('img');
//     $img.classList.add('img');
//     $img.src = playerName.img;

//     $player.appendChild($progressBar);
//     $player.appendChild($character);
//     $progressBar.appendChild($life);
//     $progressBar.appendChild($name);
//     $character.appendChild($img);
    
//     const $arenas = document.querySelector('.arenas');
//     $arenas.appendChild($player);
// };

createPlayer('player1', player1);
createPlayer('player2', player2);
const board = document.querySelector('#board')
const startBtn = document.querySelector('#start')
const resetBtn = document.querySelector('#reset')
const input = document.querySelector('#num')

startBtn.addEventListener('click', start)
resetBtn.addEventListener('click', reset)

function start() {
  const squaresAmount = input.value
  
  for (let i = 0; i < squaresAmount; i++) {
    let square = document.createElement('div')
    square.classList.add('square')
    board.append(square)
  }
  
  board.addEventListener('mouseover', addColor)
  board.addEventListener('mouseout', deleteColor) 
}

function reset() {
  input.value = '400'
  board.innerHTML = ''
}

function addColor(event) {
  let sq = event.target.closest('.square')
  if (!sq) return
  let sqColor = getRandomColor()
  sq.style.backgroundColor = sqColor
  sq.style.boxShadow = `0 0 2px ${sqColor}, 0 0 10px ${sqColor}`
}

function deleteColor(event) {
  let sq = event.target.closest('.square')
  if (!sq) return
  sq.style.backgroundColor = '#1d1d1d'
  sq.style.boxShadow = '0 0 2px #000'
}

function getRandomColor() {
  let red = Math.floor(Math.random() * 256)
  let green = Math.floor(Math.random() * 256)
  let blue = Math.floor(Math.random() * 256)
  return `rgb(${red}, ${green}, ${blue})`
}