function TicTacToe() {
  var game = this;
  
  game.addPiece = function(col, row) {

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
