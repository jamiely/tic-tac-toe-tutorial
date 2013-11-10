// 1 2 3
// 4 5 6
// 7 8 9

function hasSomeoneWon(myBoard) {
   // 0 1 2
   // 3 4 5
   // 6 7 8
    // horizontal checks
    if(myBoard[0] != '_' && myBoard[0] == myBoard[1] &&
       myBoard[1] == myBoard[2]) return true;
    if(myBoard[3] != '_' && myBoard[3] == myBoard[4] &&
       myBoard[4] == myBoard[5]) return true;
    if(myBoard[6] != '_' && myBoard[6] == myBoard[7] &&
       myBoard[7] == myBoard[8]) return true;
    // vertical checks    
    if(myBoard[0] != '_' && myBoard[0] == myBoard[3] &&
       myBoard[3] == myBoard[6]) return true;
    if(myBoard[1] != '_' && myBoard[1] == myBoard[4] &&
       myBoard[4] == myBoard[7]) return true;
    if(myBoard[2] != '_' && myBoard[2] == myBoard[5] &&
       myBoard[5] == myBoard[8]) return true;
    // diagonal checks
    if(myBoard[0] != '_' && myBoard[0] == myBoard[4] &&
       myBoard[4] == myBoard[8]) return true;
    if(myBoard[2] != '_' && myBoard[2] == myBoard[4] &&
       myBoard[4] == myBoard[6]) return true;
    
    return false;
}

function message(msg) {
    document.getElementById('messages').innerHTML = msg;
}

var board = new Array('_', '_', '_',
                      '_', '_', '_',
                      '_', '_', '_');
var currentPlayer = 'X';
var boardString = "";
var someoneWon = false;

var counter = 0;

function step(answer) {
    var numAnswer = parseInt(answer);
    
    if(isNaN(numAnswer)) message("The position you entered is not a number");
    else if(numAnswer < 1) message("The position you entered is too low.");
    else if(numAnswer > 9) message("The position you entered is too high.");
    else if(board[numAnswer-1] != '_') message("The position you entered has already been taken.");
    else {        
        // the number is valid
        board[numAnswer - 1] = currentPlayer;
        
        if(currentPlayer == 'X') {
            currentPlayer = 'O';
        } else {
            currentPlayer = 'X';
        }
        
        counter ++;
        someoneWon = hasSomeoneWon(board);
    }
    
    renderHtmlBoard();
    
    if(someoneWon) message("Someone won.");
    else if(counter == 9) message("You ran out of moves.");
}

function renderHtmlBoard() {
    var board2 = document.getElementById('board2');
    var cells = board2.getElementsByClassName('cell');
    if(cells.length != 9) alert('Problem, there are too many cells');
    for(var i = 0; i < cells.length; i ++) {
        if(board[i] == '_') {
            cells[i].innerHTML = "";
        } else {
            cells[i].innerHTML = board[i];
        }
    }
}

function onMoveClick() {
    var value = document.getElementById('answer').value;
    step(value);
    document.getElementById('answer').value = '';
    document.getElementById('currentPlayer').innerHTML = "Current player is: " + currentPlayer;
}

document.getElementById('btnMove').addEventListener('click', onMoveClick);

//while(counter < 9 && !someoneWon) {
//    var answer = prompt(boardString + "\nWhich position would you like to play (1-9)?")
    
//}

