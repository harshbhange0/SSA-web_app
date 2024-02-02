import React from "react";

export default function Dialog({ title, children }) {
  return (
    <>
      <button
        className="btn"
        onClick={() => document.getElementById("my_modal_1").showModal()}
      >
        {title}
      </button>
      <dialog id="my_modal_1" className=" glass modal">
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
