const GameBoard = (() => {
    let boardArray = [0, 0, 0, 0, 0, 0, 0, 0, 0]; // 0 = null, 1 = X, 2 = O
    let currentMarker = 0;
    let playerX = null;
    let playerO = null;
    let playerMoves = 0;
    let winner = false;

    const getBoard = () => boardArray;
    const changeMarker = (player) => currentMarker = player;

    const reset = () => { 
        boardArray = [0, 0, 0, 0, 0, 0, 0, 0, 0]; 
        playerX = Player();
        playerO = Player();
        playerMoves = 0;
        winner = false;
        currentMarker = 0;
        DisplayController.resetBoard();
        DisplayController.displayBoard();
        console.log("Board has reset.");
    }

    const placeMark = (index) => {
        if (boardArray[index] == 0) {
            if (currentMarker == 0) {
                console.log("Pick a player!");
                return;
            }
            if (winner) {
                console.log("Reset board to play again!");
                return;
            }

            boardArray[index] = currentMarker;
            playerMoves += 1;

            switch (index) {
                case 0:
                    if (currentMarker == 1) { playerX.makeMove(0,0); }
                    else { playerO.makeMove(0,0); }
                    break;
                case 1:
                    if (currentMarker == 1) { playerX.makeMove(0,1); }
                    else { playerO.makeMove(0,1); }
                    break;
                case 2:
                    if (currentMarker == 1) { playerX.makeMove(0,2); }
                    else { playerO.makeMove(0,2); }
                    break;
                case 3:
                    if (currentMarker == 1) { playerX.makeMove(1,0); }
                    else { playerO.makeMove(1,0); }
                    break;
                case 4:
                    if (currentMarker == 1) { playerX.makeMove(1,1); }
                    else { playerO.makeMove(1,1); }
                    break;
                case 5:
                    if (currentMarker == 1) { playerX.makeMove(1,2); }
                    else { playerO.makeMove(1,2); }
                    break;
                case 6:
                    if (currentMarker == 1) { playerX.makeMove(2,0); }
                    else { playerO.makeMove(2,0); }
                    break;
                case 7:
                    if (currentMarker == 1) { playerX.makeMove(2,1); }
                    else { playerO.makeMove(2,1); }
                    break;
                case 8:
                    if (currentMarker == 1) { playerX.makeMove(2,2); }
                    else { playerO.makeMove(2,2); }
            }

        } else { console.log("Position is currently occupied!"); }

        checkWinner();
        checkDraw();
        toggleMarker();
        DisplayController.displayBoard();
    }

    const toggleMarker = () => {
        if (currentMarker == 1) { DisplayController.togglePlayer(2); }
        else { DisplayController.togglePlayer(1); }
    }

    const checkWinner = () => {
        if (playerO.getWinCheck()) {
            console.log("Player O wins!");
            winner = true;
            DisplayController.popupWinner(2);
        } else if (playerX.getWinCheck()) {
            console.log("Player X wins!");
            winner = true;
            DisplayController.popupWinner(1);
        }
    }

    const checkDraw = () => {
        if (playerMoves == 9 && !playerX.getWinCheck() && !playerO.getWinCheck()) {
            console.log("Draw!");
            DisplayController.popupWinner(0);
        }
    }

    return {getBoard, reset, changeMarker, placeMark};
})();

const DisplayController = (() => {

    const xBtn = document.getElementById("playerX");
    const oBtn = document.getElementById("playerO");
    const xPop = document.getElementById("playerXWin");
    const oPop = document.getElementById("playerOWin");
    const drawPop = document.getElementById("draw");

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
            oBtn.classList.remove("selected");
            xBtn.classList.add("selected");
            GameBoard.changeMarker(1);
        } else if (player == 2) {
            xBtn.classList.remove("selected");
            oBtn.classList.add("selected");
            GameBoard.changeMarker(2);
        }
    }

    const popupWinner = (winner) => {
        // winner: 1=X; 2=O; 0=draw;
        switch (winner) {
            case 0:
                drawPop.style.display = "block";
                break;
            case 1:
                xPop.style.display = "block";
                break;
            case 2:
                oPop.style.display = "block";
        }
    }

    const resetBoard = () => {
        drawPop.style.display = "none";        
        xPop.style.display = "none";
        oPop.style.display = "none";
        oBtn.classList.remove("selected");
        xBtn.classList.remove("selected");
    }

    return {displayBoard, togglePlayer, popupWinner, resetBoard};
})();

const Player = (() => {

    let winCheck = false;
    let rowsContainer = [0, 0, 0];
    let columnsContainer = [0, 0, 0];
    let diagonalContainer = [0, 0, 0];
    let oppositeDiagonalContainer = [0, 0, 0];

    const getWinCheck = () => winCheck;

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
            winCheck = true;
        }
        
        if (columnsContainer[column] == sizeOfBoard) {
            winCheck = true;
        }
        
        var sumForRegularDiagonalElements = 0;
        var sumForOppositeDiagonalElements = 0;
        
        for (let index in diagonalContainer) {
            sumForRegularDiagonalElements += diagonalContainer[index];
            sumForOppositeDiagonalElements += oppositeDiagonalContainer[index];
        }
        
        if (sumForRegularDiagonalElements == sizeOfBoard) {
            winCheck = true;
        }
        
        if (sumForOppositeDiagonalElements == sizeOfBoard) {
            winCheck = true;
        }
    }

    return {makeMove, getWinCheck}
});

GameBoard.reset();


