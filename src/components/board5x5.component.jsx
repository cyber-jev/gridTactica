import React from "react";
import BoardRows from "./boardRows.component";
import { X, O } from "./players.component";

const Board5x5 = ({ xIsNext, squares, onPlay }) => {
  const handleClick = (i) => {
    if (squares[i] || calculateWinner(squares)) return;
    const nextSquares = squares.slice();
    xIsNext
      ? (nextSquares[i] = <X key={"X"} />)
      : (nextSquares[i] = <O key={"0"} />);
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
      <div className="text-xl font-bold text-[#9c3c7c] py-3">{status}</div>
      <BoardRows squares={squares} handleClick={handleClick} matrix={5} />
    </div>
  );
};

const calculateWinner = (squares) => {
  const lines = [
    [0, 1, 2, 3, 4],
    [5, 6, 7, 8, 9],
    [10, 11, 12, 13, 14],
    [15, 16, 17, 18, 19],
    [20, 21, 22, 23, 24],

    [0, 5, 10, 15, 20],
    [1, 6, 11, 16, 21],
    [2, 7, 12, 17, 22],
    [3, 8, 13, 18, 23],
    [4, 9, 14, 19, 24],

    [0, 6, 12, 18, 24],
    [4, 8, 12, 16, 20],
  ];

  for (let i = 0; i < lines.length; i++) {
    const [a, b, c, d, e] = lines[i];

    if (
      squares[a] !== null &&
      squares[b] !== null &&
      squares[c] !== null &&
      squares[d] !== null &&
      squares[e] !== null
    ) {
      if (
        squares[a].key &&
        squares[a].key === squares[b].key &&
        squares[a].key === squares[c].key &&
        squares[a].key === squares[d].key &&
        squares[a].key === squares[e].key
      ) {
        return squares[a].key;
      }
    }
  }

  return null;
};

export default Board5x5;
