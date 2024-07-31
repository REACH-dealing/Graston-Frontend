import { useEffect, useState } from "react";
import { loginApi, sendOTP, verifyOTP } from "../../../api/userApi/userApi";
import { useDispatch, useSelector } from "react-redux";
import { fetchUserData } from "../../../features/user/userSlice";

// A component to consume login end-point
const LoginContainer = () => {
  const [login, setLogin] = useState(null);
  const [loading, setLoading] = useState(true);

  // Login End-point
  useEffect(() => {
    const loginUser = async () => {
      try {
        const response = await loginApi({
          email: "sasa6@example.com",
          password: "sasa6",
        });
        setLogin(response);
        console.log(loading);
      } catch (error) {
        console.log(error.message);
      } finally {
        setLoading(false);
        console.log(loading);
      }
    };
    loginUser();
  }, []);
  console.log(login);

  
  // Get User Data From Redux Store

  // const dispatch = useDispatch()
  // const user = useSelector(state => state.user)
  // useEffect(() => {
  //   dispatch(fetchUserData())
  // }, [])
  // console.log(user)


  // OTP Sending/Verification

  // useEffect(() => {
  //   const sendOTPCode = async () => {
  //     try {
  //       const response = await sendOTP()
  //       setLogin(response)
  //     } catch (error) {
  //       console.log(error.message)
  //     } finally {
  //       setLoading(false)
  //     }
  //   }
  //   sendOTPCode()
  // }, [])
  // console.log(login)

  return <div></div>;
};
export default LoginContainer;
