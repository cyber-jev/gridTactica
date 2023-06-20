import { Fragment } from "react";
import { Outlet, Link } from "react-router-dom";

const Navigation = () => {
  return (
    <div>
      <div className="text-white  flex gap-3 w-full h-[30px] debug">
        <Link className="" to="/">
          3x3
        </Link>
        <Link className="nav-link" to="/4x4">
          4x4
        </Link>
        <Link className="nav-link" to="/5x5">
          5x5
        </Link>
      </div>
      <Outlet />
    </div>
  );
};

export default Navigation;
