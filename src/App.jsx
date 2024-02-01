import React, { useState } from "react";
import { Home, Login, Register } from "./pages";
import Layout from "./components/Layout";
import { Route, Routes } from "react-router-dom";

function App() {
  return (
    <>
      <Layout>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/api/v1/">
            <Route path="admin/login" element={<Login />} />
            <Route path="student/login" element={<Login />} />
          </Route>
        </Routes>
      </Layout>
    </>
  );
}

export default App;
