import axios from "axios";
import { useEffect, useState } from "react";

const useCheckUser = () => {
  const [isLoggedIn, setIsLoggedIn] = useState(false);
  useEffect(() => {
    checkUserAuthenticated();
  }, []);

  async function checkUserAuthenticated() {
    if (localStorage.getItem("token")) {
      const refreshToken = localStorage.getItem("refreshToken");
      try {
        const res = await axios.get(
          `http://localhost:3000/api/v1/student/auth/check-refresh-token/${refreshToken}`,
        );
        setIsLoggedIn(res.data.studentValid);
      } catch (error) {
        console.log(error);
      }
    }
  }
  return isLoggedIn;
};

export default useCheckUser;
