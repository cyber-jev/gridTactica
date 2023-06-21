import React from "react";
import { useState } from "react";
import Board4x4 from "../components/board4x4.component";
import "../App.css";

const Game4x4 = () => {
  const [history, setHistory] = useState([Array(16).fill(null)]);
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
        className="text-cyan-50 text-base text-center bg-[#4a4a4a] p-0.5 mb-0.5 rounded"
      >
        <button onClick={() => jumpTo(move)} className="">
          {description}
        </button>
      </li>
    );
  });

  return (
    // <div className={`game bg-transparent m-auto text-[#04638f] p-2 flex`}>
    //   <div className="game-board m-auto mr-3 overflow-auto">
    //     <Board4x4
    //       xIsNext={xIsNext}
    //       squares={currentSquares}
    //       onPlay={handlePlay}
    //     />
    //   </div>
    //   <div className="">
    //     <h3>Go to</h3>
    //     <ol className="text-sm">{moves}</ol>
    //   </div>
    // </div>
    <div
      className={`m-auto w-max h-max  text-[#04638f] p-6 grid items-center justify-center`}
    >
      <div className="  overflow-aut">
        <Board4x4
          xIsNext={xIsNext}
          squares={currentSquares}
          onPlay={handlePlay}
        />
      </div>
      <div className="m-auto relative py-2 px-[1.5rem] lg:px-[1.5rem]">
        <div className="absolute inset-0 backdrop-filter backdrop-blur-xl bg-opacity-50"></div>
        <h3 className="relative z-10 py-2 font-bold text-[#9c3c7c] text-xl">
          Go to move
        </h3>
        <ol className="text-sm grid grid-cols-5 gap-1 w-max relative z-10 lg:grid-cols-7">
          {moves}
        </ol>
      </div>
    </div>
  );
};

export default Game4x4;
