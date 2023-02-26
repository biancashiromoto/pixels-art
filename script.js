window.onload = () => {
  
  const articleBoard = document.querySelector('.article-board');
  const colorSample = document.querySelectorAll('.color');
  const main = document.getElementsByTagName('main')[0];
  const pixelSquares = document.getElementsByClassName('pixel');
  const clearBoardBtn = document.getElementById('btn-clear-board');

const calcRandomColor = () => {
  const red = Math.floor(Math.random() * 256);
  const green = Math.floor(Math.random() * 256);
  const blue = Math.floor(Math.random() * 256);
  const newColor = `rgb(${red}, ${green}, ${blue})`;
  return newColor;
};

for (let index = 0; index < 4; index += 1) {
  for (const sample of colorSample) {
    sample.style.backgroundColor = calcRandomColor();
  }
}

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
  changeBackgroundColor();
});

const boardSize = 2;
articleBoard.style.gridTemplateColumns = `repeat(${boardSize}, 1fr)`;
for (let indexWidth = 0; indexWidth < boardSize; indexWidth += 1) {
  const pixel = document.createElement('div');
  pixel.classList.add('pixel');
  articleBoard.appendChild(pixel);
  for (indexHeight = 1; indexHeight < boardSize; indexHeight += 1) {
    const pixel = document.createElement('div');
    pixel.classList.add('pixel');
    articleBoard.appendChild(pixel);
  }
}

const getColor = () => {
  const clickedColor = document.querySelectorAll('.selected');
  for (const selectedColor of clickedColor) {
    const bckgColor = selectedColor.style.backgroundColor;
    return bckgColor;
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

for (const square of pixelSquares) {
  square.addEventListener('click', () => {
    square.style.backgroundColor = getColor();
  });
  clearBoardBtn.addEventListener('click', () => {
    square.style.backgroundColor = 'white';
  });
}

};