import Board4x4 from "./board4x4.component";

const Nav = ({ onSelectBoardSize }) => {
  return (
    <div>
      <div>
        <select onChange={onSelectBoardSize}>
          <option value="4x4">4x4</option>
          <option value="5x5">5x5</option>
        </select>
      </div>
    </div>
  );
};

const [selectedBoardSize, setSelectedBoardSize] = useState("3x3");

const handleSelectBoardSize = (event) => {
  setSelectedBoardSize(event.target.value);
};

export let boardComponent;
if (selectedBoardSize === "3x3") {
  boardComponent = (
    <Board3x3 xIsNext={xIsNext} squares={currentSquares} onPlay={handlePlay} />
  );
} else if (selectedBoardSize === "4x4") {
  boardComponent = (
    <Board4x4 xIsNext={xIsNext} squares={currentSquares} onPlay={handlePlay} />
  );
} else if (selectedBoardSize === "5x5") {
  boardComponent = (
    <Board5x5 xIsNext={xIsNext} squares={currentSquares} onPlay={handlePlay} />
  );
}

export default Nav;
