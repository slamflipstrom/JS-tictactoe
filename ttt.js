window.onload = function(){
  
  // Collection of all squares on the board.
  var squares = document.getElementsByTagName('td');
  
  var turn = "X";
  
  function add_mark(){
    this.innerHTML = turn;
    this.setAttribute("data-player","X")
  }
  
  for(var i = 0; i < squares.length; i++) {
    // When you click a square, runs the `add_mark` method.
    squares[i].addEventListener("click", add_mark);
  }

}