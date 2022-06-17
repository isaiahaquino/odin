const GameBoard = (() => {
    let boardArray = [0, 0, 0, 0, 0, 0, 0, 0, 0]; // 0 = null, 1 = X, 2 = O
    let currentMarker = 0;

    const getBoard = () => boardArray;
    const getCurrentMarker = () => currentMarker;
    const changeMarker = (player) => currentMarker = player;

    const reset = () => { 
        boardArray = [0, 0, 0, 0, 0, 0, 0, 0, 0]; 
        DisplayController.displayBoard();
        
        // TODO: Create X and O Player objects

        console.log("Board has reset.");
    }

    const placeMark = (index) => {
        if (boardArray[index] == 0) {
            if (currentMarker == 0) {
                console.log("Pick a player!");
                return;
            }
            boardArray[index] = currentMarker;
            toggleMarker();
            DisplayController.displayBoard();

            // TODO: Call Player.makeMove(row, column)

        } else { console.log("Position is currently occupied!"); }
    }

    const toggleMarker = () => {
        if (currentMarker == 1) { DisplayController.togglePlayer(2); }
        else { DisplayController.togglePlayer(1); }
    }

    return {getBoard, reset, changeMarker, getCurrentMarker, placeMark};
})();

const DisplayController = (() => {

    const displayBoard = () => {
        let array = GameBoard.getBoard();

        array.forEach(function (element, i) {
            const marker = document.getElementById(`m${i}`);
            if (element == 1) {
                marker.innerText = "X";
            } else if (element == 2) {
                marker.innerText = "O";
            } else {
                marker.innerText = null;
            }
        });
    }

    const togglePlayer = (player) => {
        if (player == 1) {
            document.getElementById("playerO").classList.remove("selected");
            document.getElementById("playerX").classList.add("selected");
            GameBoard.changeMarker(1);
        } else if (player == 2) {
            document.getElementById("playerX").classList.remove("selected");
            document.getElementById("playerO").classList.add("selected");
            GameBoard.changeMarker(2);
        }
    }

    return {displayBoard, togglePlayer};
})();

const Player = (() => {

    let rowsContainer = [0, 0, 0];
    let columnsContainer = [0, 0, 0];
    let diagonalContainer = [0, 0, 0];
    let oppositeDiagonalContainer = [0, 0, 0];

    const makeMove = (row, column) => {
        let sizeOfBoard = 3;
        rowsContainer[row] += 1;
        columnsContainer[column] += 1;
        
        if (row == column) {
            diagonalContainer[row] += 1;
        }
        
        if (row + column + 1 == sizeOfBoard) {
            oppositeDiagonalContainer[row] += 1;
        }
        
        if (rowsContainer[row] == sizeOfBoard) {
            console.log("Win across row!");
        }
        
        if (columnsContainer[column] == sizeOfBoard) {
            console.log("Win across column!");
        }
        
        var sumForRegularDiagonalElements = 0;
        var sumForOppositeDiagonalElements = 0;
        
        for (let index in diagonalContainer) {
            sumForRegularDiagonalElements += diagonalContainer[index];
            sumForOppositeDiagonalElements += oppositeDiagonalContainer[index];
        }
        
        if (sumForRegularDiagonalElements == sizeOfBoard) {
            console.log("Win across diagonal!");
        }
        
        if (sumForOppositeDiagonalElements == sizeOfBoard) {
            console.log("Win across diagonal!");
        }
    }
});

DisplayController.reset();


