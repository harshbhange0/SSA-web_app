import React, { useEffect, useState } from "react";
import Logo from "../assets/logo.svg";
import LogoDark from "../assets/logoDark.svg";
import { Register } from "../pages/auth";
import Dialog from "./ui/Dialog";
import Box from "./ui/Box";
import ThemBtn from "./ui/ThemBtn";
import { useTheme } from "../context/ThemeContext";

export default function Nav() {
  const { theme, toggleTheme } = useTheme();
  return (
    <div className="navbar bg-base-100">
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
            className="menu dropdown-content menu-sm z-[1] mt-3 w-52 rounded-box bg-base-100 p-2 shadow"
          >
            <li>
              <span>Home</span>
            </li>
            <li>
              <span>Log In</span>
              <ul className="p-2">
                <li>
                  <span>Student</span>
                </li>
                <li>
                  <span>Admin</span>
                </li>
              </ul>
            </li>
            <li>
              <span>About</span>
            </li>
          </ul>
        </div>
        <span className="btn btn-ghost text-xl">
          <img
            className="h-10 object-center"
            src={theme === "light" ? Logo : LogoDark}
            alt=""
          />
        </span>
      </div>
      <div className="navbar-center hidden lg:flex">
        <ul className="menu menu-horizontal px-1">
          <li>
            <span>Home</span>
          </li>
          <li>
            <details>
              <summary>Log in</summary>
              <ul className="p-2">
                <li>
                  <span>Student</span>
                </li>
                <li>
                  <span>Admin</span>
                </li>
              </ul>
            </details>
          </li>
          <li>
            <span>About</span>
          </li>
        </ul>
      </div>
      <div className="navbar-end">
        <Box className="flex flex-row gap-5">
          <Dialog title="Register">
            <Register />
          </Dialog>
          <ThemBtn />
        </Box>
      </div>
    </div>
  );
}
