import axios from "axios";
import { useEffect, useState } from "react";

const useCheckUser = () => {
  const [isAuth, setIsAuth] = useState(false);
  useEffect(() => {
    checkUserAuthenticated();
  }, []);

  async function checkUserAuthenticated() {
    if (localStorage.getItem("token") && localStorage.getItem("userIs")) {
      const refreshToken = localStorage.getItem("refreshToken");
      if (refreshToken) {
        try {
          const res = await axios.get(
            `http://localhost:3000/api/v1/student/auth/check-refresh-token/${refreshToken}`,
          );
          setIsAuth(res.data.studentValid);
        } catch (error) {
          console.log(error);
        }
      }
      setIsAuth(false);
    }
  }
  return isAuth;
};

export default useCheckUser;
