import { useState } from "react";
import { Link } from "react-router-dom";
import { TEInput, TERipple } from "tw-elements-react";
import { FaRegEye, FaRegEyeSlash } from "../../Data/Icon.jsx"
import { useAuthContext } from "../../Context/AuthContexApi.jsx";
import { toast } from "react-toastify";

const NewPassword = () => {
  const { message } = useAuthContext()

  // password show
  const [showPassword, setShowPassword] = useState(false);
  const passwordShowToggle = () => {
    setShowPassword(!showPassword);
  };

  const [password, setPassword] = useState("")
  const [confirmPassword, setConfirmPassword] = useState("")

  // new password
  const NewPasswordSubmit = async (event) => {
    event.preventDefault()

    // password and confirm password chack
    if (password !== confirmPassword) {
      toast.warning("Passwords do not match");
      return;
    }

    try {
      const response = await fetch("https://pms24.pythonanywhere.com/api/reset-password/", {
        method: "POST", headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ new_password: password }),
      });

      const data = await response.json();
      console.log(data);

      if (!response.ok) {
        toast.warning("Password Doesn't Change..!!");
        return
      }

      if (response.ok) {
        toast.success("Password Change Success..!!");
        navigate("/login")
      }

    } catch (error) {
      console.error(error);
      toast.error("Somthing went wrong");

    }
  }
















  return (
    <div className="h-screen flex items-center justify-center">
      <div className="block w-full sm:max-w-lg rounded-lg bg-white p-6 shadow-[0_2px_15px_-3px_rgba(0,0,0,0.07),0_10px_20px_-2px_rgba(0,0,0,0.04)] dark:bg-neutral-700">
        <h1 className="pb-10 text-2xl font-bold leading-tight text-black text-center font-sans">New Password</h1>

        <form onSubmit={NewPasswordSubmit}>
          {/* <!--Email input--> */}
          <TEInput
            type="text"
            label="Your Email"
            value={message?.email || ""}
            className="mb-6"
            onChange={(e) => (e.target.value)}
            disabled
          ></TEInput>

          <div className="grid grid-cols-2 gap-4">
            {/* <!--password input--> */}
            <TEInput
              type={showPassword ? "text" : "password"}
              label="Password"
              className="mb-6"
              onChange={(e) => setPassword(e.target.value)}
              required
            ></TEInput>

            {/* <!--confirm oassword input--> */}
            <div className="relative">
              <TEInput
                type={showPassword ? "text" : "password"}
                label="Confirm Password"
                className="mb-6"
                onChange={(e) => setConfirmPassword(e.target.value)}
                required
              ></TEInput>

              <button type="button" onClick={passwordShowToggle} className="absolute top-[10px] right-2 z-50 cursor-pointer">{showPassword ? <FaRegEye /> : <FaRegEyeSlash />}</button>
            </div>
          </div>

          {/* <!--Submit button--> */}
          <TERipple rippleColor="light" className="w-full">
            <button
              type="submit"
              className="block w-full rounded bg-primary px-6 pb-2 pt-2.5 text-sm font-medium uppercase leading-normal text-white shadow-[0_4px_9px_-4px_#3b71ca] transition duration-150 ease-in-out hover:bg-primary-600 hover:shadow-[0_8px_9px_-4px_rgba(59,113,202,0.3),0_4px_18px_0_rgba(59,113,202,0.2)] focus:bg-primary-600 focus:shadow-[0_8px_9px_-4px_rgba(59,113,202,0.3),0_4px_18px_0_rgba(59,113,202,0.2)] focus:outline-none focus:ring-0 active:bg-primary-700 active:shadow-[0_8px_9px_-4px_rgba(59,113,202,0.3),0_4px_18px_0_rgba(59,113,202,0.2)] dark:shadow-[0_4px_9px_-4px_rgba(59,113,202,0.5)] dark:hover:shadow-[0_8px_9px_-4px_rgba(59,113,202,0.2),0_4px_18px_0_rgba(59,113,202,0.1)] dark:focus:shadow-[0_8px_9px_-4px_rgba(59,113,202,0.2),0_4px_18px_0_rgba(59,113,202,0.1)] dark:active:shadow-[0_8px_9px_-4px_rgba(59,113,202,0.2),0_4px_18px_0_rgba(59,113,202,0.1)]]"
            >Change Password</button>
          </TERipple>
        </form>
        <p className="text-base text-center mt-4">I have a Password?
          <Link to={"/login"} className="text-primary transition duration-150 ease-in-out hover:text-primary-600 focus:text-primary-600 active:text-primary-700 dark:text-primary-400 dark:hover:text-primary-500 dark:focus:text-primary-500 dark:active:text-primary-600 ms-2">Login</Link></p>
      </div >
    </div >
  )
}

export default NewPassword