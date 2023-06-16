import React from "react";
import { useState } from "react";
import Board3x3 from "./board3x3.component";
import Board4x4 from "./board4x4.component";
import Board5x5 from "./board5x5.component";
import "../App.css";

const Game = () => {
  const [history, setHistory] = useState([Array(9).fill(null)]);
  const [currentMove, setCurrentMove] = useState(0);
  const xIsNext = currentMove % 2 === 0;
  const currentSquares = history[currentMove];

  const handlePlay = (nextSquares) => {
    const nextHistory = [...history.slice(0, currentMove + 1), nextSquares];
    setHistory(nextHistory);
    setCurrentMove(nextHistory.length - 1);
  };

  const jumpTo = (nextMove) => {
    setCurrentMove(nextMove);
  };

  const moves = history.map((squares, move) => {
    let description;
    if (move > 0) {
      description = "move #" + move;
    } else {
      description = "game start";
    }

    return (
      <li
        key={move}
        className=" text-cyan-50 bg-[#4a4a4a] px-0.5 mb-0.5 rounded"
      >
        <button onClick={() => jumpTo(move)} className="">
          {description}
        </button>
      </li>
    );
  });

  return (
    <div className={`game bg-transparent m-auto text-[#04638f] p-2 flex`}>
      <div className="game-board m-auto mr-3 overflow-auto ">
        <Board5x5
          xIsNext={xIsNext}
          squares={currentSquares}
          onPlay={handlePlay}
          // className={xIsNext == true ? "text-[#04638f]" : "text-[#a2333a]"}
        />
      </div>
      <div className="">
        <h3>Go to</h3>
        <ol className="text-sm">{moves}</ol>
      </div>
    </div>
  );
};

export default Game;
