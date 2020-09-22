  
import React from 'react';
import './App.css';

function Square(props){
    return(
    <button onClick={props.onClick} className="squares">
        {props.value}
    </button>
    );
}

export default Square;