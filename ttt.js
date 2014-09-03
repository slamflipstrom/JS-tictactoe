window.onload = function(){
  
  // Collection of all squares on the board.
  var squares = document.getElementsByTagName('td');
  
  var turn = "X";
  
  function add_mark(){
    this.innerHTML = turn;
    this.className="X";
    determineWinner();
  }
  
  function determineWinner(){
    console.log("GGGGGGGGGG");
    var array = document.getElementsByTagName('td');
    
    if (array[0] == turn && array[1]  == turn && array[2] == turn|| 
          array[3]  == turn && array[4]  == turn && array[5] == turn || 
          array[6]  == turn && array[7]  == turn && array[8] == turn || 
          array[0]  == turn && array[3]  == turn && array[6] == turn || 
          array[1]  == turn && array[4]  == turn && array[7] == turn || 
          array[2]  == turn && array[5]  == turn && array[8] == turn || 
          array[0]  == turn && array[4]  == turn && array[8] == turn || 
          array[2]  == turn && array[4]  == turn && array[6] == turn){ 
  
            alert("WINNER");
     }                                              
   }  
  
  for(var i = 0; i < squares.length; i++) {
    // When you click a square, runs the `add_mark` method.
    squares[i].addEventListener("click", add_mark);
  }
  
  // determineWinner;

}