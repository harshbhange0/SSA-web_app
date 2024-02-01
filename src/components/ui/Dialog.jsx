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
      <dialog id="my_modal_1" className="modal">
        <div className="modal-box">
          {" "}
          {children}
          <form method="dialog">
            <button className="btn btn-sm btn-circle btn-ghost absolute right-2 top-2">
              ✕
            </button>
          </form>
        </div>
      </dialog>
    </>
  );
}
