import React from "react";
import Square from "./square.component";
import { X, O } from "./players.component";

const Board4x4 = ({ xIsNext, squares, onPlay }) => {
  const handleClick = (i) => {
    if (squares[i] || calculateWinner(squares)) return;
    const nextSquares = squares.slice();
    xIsNext ? (nextSquares[i] = <X />) : (nextSquares[i] = <O />);
    onPlay(nextSquares);
  };

  const winner = calculateWinner(squares);
  let status;
  if (winner) {
    // ? I had a glitch from vercel where winner 'X' shows as "c" and "0" shows as "f"
    status = "Winner: " + (winner === "X" || winner === "c" ? "X" : "0");
  } else {
    status = "Next player: " + (xIsNext ? "X" : "0");
  }

  return (
    <div>
      <div>{status}</div>
      <div>
        <Square value={squares[0]} onSquareClick={() => handleClick(0)} />
        <Square value={squares[1]} onSquareClick={() => handleClick(1)} />
        <Square value={squares[2]} onSquareClick={() => handleClick(2)} />
        <Square value={squares[3]} onSquareClick={() => handleClick(3)} />
      </div>

      <div>
        <Square value={squares[4]} onSquareClick={() => handleClick(4)} />
        <Square value={squares[5]} onSquareClick={() => handleClick(5)} />
        <Square value={squares[6]} onSquareClick={() => handleClick(6)} />
        <Square value={squares[7]} onSquareClick={() => handleClick(7)} />
      </div>

      <div>
        <Square value={squares[8]} onSquareClick={() => handleClick(8)} />
        <Square value={squares[9]} onSquareClick={() => handleClick(9)} />
        <Square value={squares[10]} onSquareClick={() => handleClick(10)} />
        <Square value={squares[11]} onSquareClick={() => handleClick(11)} />
      </div>

      <div>
        <Square value={squares[12]} onSquareClick={() => handleClick(12)} />
        <Square value={squares[13]} onSquareClick={() => handleClick(13)} />
        <Square value={squares[14]} onSquareClick={() => handleClick(14)} />
        <Square value={squares[15]} onSquareClick={() => handleClick(15)} />
      </div>
    </div>
  );
};

const calculateWinner = (squares) => {
  const lines = [
    [0, 1, 2, 3],
    [4, 5, 6, 7],
    [8, 9, 10, 11],
    [12, 13, 14, 15],

    [0, 4, 8, 12],
    [1, 5, 9, 13],
    [2, 6, 10, 14],
    [3, 7, 11, 15],

    [0, 5, 10, 15],
    [3, 6, 9, 12],
  ];

  for (let i = 0; i < lines.length; i++) {
    const [a, b, c, d] = lines[i];

    console.log(squares[a]);
    // ? because we render a react element inside our square we would need check if the square is not null
    // ? then we access the name value from our react element object like so
    if (
      squares[a] !== null &&
      squares[b] !== null &&
      squares[c] !== null &&
      squares[d] !== null
    ) {
      if (
        squares[a].type.name &&
        squares[a].type.name === squares[b].type.name &&
        squares[a].type.name === squares[c].type.name &&
        squares[a].type.name === squares[d].type.name
      ) {
        return squares[a].type.name;
      }
    }
  }

  return null;
};

export default Board4x4;
