import React, { useState } from "react";
import Box from "../../../components/ui/Box";
import Input from "../../../components/ui/Input";
import Button from "../../../components/ui/Button";

export default function Login() {
  const [userDetails, setUserDetails] = useState({
    email: "",
    password: "",
  });

  const handleSubmit = (e) => {
    e.preventDefault();
    // Handle form submission logic here
  };

  return (
    <Box className="flex h-[calc(82vh-66px)] flex-col items-center justify-center gap-4 ">
      <Box>
        <Box className="text-center">
          <h1 className="pb-10 text-4xl font-semibold ">Login</h1>
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
