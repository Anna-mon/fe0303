function Board(params) {
 
    this.board = {
        0: 1,
        1: 2,
        2: 3,
        3: 4,
        4: 5, 
        5: 6,
        6: 7,
        7: 8,
        8: 9,
        9: 10,
        10: 11,
        11: 12,
        12: 13,
        13: 14,
        14: 15,
        15: "empty"
    }
      

      this.board = converArrayToBoard ( Board.START_BOARD.sort(() => Math.random() - 0.5) ); //это сортировка//
}


Board.START_BOARD = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15, "empty"];
Board.prototype.converArrayToBoard = function converArrayToBoard( boardArrey ) {
    return boardArrey.reduce(
        (board, cell, idx) => {     //cell -- это ячейка//
            board [idx] = cell;
            
            return board;
        },
        {}
    );    
        
};

Board.prototype.render = function render(params) {
    console.log("--- board ---");
    for (let row=0; row < 4; row++) {
        let rowStr = " ";
        for (let col=0; col < 4; col++) {
            const el = this.board[col + row*4];

            if ( el === 'empty') {
                rowStr += 'e';
            } else {
                rowStr += el.toString().padStart(2, '0') + ' ';
        }
        console.log(rowStr);
    }
    console.log("--- board ---");
};
Board.prototype.canMove = function canMove( number ) {
    if ( number === "empty") {
        return ;
    }
     const currentIndex = this.getIndex( number ),
          siblingsItems = this.getSiblingsIndex ( currentIndex ),
          possibleMove =  ["LEFT", "RIGHT", "TOP", "BOTTOM"]
              .find(direction => siblingsItems[direction] !== null && this.board[ siblingsItems [direction] ] === "empty")    
           
     return possibleMove;         
}
Board.prototype.getSiblingsIndex = function getSiblingsIndex( currentIndex ) {
    const leftItemIndex = [0, 4, 8, 12].includes(currentIndex) ? null : currentIndex - 1,
       rightItemIndex = currentIndex % 4 === 3 ? null : currentIndex + 1,
       topItemIndex = currentIndex < 4 ? null : currentIndex - 4,
       bottomItemIndex = currentIndex > 11 ? null : currentIndex + 4;
    
    return {
    
        LEFT: leftItemIndex,
        RIGHT: rightItemIndex,
        TOP: topItemIndex,
        BOTTOM: bottomItemIndex
    }   

}
Board.prototype.getIndex = function getIndex( number ) {
    for (let index = 0; index < 16; index++) {
        if (this.board[index] === number) {
            return index;
        }
        
    }
}





const board = new Board ()

console.log( board );

board.render();
 
console.log(
    Board.START_BOARD.map(
        number => ({
            number,
            index: board.getIndex(number),
            canMove: board.canMove(number)
        })
    )

);



console.log ( 5,board.getIndex (5) );
console.log ( 15, board.getIndex (15) );
console.log ( 3, board.getIndex (3) );
}

