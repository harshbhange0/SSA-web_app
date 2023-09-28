import React from "react";

function StudentsDisplay({data}) {
  return (
    <div className="grid grid-cols-1 sm:grid-cols-1 gap-2 px-2 md:grid-cols-2 xl:grid-cols-3 md:gap-2">
      {data?.map((student,i) => {
        return (
          <div className="w-full bg-slate-100 py-2 px-3 rounded-md" key={i}>
            <div className=" w-full text-xl text-center sm:text-2xl">Class: {student.class}</div>
            <div className="text-md sm:text-xl">Name: {student.name}</div>
          </div>
        );
      })}
      <div></div>
    </div>
  );
}

export default StudentsDisplay;
