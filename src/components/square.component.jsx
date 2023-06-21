const Square = ({ value, onSquareClick }) => {
  return (
    <button
      className="square bg-[#2c2c2c] text-3xl font-bold  w-[50px] h-[50px] float-right border border-[#999] shadow hover:scale-105 overflow-hidden lg:text-4xl lg:w-[80px] lg:h-[80px]"
      onClick={onSquareClick}
    >
      {value}
    </button>
  );
};

export default Square;
