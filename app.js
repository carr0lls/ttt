function TicTacToe() {
  var game = this;
  var winningCombos = [
    // Horizontals
    [0, 3, 6],
    [1, 4, 7],
    [2, 5, 8],
    // Verticals
    [0, 1, 2],
    [3, 4, 5],
    [6, 7, 8],
    // Diagonals
    [0, 4, 8],
    [2, 4, 6]
  ];
  
  game.addPiece = function(position) {
    // If game has winner, return false
    if (game.getGameWinner())
      return false;
    // Add current player's piece to given position
    if (game.board[position] === '') {
      game.board[position] = game.currentPlayer;
      _isWinningMove(game.currentPlayer);
      // Update current player
      game.currentPlayer = (game.currentPlayer === 1) ? 2 : 1;
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

  function _isWinningMove(player) {
    // check winner logic
    for (let combo of winningCombos) {
      if (game.board[combo[0]] === player && 
          game.board[combo[1]] === player && 
          game.board[combo[2]] === player) {
        game.winner = game.currentPlayer;
        game.winningPieces = combo;
        return true;
      }
    }
    return false;
  }
  
  _init();
  
  return game;
}

var game = new TicTacToe();

function App(game) {
  var gridPieces = document.getElementsByClassName('piece');

  function renderBoard(board) {
    for (var i=0; i < board.length; i++) {
      gridPieces[i].dataset.piece = board[i];
    }
  }

  function setGridIndex(index) {
    return function() {
      if (game.addPiece(index))
        renderBoard(game.getBoard());
      else
        alert('cannot add piece here, try another position');
    }
  }

  for (var i=0; i < gridPieces.length; i++) {
    gridPieces[i].addEventListener('click', setGridIndex(i));
  }

  function bindEventListeners() {
    document.getElementById('reset').addEventListener('click', function() {
      reset();
    });
  }

  function init() {
    renderBoard(game.getBoard());
    bindEventListeners();
  }

  function reset() {
    game.reset();
    init();
  }

  init();
}

var app = new App(game);