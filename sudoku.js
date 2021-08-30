var board = [
    [0, 0, 0, 2, 6, 0, 7, 0, 1],
    [6, 8, 0, 0, 7, 0, 0, 9, 0],
    [1, 9, 0, 0, 0, 4, 5, 0, 0],
    [8, 2, 0, 1, 0, 0, 0, 4, 0],
    [0, 0, 4, 6, 0, 2, 9, 0, 0],
    [0, 5, 0, 0, 0, 3, 0, 2, 8],
    [0, 0, 9, 3, 0, 0, 0, 7, 4],
    [0, 4, 0, 0, 5, 0, 0, 3, 6],
    [7, 0, 3, 0, 1, 8, 0, 0, 0],
];

function firstRow(board){
    let present = [];
    for(var i = 0; i < board.length; i++){
        if(board[i] !== 0)
            present.push(board[i]);   
    }
    let possible = [1, 2, 3, 4, 5, 6, 7, 8, 9];
    possible = possible.filter((e) => {
       return present.indexOf(e) < 0;})
        //console.log(possible);
    for(var j = 0; j < board.length; j++){
        if(board[j] === 0){
        board[j] = possible[0];
        possible.shift();
        }
    }
    return board;
}
  
  board.forEach((board) => {
    board.forEach((subArray) => {
        return subArray;
        
    });
    console.log(firstRow(board));
});