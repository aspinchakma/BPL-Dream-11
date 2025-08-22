import { Link } from "react-router-dom";

const Header = ({ coin }) => {
  return (
    <div className="backdrop-blur-lg py-6 sticky top-0">
      <div className="w-[95%] lg:w-[80%] mx-auto flex justify-between items-center">
        <div className="flex items-center">
          <div className="dropdown">
            <div tabIndex={0} role="button" className="btn btn-ghost lg:hidden">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                className="h-5 w-5"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth="2"
                  d="M4 6h16M4 12h8m-8 6h16"
                />
              </svg>
            </div>
            <ul
              tabIndex={0}
              className="menu menu-sm dropdown-content bg-base-100 rounded-box z-[1] mt-3 w-52 p-2 shadow"
            >
              <Link className=" mx-5 text-[18px] text-[#595959]" to="/">
                Home
              </Link>
              <Link className=" mx-5 text-[18px] text-[#595959]" to="/fixture">
                Fixture
              </Link>
              <Link className=" mx-5 text-[18px] text-[#595959]" to="/teams">
                Teams
              </Link>
              <Link
                className=" mx-5 text-[18px] text-[#595959]"
                to="/schedules"
              >
                Schedules
              </Link>
            </ul>
          </div>
          <img
            className="w-[73px]"
            src="https://i.ibb.co.com/LXrbT5Z6/logo.png"
            alt=""
          />
        </div>
        <div className="flex items-center">
          <div className="navbar-center hidden lg:flex">
            <Link className=" mx-5 text-[18px] text-[#595959]" to="/">
              Home
            </Link>
            <Link className=" mx-5 text-[18px] text-[#595959]" to="/fixture">
              Fixture
            </Link>
            <Link className=" mx-5 text-[18px] text-[#595959]" to="/teams">
              Teams
            </Link>
            <Link className=" mx-5 text-[18px] text-[#595959]" to="/schedules">
              Schedules
            </Link>
          </div>
          <div className="flex items-center border-2 border-[#e7e7e7] rounded-xl py-4 px-5 ">
            <h3 className="mr-3 text-[18px] text-[#595959]">
              <span className="mr-2">{coin}</span>Coin{" "}
            </h3>
            <img
              className="w-5 h-5"
              src="https://i.ibb.co.com/RGvmLg8K/dollar-1.png"
              alt=""
            />
          </div>
        </div>
      </div>
    </div>
  );
};

export default Header;
