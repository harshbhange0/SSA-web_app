import React from "react";
import Nav from "./Nav";

export default function Layout({ children }) {
  return (
    <>
      <header>
        <Nav />
      </header>
      {children}
    </>
  );
}
