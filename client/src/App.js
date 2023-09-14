import React from "react";
import { Route, Routes } from "react-router-dom";
import {
  AddTest,
  Admin,
  ErrorPage,
  Home,
  LogIn,
  Registration,
  Test,
} from "./components/pages/export";
import AdminLogIn from "./components/pages/admin/pages/AdminLogIn";
function App() {
return (
    <div className="body_color_primary">
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/admin/dashboard" element={<Admin  />} />
        <Route path="/admin/add-test" element={<AddTest />} />
        <Route path="/admin/login" element={<AdminLogIn  />} />
        <Route path="/test" element={<Test />} />
        <Route path="/log-in" element={<LogIn />} />
        <Route path="/reg" element={<Registration />} />
        <Route path="/*" element={<ErrorPage />} />
      </Routes>
    </div>
  );
}

export default App;
