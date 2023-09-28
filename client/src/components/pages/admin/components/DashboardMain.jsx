import React from "react";
import StudentsDisplay from "./StudentsDisplay";
import data from "../dataA.js";

function DashboardMain() {
  return (
    <div className="container h-full ">
      <>
        <StudentsDisplay data={data} />
      </>
    </div>
  );
}

export default DashboardMain;
