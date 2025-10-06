import React from "react";

const Header = () => {
  const List = (
    <>
      <button className="m-2 btn bg-green-600 text-neutral-50">Home</button>
      <button className="m-2 btn bg-green-600 text-neutral-50">
        Listed Books
      </button>
      <button className="m-2 btn bg-green-600 text-neutral-50">
        Pages to Read
      </button>
    </>
  );
  return (
    <div className="navbar bg-base-100 shadow-sm">
      <div className="navbar-start">
        <div className="dropdown">
          <div tabIndex={0} role="button" className="btn btn-ghost lg:hidden">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              className="h-5 w-5"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
            >
              {" "}
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth="2"
                d="M4 6h16M4 12h8m-8 6h16"
              />{" "}
            </svg>
          </div>
          <ul
            tabIndex={0}
            className="menu menu-sm dropdown-content bg-base-100 rounded-box z-1 mt-3 w-52 p-2 shadow"
          >
            {List}
          </ul>
        </div>
        <a className="btn btn-ghost text-xl">BookPoka</a>
      </div>
      <div className="navbar-center hidden lg:flex">
        <ul className="menu menu-horizontal px-1">{List}</ul>
      </div>
      <div className="navbar-end">
        <a className="btn mx-5 bg-green-600 text-neutral-50">Sign In</a>
        <a className="btn bg-green-600 text-neutral-50">Sign Up</a>
      </div>
    </div>
  );
};

export default Header;
