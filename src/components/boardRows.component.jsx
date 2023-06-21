import React from "react";
import Square from "./square.component";

const BoardRows = ({ squares, handleClick, matrix }) => {
  const renderSquare = (i) => {
    return <Square value={squares[i]} onSquareClick={() => handleClick(i)} />;
  };

  const rows = [];
  for (let row = 0; row < matrix; row++) {
    const squares = [];
    for (let col = 0; col < matrix; col++) {
      const squareIndex = row * matrix + col;
      squares.push(renderSquare(squareIndex));
    }
    rows.push(<div key={row}>{squares}</div>);
  }

  return <>{rows}</>;
};

export default BoardRows;
