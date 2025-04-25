import React from "react";
import { Link, NavLink } from "react-router";

const Navbar = () => {
  return (
    <div className="shadow-sm py-4">
      <div className="container mx-auto flex justify-between items-center">
        <h2 className="lg:text-3xl font-bold">
          <span className="text-rose-600">Reading</span> Room
        </h2>
        <div>
          <ul className="hidden lg:flex gap-10 items-center">
            <NavLink
              className={({ isActive }) =>
                isActive
                  ? "text-[#23BE0A] p-2 font-semibold border rounded-xl border-[#23BE0A] rotate-y-360 duration-900"
                  : "text-black"
              }
              to="/"
            >
              Home
            </NavLink>
            <NavLink
              className={({ isActive }) =>
                isActive
                  ? "text-[#23BE0A] p-2 font-semibold border rounded-xl border-[#23BE0A] rotate-y-360 duration-900"
                  : "text-black"
              }
              to="/listedbook"
            >
              Listed Book
            </NavLink>
            <NavLink
              className={({ isActive }) =>
                isActive
                  ? "text-[#23BE0A] p-2 font-semibold border rounded-xl border-[#23BE0A] rotate-y-360 duration-900"
                  : "text-black"
              }
              to="/readpage"
            >
              Pages to Read
            </NavLink>
          </ul>
        </div>
        <div className="flex gap-3">
          <button className="btn bg-[#23BE0A] text-white rounded-xl p-5">
            <Link>Sign In</Link>
          </button>
          <button className="btn bg-[#59C6D2] text-white rounded-xl p-5">
            <Link>Sign Up</Link>
          </button>
        </div>
      </div>
    </div>
  );
};

export default Navbar;
