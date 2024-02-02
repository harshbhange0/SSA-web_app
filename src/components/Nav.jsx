import React, { useEffect, useState } from "react";
import Logo from "../assets/logo.svg";
import LogoDark from "../assets/logoDark.svg";
import { Register } from "../pages/auth";
import Dialog from "./ui/Dialog";
import Box from "./ui/Box";
import ThemBtn from "./ui/ThemBtn";
import { useTheme } from "../context/ThemeContext";
import { Link, useNavigate } from "react-router-dom";
import Button from "./ui/Button";
import useCheckUser from "../hooks/useCheckUser";
export default function Nav() {
  const isAuth = useCheckUser();
  const navigate = useNavigate();
  const [user, setUser] = useState(
    localStorage.getItem("userIs") ? localStorage.getItem("userIs") : "",
  );
  const { theme } = useTheme();
  useEffect(() => {
    if (!user == "log in") {
      setUser(localStorage.getItem("userId"));
    }
  }, [user]);
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
              <Link to="/">Home</Link>
            </li>
            {isAuth && (
              <li>
                <Link to={`/auth/v1/${user}/dashboard`}>Dashboard</Link>
              </li>
            )}
            <li>
              {user ? (
                <Button
                  onClick={() => {
                    localStorage.removeItem("userIs");
                    navigate("/");
                    location.reload();
                  }}
                >
                  Log Out
                </Button>
              ) : (
                <>
                  <span>Log In</span>
                  <ul className="p-2">
                    <IsUser user={user} />
                  </ul>
                </>
              )}
            </li>
            <li>
              <Link to="/about">About</Link>
            </li>
          </ul>
        </div>
        <Link to="/" className="btn btn-ghost text-xl">
          <img
            className="hidden h-10 object-contain sm:block sm:w-20"
            src={theme === "light" ? Logo : LogoDark}
            alt=""
          />
        </Link>
      </div>
      <div className="navbar-center hidden lg:flex">
        <ul className="menu menu-horizontal px-1">
          <li>
            <Link to="/">Home</Link>
          </li>
          {isAuth && (
            <li>
              <Link to={`/auth/${user}/dashboard`}>Dashboard</Link>
            </li>
          )}
          <li>
            {user ? (
              <Button
                onClick={() => {
                  localStorage.removeItem("userIs");
                  navigate("/");
                  location.reload();
                }}
              >
                Log Out
              </Button>
            ) : (
              <details className="">
                <summary>Log in</summary>
                <ul className="p-2 dark:bg-gray-600 dark:text-gray-200">
                  <IsUser user={user} />
                </ul>
              </details>
            )}
          </li>
          <li>
            <Link to="/about">About</Link>
          </li>
        </ul>
      </div>
      <div className="navbar-end">
        <Box className="flex flex-row gap-5 pe-5">
          <Dialog title="Register">
            <Register />
          </Dialog>
          <ThemBtn />
        </Box>
      </div>
    </div>
  );
}

const IsUser = ({ user }) => {
  return (
    <>
      <li>
        <Link to="/api/v1/student/login">Student</Link>
      </li>

      <li>
        <Link to="/api/v1/admin/login">Admin</Link>
      </li>
    </>
  );
};
