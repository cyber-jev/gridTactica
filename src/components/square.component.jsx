const Square = ({ value, onSquareClick }) => {
  return (
    <button
      className="square bg-[#2c2c2c] text-2xl font-bold  w-[50px] h-[50px] float-right border border-[#999] shadow"
      onClick={onSquareClick}
    >
      {value}
    </button>
  );
};

export default Square;
