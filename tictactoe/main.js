// let restartGame = document.querySelector('.game_restart');
// let gameStatus = document.querySelector('.game_status');
// let gameActive = true;
// let currentPlayer = "X";
// let gameState = ["","","","","","","","","",];

// const winningMessage =() =>`Player ${currentPlayer} has won`;
// const drawMesage = () => `Game Ended in a draw`;
// const currentPlayerTurn = () => `I'ts ${currentPlayer} `;

// gameStatus.innerHTML = currentPlayerTurn();


// function handleCellPlayed(clickedCell, clickedCellIndex) {
//     gameState[clickedCellIndex] = currentPlayer;
//     clickedCell.innerHTML = currentPlayer;

// }

// function handlePlayerChange() {

// }

// function handleResultValidation() {

// }

// function handleCellClick(clickedCellEvent) {
//     const clickedCell = clickedCellEvent.target;

//     const clickedCellIndex = parseInt(clickedCell.getAttribute('data-cell-index'))

//     if(gameState[clickedCellIndex] !== "" || !gameActive) {
//         return;
//     }

//     handleCellPlayed(clickedCell, clickedCellIndex);
//     handleResultValidation();

// }

// function handleRestartGame() {

// }


// document.querySelectorAll('.cell').forEach(cell => cell.addEventListener('click', handleCellClick));
// restartGame.addEventListener('click', handleRestartGame)
// const winningConditions = [
//     [0, 1, 2],
//     [3, 4, 5],
//     [6, 7, 8],
//     [0, 3, 6],
//     [1, 4, 7],
//     [2, 5, 8],
//     [0, 4, 8],
//     [2, 4, 6]
// ]



// restartGame.addEventListener('click', gameStart)



// function gameStart() {

// }



// var origBoard;
// const huPlayer = '0';
// const aiPlayer = 'X';
// const winningConditions = [
//         [0, 1, 2],
//         [3, 4, 5],
//         [6, 7, 8],
//         [0, 3, 6],
//         [1, 4, 7],
//         [2, 5, 8],
//         [0, 4, 8],
//         [2, 4, 6]
//     ]
// const cells = document.querySelector('.celle');
// startGame();

// function startGame() {
//     document.querySelector(".game_status").style.display = "";
//     origBoard = Array.from(Array(9).keys());
//     // console.log(origBoard)
//     for (var i = 0; i < cells.length; i++) {
//         cells[i].innerText = '';
//         cells[i].style.removeProperty('background-color');
//         cells[i].addEventListener('click', turnClick, false)
//     }
// }
    
//  function turnClick(square) {
//     console.log(square);
// }



document.addEventListener('DOMContentLoaded', () => {
    const squares = document.querySelectorAll('.grid div')
    const playerDisplay = document.querySelector('#player')
    
    let currentPlayer = 'playerX';

    squares.forEach(square => {
        square.addEventListener('click', clickOutcome)
    })

    function clickOutcome(e) {
        // alert('clicked')
        const squareArray = Array.from(squares);
        const index = squareArray.indexOf(e.target)
        // console.log(index)
        playerDisplay.innerHTML = currentPlayer

        if(currentPlayer === 'playerX') {
            squares[index].classList.add('playerX')
            currentPlayer = 'playerO'
        } else {
            squares[index].classList.add('playerO')
            currentPlayer = 'playerX'
            

        }

    }
    
})