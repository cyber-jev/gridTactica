import { Outlet, Link } from "react-router-dom";

const Navigation = () => {
  return (
    <div className=" w-full">
      <div className="text-white p-5  flex gap-3 w-full h-[30px] ">
        <Link className="" to="/">
          3x3
        </Link>
        <Link className="" to="/4x4">
          4x4
        </Link>
        <Link className="" to="/5x5">
          5x5
        </Link>
      </div>
      <Outlet />
    </div>
  );
};

export default Navigation;
