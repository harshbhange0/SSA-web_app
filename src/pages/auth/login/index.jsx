import React, { useState } from "react";
import Box from "../../../components/ui/Box";
import Input from "../../../components/ui/Input";
import Button from "../../../components/ui/Button";
import { toast } from "react-toastify";
import axios from "axios";
import { useParams, useNavigate } from "react-router-dom";

export default function Login() {
  const navigate = useNavigate();
  const [userDetails, setUserDetails] = useState({
    email: "",
    password: "",
  });

  const clearInputs = () => {
    setUserDetails({ email: "", password: "" });
  };
  const { url } = useParams();
  const handleSubmit = async (e) => {
    e.preventDefault();
    if (!userDetails.email && !userDetails.password) {
      toast.error("enter valid details");
      clearInputs();
    } else {
      try {
        const res = await axios.post(
          `http://localhost:3000/api/v1/${url}/login`,
          {
            ...userDetails,
          },
        );
        if (res.data.token) {
          toast.error(res.data.msg);
          clearInputs();
        } else {
          toast.success(`${url} log in successfully`);
          localStorage.setItem("refreshToken", res.data.refreshToken);
          navigate("/");
          location.reload();
          if (url == "admin") {
            localStorage.setItem("userIs", "admin");
            console.log("k");
          } else {
            localStorage.setItem("userIs", "student");
          }
          clearInputs();
        }
      } catch (error) {
        toast.error(error.response.data.msg);
        clearInputs();
      }
    }
  };

  return (
    <Box className="flex h-[calc(82vh-66px)] flex-col items-center justify-center gap-4 ">
      <Box>
        <Box className="text-center">
          <h1 className="pb-10 text-4xl font-semibold ">
            Login as {url[0].toUpperCase()}
            {url.slice(1)}
          </h1>
        </Box>
        <form
          onSubmit={handleSubmit}
          className="mx-auto w-[80%] sm:w-[50%] md:w-[45%] lg:w-[35%]"
        >
          <Input
            label="Email"
            type="email"
            value={userDetails.email}
            setValue={(e) => {
              setUserDetails((prev) => ({
                ...prev,
                email: e.target.value,
              }));
            }}
          />
          <Input
            label="Password"
            type="password"
            value={userDetails.password}
            setValue={(e) => {
              setUserDetails((prev) => ({
                ...prev,
                password: e.target.value,
              }));
            }}
          />
          <Box>
            <Button variant="submit" type="submit">
              Submit
            </Button>
          </Box>
        </form>
      </Box>
    </Box>
  );
}
