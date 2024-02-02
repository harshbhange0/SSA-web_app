import axios from "axios";
import React, { useEffect, useState } from "react";
import SupportersCard from "./ui/SupportersCard";
import Box from "./ui/Box";

export default function Supporters() {
  const [data, setData] = useState([]);
  useEffect(() => {
    getFakeData();
  }, []);
  const getFakeData = async () => {
    try {
      const res = await axios.get("https://dummyjson.com/users");
      let sliceData = res.data.users.slice(0, 10);
      setData(sliceData);
    } catch (error) {
      console.log(error);
    }
  };

  return (
    <>
      <h1 className="py-10 ps-5 text-4xl font-extrabold md:text-6xl md:font-semibold">
        Our Bright Student
      </h1>
      <Box className=" mx-auto mt-10 flex flex-row flex-wrap sm:block sm:columns-3 md:columns-4 lg:columns-4 xl:columns-6 ">
        {data &&
          data.map((res) => {
            return (
              <Box
                key={res.id + 1}
                className="mx-auto my-2 w-[60%] sm:w-[90%] md:w-[90%] lg:w-[85%] "
              >
                <SupportersCard
                  title={res?.firstName + " " + res?.lastName}
                  img={res?.image}
                  description={res?.address.address}
                />
              </Box>
            );
          })}
      </Box>
    </>
  );
}
