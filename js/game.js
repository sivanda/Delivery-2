'use strict';

const MINE = '*';
const EMPTY = '';
const FLAGE = 'F';

var gBoard;
var gLevel = {
    size: 4,
    mines: 2
};
var gGame = {
    isOn: false,
    shownCount: 0,
    markedCount: 0,
    secsPassed: 0
};

var gIntervalShow;

function inIt() {
    gBoard = buildBoard();
    renderBoard(gBoard, '.board-container');
    getMines(gBoard);
    gGame.isOn = true;
    setMinesNegsCount(gBoard);

}
console.table(buildBoard());
function buildBoard() {
    // TODO: bild a board to the model
    var board = createMat(gLevel.size, gLevel.size);
    for (var i = 0; i < board.length; i++) {
        for (var j = 0; j < board[0].length; j++) {
            board[i][j] = {
                minesAroundCount: 0,
                isShown: false,
                isMine: false,
                isMarked: false,
            }
        }
    }
    return board;
}

function renderBoard(board, selector) {
    var strHTML = '<table border="0"><tbody>';
    for (var i = 0; i < board.length; i++) {
        strHTML += '<tr>';
        for (var j = 0; j < board[0].length; j++) {
            var cell = board[i][j];
            var className = 'cell-' + i + '-' + j;
            strHTML += '<td onclick="cellClicked(' + i + ',' + j + ',this)"  class="' + className + '"> ' + cell + ' </td>';
        }
        strHTML += '</tr>';
    }
    strHTML += '</tbody></table>';
    var elContainer = document.querySelector(selector);
    elContainer.innerHTML = strHTML;
}


function cellClicked(i, j,elCell) {
    if (gBoard[i][j].isMarked === true || gBoard[i][j].isShown === true) return;
    else gBoard[i][j].isShown = true;
    var cell= { i, j };
    console.log(elCell);
    console.log(elCell.classList);
    elCell.classList.add('clicked');
    renderCell(cell, classList);
}

function cellMarked(elCell) {
    //TODO: Model: onright click mark a flag.

    //TODO: render to the dom.

}

function expandShown(board, elCell, i, j) {

    //TODO: When user clicks a cell with no mines around, we need to open not only that cell, but also its neighbors.
    // On first click- spred the mines.

    startTimer();
}


function checkGameOver() {
    //TODO: Game ends when all mines are marked, and all the other cells are shown.

    // TODO: msg: win or lose. 

}

