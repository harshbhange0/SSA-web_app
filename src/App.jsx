import React, { useState } from "react";
import { Dashboard, Home, Login, NotFoundPage, Register } from "./pages";
import Layout from "./components/Layout";
import { Route, Routes } from "react-router-dom";
import { Bounce, ToastContainer } from "react-toastify";

import "react-toastify/dist/ReactToastify.css";
import useCheckUser from "./hooks/useCheckUser";
function App() {
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
            <Route path=":url/login" element={<Login />} />
          </Route>
          <Route path="/auth/v1/">
            <Route path=":url/dashboard" element={<Dashboard />} />
          </Route>
          <Route path="*" element={<NotFoundPage />} />
        </Routes>
      </Layout>
    </>
  );
}

export default App;
