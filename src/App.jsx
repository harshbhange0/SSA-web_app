import React, { useState } from "react";
import { Home, Login, Register } from "./pages";
import Layout from "./components/Layout";
import { Route, Routes } from "react-router-dom";
import { Bounce, ToastContainer } from "react-toastify";

import "react-toastify/dist/ReactToastify.css";
import useCheckUser from "./hooks/useCheckUser";
function App() {
  const isUserLoggedIn = useCheckUser();
  console.log(isUserLoggedIn);
  return (
    <>
      <ToastContainer
        position="top-right"
        autoClose={5000}
        hideProgressBar={false}
        newestOnTop={false}
        closeOnClick
        rtl={false}
        pauseOnFocusLoss
        draggable
        pauseOnHover
        theme="light"
        transition={Bounce}
      />
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
