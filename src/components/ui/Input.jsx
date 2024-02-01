import React, { useId } from "react";
import Box from "./Box";

export default function Input({ label, placeholder, setValue, value, type }) {
  const _id = useId();
  return (
    <Box>
      <Box className="relative w-full">
        <input
          id={_id}
          type={type}
          placeholder={placeholder ? placeholder : ""}
          required
          value={value}
          onChange={setValue}
          className="dark:border-grey-100 peer block w-full appearance-none rounded-lg  border border-gray-400 bg-transparent px-2.5 pb-2.5 pt-4  text-sm text-gray-900  focus:outline-none focus:ring-0 dark:text-white  "
        />
        {label ? (
          <label
            htmlFor={_id}
            className="absolute start-1 top-2 z-10 origin-[0] -translate-y-4 scale-75 transform bg-white px-2 text-sm text-gray-500 duration-300 peer-placeholder-shown:top-1/2 peer-placeholder-shown:-translate-y-1/2 peer-placeholder-shown:scale-100 peer-focus:top-2 peer-focus:-translate-y-4 peer-focus:scale-75 peer-focus:px-2 peer-focus:text-gray-900 rtl:peer-focus:left-auto rtl:peer-focus:translate-x-1/4 dark:bg-gray-900 dark:text-gray-400 peer-focus:dark:text-gray-400"
          >
            {label}
          </label>
        ) : (
          ""
        )}
      </Box>
    </Box>
  );
}
