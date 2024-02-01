import React from "react";

export default function Button({
  children,
  onClick,
  type,
  variant,
  className,
}) {
  switch (variant) {
    case "submit":
      return (
        <button
          className="group mx-auto block w-full rounded-md border border-blue-400 bg-blue-400 px-4 py-2 shadow-md shadow-blue-500 transition-all duration-150 ease-in hover:bg-white hover:shadow-sm hover:shadow-blue-500 active:shadow-none btn"
          onClick={onClick}
          type={type ? type : ""}
        >
          <span className=" font-semibold text-white transition-all duration-75 ease-in group-hover:text-blue-500 ">
            {children}
          </span>
        </button>
      );
      break;
    default:
      return (
        <button onClick={onClick} type={type ? type : ""} className={className}>
          {children}
        </button>
      );
  }
}
