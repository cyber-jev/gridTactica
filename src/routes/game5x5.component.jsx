import React from "react";
import { useState } from "react";
import Board5x5 from "../components/board5x5.component";
import "../App.css";

const Game5x5 = () => {
  const [history, setHistory] = useState([Array(25).fill(null)]);
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
      description = "#" + move;
    } else {
      description = "start";
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
    <div
      className={`m-auto bg-transparent w-max h-max  text-[#04638f] p-6 grid items-center justify-center`}
    >
      <div className="  overflow-aut">
        <Board5x5
          xIsNext={xIsNext}
          squares={currentSquares}
          onPlay={handlePlay}
        />
      </div>
      <div className="debug h-max">
        <h3>Go to</h3>
        <ol className="text-sm grid grid-cols-6 gap-1 w-max">{moves}</ol>
      </div>
    </div>
  );
};

export default Game5x5;
