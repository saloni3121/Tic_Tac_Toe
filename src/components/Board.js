import React from 'react';
import Square from './Square';
import './App.css';

function Board({square, onClick}){
    return(
        <div className="board">
        <div>
            <Square  value={square[0]} onClick={()=> onClick(0)}/>
            <Square  value={square[1]} onClick={()=> onClick(1)}/>
            <Square  value={square[2]} onClick={()=> onClick(2)}/>
        </div>
        <div>
            <Square  value={square[3]} onClick={()=> onClick(3)}/>
            <Square  value={square[4]} onClick={()=> onClick(4)}/>
            <Square  value={square[5]} onClick={()=> onClick(5)}/>
        </div>
        <div>
            <Square  value={square[6]} onClick={()=> onClick(6)}/>
            <Square  value={square[7]} onClick={()=> onClick(7)}/>
            <Square  value={square[8]} onClick={()=> onClick(8)}/>
        </div>
        </div>
    )
}

export default Board;