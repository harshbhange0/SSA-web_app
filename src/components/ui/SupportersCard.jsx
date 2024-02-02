import React from "react";

function SupportersCard({ img, title, description }) {
  return (
    <div className=" card w-full bg-base-100 shadow-xl  transition-shadow duration-150 hover:shadow-md dark:bg-gray-400/20 dark:text-gray-100 dark:transition-all dark:duration-150 dark:hover:bg-gray-400/40">
      <figure className="w-full px-5 pt-5">
        <img
          src={img}
          alt={img}
          className="rounded-xl "
          style={{ filter: "drop-shadow(0 0 0.3rem #ccc)" }}
        />
      </figure>
      <div className="card-body items-center py-3 text-center">
        <h2 className="card-title">{title}</h2>
        <p>{description}</p>
      </div>
    </div>
  );
}

export default SupportersCard;
