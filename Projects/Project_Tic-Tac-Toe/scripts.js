const gameBoard = (() => {
    let boardArray = [1, 2, 1, 2, 0, 2, 1, 2, 1]; // 0 = null, 1 = X, 2 = O
    const getBoard = () => boardArray;

    return {getBoard};
})();

const displayController = (() => {
    const DisplayBoard = (gameboard) => {
        for (let element of gameboard.getBoard) {
            
        }
    }
})()

