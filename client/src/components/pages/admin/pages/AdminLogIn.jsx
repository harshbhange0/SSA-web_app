import React, { useState } from "react";
import axios from "axios";
import { useNavigate } from "react-router-dom";

function AdminLogIn() {
  const [errorDisplay, setErrorDisplay] = useState(false);
  const [adminData, setAdminData] = useState({
    admin_user_name: "",
    admin_user_password: "",
  });

  const navigate = useNavigate();
  const handleChange = (e) => {
    const { name, value } = e.target;
    setAdminData({
      ...adminData,
      [name]: value,
    });
  };
  const handleSubmit = async (e) => {
    e.preventDefault();

    try {
      const response = await axios.post(
        "http://localhost:5000/admin/login",
        adminData,
      );
      console.log(response.data);

      if (response.data.success) {
        localStorage.setItem("emipssflo7898709r-u-0m-dolodf46755r", true);
        navigate("/admin/dashboard");
      } else {
        setErrorDisplay(true);
      }
    } catch (error) {
      console.error("Login failed:", error);
    }
  };
  return (
    <>
      <div className="flex h-screen items-center justify-center">
        <form
          onSubmit={(e) => {
            e.preventDefault();
          }}
          className="flex flex-col items-center  gap-8 rounded-md    border bg-white p-5"
        >
          {errorDisplay ? (
            <h1 className="text-4xl text-red-500">
              Admin Credential Not Match
            </h1>
          ) : (
            <h1 className="text-4xl">Admin Log In</h1>
          )}
          <div className="flex flex-col">
            <label htmlFor="user" className={`${errorDisplay?"text-red-500":"text-gray-500"}`}>User Name</label>
            <input
              type="text"
              name="admin_user_name"
              value={adminData.admin_user_name}
              onChange={handleChange}
              className={`${errorDisplay?"border-red-300":"border-gray-300"}  border-b p-2 outline-none transition-all duration-150 ease-linear focus:shadow-md`}
            />
          </div>
          <div className="flex flex-col">
            <label htmlFor="password" className={`${errorDisplay?"text-red-500":"text-gray-500"}`}>
              
              Password</label>
            <input
              type="password"
              name="admin_user_password"
              value={adminData.admin_user_password}
              onChange={handleChange}
              className={` ${errorDisplay?"border-red-300":"border-gray-300"} border-b p-2 outline-none transition-all duration-150 ease-linear focus:shadow-md  `}
            />
          </div>
          <div className="">
            <button
              type="submit"
              className="rounded-sm border border-blue-500 bg-blue-500 px-3 py-2 text-white transition-colors duration-200 ease-in hover:bg-blue-500/90"
              onClick={handleSubmit}
            >
              Log In
            </button>
          </div>
        </form>
      </div>
    </>
  );
}

export default AdminLogIn;
