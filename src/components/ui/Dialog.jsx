import React from "react";
import { useId } from "react";

export default function Dialog({ title, children, className = "btn" }) {
  const id = useId();
  return (
    <>
      <button
        className={className}
        onClick={() => document.getElementById(id).showModal()}
      >
        {title}
      </button>
      <dialog id={id} className=" glass modal">
        <div className=" modal-box dark:border dark:border-gray-500  dark:shadow dark:shadow-purple-300">
          <form method="dialog">
            <button className="btn btn-circle btn-ghost btn-sm absolute right-2 top-2">
              ✕
            </button>
          </form>
          {children}
        </div>
      </dialog>
    </>
  );
}
