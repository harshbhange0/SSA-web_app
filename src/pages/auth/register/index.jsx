import React, { useState } from "react";
import Box from "../../../components/ui/Box";
import Button from "../../../components/ui/Button";
import Input from "../../../components/ui/Input";

export default function Register() {
  const [userDetails, setUserDetails] = useState({
    firstName: "",
    lastName: "",
    email: "",
    password: "",
  });

  const handleSubmit = (e) => {
    e.preventDefault();
    // Handle form submission logic here
  };
  return (
    <Box className="flex  flex-col items-center justify-center gap-4 ">
      <Box>
        <Box className="text-center">
          <h1 className="pb-10 text-4xl font-semibold ">Register</h1>
        </Box>
        <form onSubmit={handleSubmit} className="mx-auto w-[80%]">
          <Box className="flex w-full flex-col items-center justify-center sm:flex-row">
            <Input
              label="First Name"
              type="text"
              value={userDetails.firstName}
              setValue={(e) => {
                setUserDetails((prev) => ({
                  ...prev,
                  firstName: e.target.value,
                }));
              }}
            />
            <Input
              type="text"
              label="Last Name"
              value={userDetails.lastName}
              setValue={(e) => {
                setUserDetails((prev) => ({
                  ...prev,
                  lastName: e.target.value,
                }));
              }}
            />
          </Box>
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
