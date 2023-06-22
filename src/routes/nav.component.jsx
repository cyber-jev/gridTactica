import { useState, useEffect } from "react";
import { Outlet, NavLink } from "react-router-dom";

const Navigation = () => {
  const [showRules, setShowRules] = useState(false);

  useEffect(() => {
    const handleResize = () => {
      if (window.innerWidth >= 768 && !showRules) {
        setShowRules(true);
      } else if (window.innerWidth < 768 && showRules) {
        setShowRules(false);
      }
    };

    handleResize(); // Check initial width on component mount
    window.addEventListener("resize", handleResize);
    return () => {
      window.removeEventListener("resize", handleResize);
    };
  }, []);

  const handleToggleRules = () => {
    setShowRules(!showRules);
  };

  return (
    <div className="w-full  ">
      <div className="text-white text-xl sticky top-0 z-50 p-5 flex items-center justify-between gap-3 w-full bg-[#202020] lg:text-2xl">
        <div>
          <NavLink className="mr-3 p-1 hover:text-[#9c3c7c]" to="/" exact>
            3x3
          </NavLink>
          <NavLink className="mr-3 hover:text-[#9c3c7c]" to="/4x4">
            4x4
          </NavLink>
          <NavLink className="mr-3 hover:text-[#9c3c7c]" to="/5x5">
            5x5
          </NavLink>
        </div>
        <div className="relative">
          <button
            className="border px-1 rounded text-[#9c3c7c] font-extrabol bg-black "
            onClick={handleToggleRules}
          >
            Rules
          </button>
          {showRules && (
            <p className="absolute p-4 top-[2.3rem] -left-[10rem] text-lg text-center w-[20ch] bg-black lg:top-[2.5rem]">
              If the board is filled and there is no winner{" "}
              <span className="text-[#9c3c7c] font-bold"> (tie)</span>, Next
              Player gets to choose to go back to any move above move{" "}
              <span className="text-[#9c3c7c] font-bold"> #3</span>
            </p>
          )}
        </div>
      </div>
      <Outlet />
    </div>
  );
};

export default Navigation;
