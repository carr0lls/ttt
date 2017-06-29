function TicTacToe() {
  var game = this;
  
  game.addPiece = function(col, row) {
    // If game has winner, return false
    if (game.getGameWinner())
      return false;
    // Alternate current player's piece  
    var piece = (game.currentPlayer === 1) ? 2 : 1;
    // Add current player's piece to col at the lowest empty row
    if (game.board[col][row] === 0) {
      game.board[col][row] = piece;
      // Update current player
      game.currentPlayer = piece;
      _isWinningMove(col, row);
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
  
  game.reset = function() {
    _init();
  }

  function _init() {
    // Clear board and reset board pieces
    _resetBoard();
    // Winner go first, otherwise default player 1 go first
    game.currentPlayer = (game.winner === 2) ? 1 : 2;
    // Reset game winner
    game.winner = 0;
  }
  
  function _resetBoard() {
    // Clear board
    game.board = [[0,0,0],
                  [0,0,0],
                  [0,0,0]];
  }  

  function _isWinningMove(col, row) {
    
  }
  
  _init();
  
  return game;
}

var game = new TicTacToe();
