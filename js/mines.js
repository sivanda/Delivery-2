'use strict';


function getMines(board) {
    var mines = [];
    var length = gLevel.mines;
    var n = 0;
    while (n < length) {
        var i = getRandomIntInclusive(0, length - 1);
        var j = getRandomIntInclusive(0, length - 1);
        board[i][j].isMine = true;
        var elCell = { i, j };
        if (board[i][j] === mines[0]) n--;
        mines.push(board[i][j])
        n++;
        renderCell(elCell, MINE);
    }

    return mines;

}

function setMinesNegsCount(board) {
    for (var i = 0; i < board.length; i++) {
        for (var j = 0; j < board[0].length; j++) {
            var count = 0;
            for (var x = i - 1; x <= i + 1; x++) {
                if (x < 0 || x > board.length - 1) continue;
                for (var y = j - 1; y <= j + 1; y++) {
                    if (y < 0 || y > board[0].length - 1) continue;
                    if (x === i && y === j) continue;
                    if (board[x][y].isMine===true) {
                        count++;
                    }
                      board[i][j].minesAroundCount=count;
                      var elCell= { i, j };
                      if (!board[i][j].isMine==true){ 
                          renderCell(elCell, count);
                      }
                    }
                }
            }
        }
        
        console.log(board);

}









