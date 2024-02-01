import React from "react";

export default function Box({ children, className = "p-1 sm:p-2 md:p-3 w-full mx-auto" }) {
  return <div className={className}>{children}</div>;
}
