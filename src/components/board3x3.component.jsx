import React from "react";
import { X, O } from "./players.component";
import BoardRows from "./boardRows.component";

const Board3x3 = ({ xIsNext, squares, onPlay }) => {
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
    status = "Winner: " + (winner === "X" || winner === "c" ? "X" : "0");
  } else {
    status = "Next player: " + (xIsNext ? "X" : "0");
  }

  return (
    <div>
      <div className="text-xl font-bold text-[#9c3c7c] py-3">{status}</div>
      <BoardRows squares={squares} handleClick={handleClick} matrix={3} />
    </div>
  );
};
const calculateWinner = (squares) => {
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

    if (squares[a] !== null && squares[b] !== null && squares[c] !== null) {
      if (
        squares[a].key &&
        squares[a].key === squares[b].key &&
        squares[a].key === squares[c].key
      ) {
        return squares[a].key;
      }
    }
  }

  return null;
};

export default Board3x3;
