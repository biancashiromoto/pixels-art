window.onload = () => {

const main = document.getElementsByTagName('main')[0];

const articlePalette = document.querySelector(('.article-color-palette'));

const calcRandomColor = () => {
  const red = Math.floor(Math.random() * 256);
  const green = Math.floor(Math.random() * 256);
  const blue = Math.floor(Math.random() * 256);
  const newColor = `rgb(${red}, ${green}, ${blue})`;
  return newColor;
};

// const colors = ['#000000', '#ff79c6', '#50fa7b', '#ffb86c'];
const colorSample = document.querySelectorAll('.color');
let initialColors = [];
const initialColorsLength = 4;

console.log(calcRandomColor())

for (let index = 0; index < colorSample; index += 1) {
  colorSample[index].style.backgroundColor = calcRandomColor;
}

// for (let index = 0; index < colors.length; index += 1) {
//   colorSample.style.backgroundColor = colors[index];
// }

const randomColorsBtn = document.getElementById('btn-random-colors');

const colorSquare = document.querySelectorAll('.color');
colorSquare[0].classList.add('selected');
const changeBackgroundColor = () => {
  for (let index = 0; index < colorSquare.length; index += 1) {
    const colorSquareItem = colorSquare[index];
    colorSquareItem.style.backgroundColor = calcRandomColor();
  }
};

randomColorsBtn.addEventListener('click', () => {
  console.log('teste');
  changeBackgroundColor();
});

const articleBoard = document.createElement('article');
articleBoard.classList.add('article-board');
main.appendChild(articleBoard);

const pixelBoard = document.createElement('section');
pixelBoard.setAttribute('id', 'pixel-board');
articleBoard.appendChild(pixelBoard);

for (let index = 0; index < 5; index += 1) {
  const pixel = document.createElement('div');
  pixelBoard.appendChild(pixel);
  pixel.classList.add('pixel');
  for (let index2 = 1; index2 < 5; index2 += 1) {
    const pixel2 = document.createElement('div');
    pixelBoard.appendChild(pixel2);
    pixel2.classList.add('pixel');
  }
}

const getColor = () => {
  const clickedColor = document.querySelectorAll('.selected');
  for (let index = 0; index < clickedColor.length; index += 1) {
    const squareItemBckgColor = clickedColor[index].style.backgroundColor;
    return squareItemBckgColor;
  }
};

colorSquare.forEach(squareItem => {
  squareItem.addEventListener('click', () => {
    const selectedColor = document.querySelector('.selected');
    if (selectedColor) {
      selectedColor.classList.remove('selected');
    }
    squareItem.classList.add('selected');
  });
});

const pixelSquares = document.getElementsByClassName('pixel');

for (let index = 0; index < pixelSquares.length; index += 1) {
  pixelSquares[index].addEventListener('click', () => {
    pixelSquares[index].style.backgroundColor = getColor();
  });
}

const clearBoardBtn = document.getElementById('btn-clear-board');
clearBoardBtn.addEventListener('click', () => {
  for (let index = 0; index < pixelSquares.length; index += 1) {
    pixelSquares[index].style.backgroundColor = 'white';
  }
});

};