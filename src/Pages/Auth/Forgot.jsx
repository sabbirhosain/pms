import { useState } from "react";
import { Link } from "react-router-dom";
import { TEInput, TERipple } from "tw-elements-react";

const Forgot = () => {
  return (
    <div className="h-screen flex items-center justify-center">
      <div className="block w-full sm:max-w-lg rounded-lg bg-white p-6 shadow-[0_2px_15px_-3px_rgba(0,0,0,0.07),0_10px_20px_-2px_rgba(0,0,0,0.04)] dark:bg-neutral-700">
        <h1 className="pb-10 text-2xl font-bold leading-tight text-black text-center font-sans">Forgot Password</h1>

        <form>
          {/* <!--Email input--> */}
          <TEInput
            type="text"
            label="Enter Your Email"
            className="mb-6"
            onChange={(e) => (e.target.value)}
            required
          ></TEInput>

          {/* <!--Submit button--> */}
          <TERipple rippleColor="light" className="w-full">
            <button
              type="submit"
              className="block w-full rounded bg-primary px-6 pb-2 pt-2.5 text-sm font-medium uppercase leading-normal text-white shadow-[0_4px_9px_-4px_#3b71ca] transition duration-150 ease-in-out hover:bg-primary-600 hover:shadow-[0_8px_9px_-4px_rgba(59,113,202,0.3),0_4px_18px_0_rgba(59,113,202,0.2)] focus:bg-primary-600 focus:shadow-[0_8px_9px_-4px_rgba(59,113,202,0.3),0_4px_18px_0_rgba(59,113,202,0.2)] focus:outline-none focus:ring-0 active:bg-primary-700 active:shadow-[0_8px_9px_-4px_rgba(59,113,202,0.3),0_4px_18px_0_rgba(59,113,202,0.2)] dark:shadow-[0_4px_9px_-4px_rgba(59,113,202,0.5)] dark:hover:shadow-[0_8px_9px_-4px_rgba(59,113,202,0.2),0_4px_18px_0_rgba(59,113,202,0.1)] dark:focus:shadow-[0_8px_9px_-4px_rgba(59,113,202,0.2),0_4px_18px_0_rgba(59,113,202,0.1)] dark:active:shadow-[0_8px_9px_-4px_rgba(59,113,202,0.2),0_4px_18px_0_rgba(59,113,202,0.1)]]"
            >Send OTP</button>
          </TERipple>
        </form>
        <p className="text-base text-center mt-4">I have a Password?
          <Link to={"/login"} className="text-primary transition duration-150 ease-in-out hover:text-primary-600 focus:text-primary-600 active:text-primary-700 dark:text-primary-400 dark:hover:text-primary-500 dark:focus:text-primary-500 dark:active:text-primary-600 ms-2">Login</Link></p>
      </div >
    </div >
  )
}

export default Forgot