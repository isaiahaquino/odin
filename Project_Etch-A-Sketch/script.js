function createGrid(edge) {
    const grid = document.querySelector('#container');
    let squareSize = 980 / edge;
    for (let i=0; i < (edge*edge); i++) {
        const square = document.createElement('div');
        square.setAttribute('class', 'square');
        square.setAttribute('style', `height: ${squareSize}px; width: ${squareSize}px;`);
        grid.appendChild(square);
    }

    const squares = document.querySelectorAll('.square');
    squares.forEach((square) => {
        square.addEventListener('mouseenter', () => {
            square.style.backgroundColor = 'black';
        });
    });
}

function reset() {
    let size = prompt("Choose grid layout (1 - 100):");
    if (size > 0 && size < 101) {
        const squares = document.querySelectorAll('.square');
        squares.forEach((square) => {
            square.remove();
        });
        createGrid(size);
    }
}


