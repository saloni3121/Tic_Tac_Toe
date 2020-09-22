import React, { useState } from 'react';
import Board from './Board';

function Game(){

    const [history, setHistory]=useState([Array(9).fill(null)]);
    const [stepNumber, setSetNumber] = useState(0);
    const [xIsNext, setXisNext] = useState(true);
    const winner = calculateWinner(history[stepNumber]);

    function calculateWinner(squares) {
        const lines = [
          [0, 1, 2],
          [3, 4, 5],
          [6, 7, 8],
          [0, 3, 6],
          [1, 4, 7],
          [2, 5, 8],
          [0, 4, 8],
          [2, 4, 6],
        ];
        for (let i = 0; i < lines.length; i++) {
          const [a, b, c] = lines[i];
           if (squares[a] && squares[a] === squares[b] && squares[a] === squares[c]) {
            return squares[a];
          }
        }
        return null;
      }

    const handleClick=(i) => {
        const timeInHistory = history.slice(0, stepNumber + 1);
        const current = timeInHistory[stepNumber];
        const squares = [...current];
        if(winner || squares[i]) return;
        squares[i] = xIsNext ? "X" : "O";
        setHistory([...timeInHistory, squares]);
	      setSetNumber(timeInHistory.length);
	      setXisNext(!xIsNext);
    }

    const jumpTo = step => {
      console.log("jump to");
        setSetNumber(step);
        setXisNext(step % 2 === 0);
    };

    const renderMoves=()=>(
        history.map((_step, move) => {
            const place = move ? `        Go to move#${move}` : '        GO TO START';
            return (
                <li key={move}>
                   <button onClick={() => jumpTo(move)}>{place}</button>
                </li>
            );
        })
    )
    return(
    <div>
    <div>
    <Board square={history[stepNumber]} onClick={handleClick} />
    </div>
    <div>
    <p> {winner ? "Winner: " + winner : "Next Player: " + (xIsNext ? "X" : "O")}</p>
    {renderMoves()}
    </div>
    </div>
    
    );
}

export default Game;