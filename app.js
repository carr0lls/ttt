function TicTacToe() {
  var game = this;
  
  game.addPiece = function(position) {
    // If game has winner, return false
    if (game.getGameWinner())
      return false;
    // Add current player's piece to given position
    if (game.board[position] === '') {
      game.board[position] = game.currentPlayer;
      // Update current player
      game.currentPlayer = (game.currentPlayer === 1) ? 2 : 1;
      _isWinningMove(position);
      return true;
    }
    return false;
  }
  
  game.getBoard = function() {
    return game.board;
  }
  
  game.getGameWinner = function() {
    return game.winner;
  }

  game.getWinnerPieces = function() {
    return game.winningPieces;
  }
  
  game.reset = function() {
    _init();
  }

  function _init() {
    // Clear board and reset board pieces
    _resetBoard();
    // Winner go first, otherwise default player 1 go first
    game.currentPlayer = (game.winner === 2) ? 2 : 1;
    // Reset game winner
    game.winner = 0;
    game.winningPieces = [];
  }
  
  function _resetBoard() {
    // Clear board
    game.board = ['', '', '',
                  '', '', '',
                  '', '', ''];
  }  

  function _isWinningMove(position) {
    console.log('check winning move');
  }
  
  _init();
  
  return game;
}

var game = new TicTacToe();

var gridPieces = document.getElementsByClassName('piece');

function renderBoard(board) {
  for (var i=0; i < board.length; i++) {
    gridPieces[i].dataset.piece = board[i];
  }
}

function setGridIndex(index) {
  return function() {
    game.addPiece(index);
    renderBoard(game.getBoard());
  }
}

for (var i=0; i < gridPieces.length; i++) {
  gridPieces[i].addEventListener('click', setGridIndex(i));
}

renderBoard(game.getBoard());