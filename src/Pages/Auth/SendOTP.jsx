import { createRef, useState } from "react";
import { useNavigate } from "react-router-dom";
import { toast } from "react-toastify";
import { TEInput, TERipple } from "tw-elements-react";
import { useAuthContext } from "../../Context/AuthContexApi";
import NewPassword from "./NewPassword";

const SendOTP = () => {
  const { forgotPassword } = useAuthContext()
  const navigate = useNavigate()
  const [otp, setOTP] = useState(['', '', '', '', '', '']);
  const inputRefs = Array.from({ length: 6 }, () => createRef());
  // console.log(otp.join(''));

  // ========== This is Receive only String and number value =========
  // const handleChange = (index, event) => {
  //   const newOTP = [...otp];
  //   newOTP[index] = event.target.value;
  //   setOTP(newOTP);
  //   if (event.target.value !== '' && index < 5) {
  //     inputRefs[index + 1].current.focus();
  //   }
  // };

  // const handleKeyDown = (index, event) => {
  //   if (event.key === 'Backspace' && index > 0 && otp[index] === '') {
  //     inputRefs[index - 1].current.focus();
  //   }
  // };


  // ========= This is Receive only number/intiger value ===========
  const handleInputChange = (index, event) => {
    const value = event.target.value;
    if (isNaN(value) || value.length > 1) {
      return;
    }

    const newOTP = [...otp];
    newOTP[index] = value;
    setOTP(newOTP);

    if (index < inputRefs.length - 1 && value !== '') {
      inputRefs[index + 1].current.focus();
    }
  };

  const handleKeyDown = (index, event) => {
    if (event.key === 'Backspace' && index > 0 && otp[index] === '') {
      inputRefs[index - 1].current.focus();
    }
  };

  // send OTP
  const otpHandelSubmit = async (event) => {
    event.preventDefault()
    try {
      const response = await fetch("https://pms24.pythonanywhere.com/api/otp-fill/", {
        method: "POST", headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ otp: otp.join('') }),
      });
      const data = await response.json();
      console.log(data);

      if (!response.ok) {
        toast.warning("OTP Invalid..!!");
        return
      }

      if (response.ok) {
        toast.success("OTP Verified Success..!!");
        setOTP("")
        navigate("/reset-password")
      }

    } catch (error) {
      console.error(error);
      toast.error("Somthing went wrong");

    }
  }


  return (
    <div className="h-screen flex items-center justify-center">
      <div className="block w-full sm:max-w-lg rounded-lg bg-white p-6 shadow-[0_2px_15px_-3px_rgba(0,0,0,0.07),0_10px_20px_-2px_rgba(0,0,0,0.04)] dark:bg-neutral-700">
        <h1 className="pb-10 text-2xl font-bold leading-tight text-black text-center font-sans">Input OTP</h1>

        <form onSubmit={otpHandelSubmit}>
          {/* <!--Email input--> */}
          <div className="grid grid-cols-6 gap-2">

            {otp.map((value, index) => (
              <TEInput
                type="text"
                label="--------"
                className="mb-6 text-center"
                key={index}
                maxLength="1"
                value={value}
                // onChange={(event) => handleChange(index, event)} //for string
                // onKeyDown={(event) => handleKeyDown(index, event)} //for string
                onChange={(e) => handleInputChange(index, e)}
                onKeyDown={(e) => handleKeyDown(index, e)}
                ref={inputRefs[index]}
                required
              ></TEInput>
            ))}

          </div>

          {/* <!--Submit button--> */}
          <TERipple rippleColor="light" className="w-full">
            <button
              type="submit"
              className="block w-full rounded bg-primary px-6 pb-2 pt-2.5 text-sm font-medium uppercase leading-normal text-white shadow-[0_4px_9px_-4px_#3b71ca] transition duration-150 ease-in-out hover:bg-primary-600 hover:shadow-[0_8px_9px_-4px_rgba(59,113,202,0.3),0_4px_18px_0_rgba(59,113,202,0.2)] focus:bg-primary-600 focus:shadow-[0_8px_9px_-4px_rgba(59,113,202,0.3),0_4px_18px_0_rgba(59,113,202,0.2)] focus:outline-none focus:ring-0 active:bg-primary-700 active:shadow-[0_8px_9px_-4px_rgba(59,113,202,0.3),0_4px_18px_0_rgba(59,113,202,0.2)] dark:shadow-[0_4px_9px_-4px_rgba(59,113,202,0.5)] dark:hover:shadow-[0_8px_9px_-4px_rgba(59,113,202,0.2),0_4px_18px_0_rgba(59,113,202,0.1)] dark:focus:shadow-[0_8px_9px_-4px_rgba(59,113,202,0.2),0_4px_18px_0_rgba(59,113,202,0.1)] dark:active:shadow-[0_8px_9px_-4px_rgba(59,113,202,0.2),0_4px_18px_0_rgba(59,113,202,0.1)]]"
            >Submit</button>
          </TERipple>
        </form>
        <p className="text-base text-center mt-4 text-orange-500">Your code was send to your via email...!!</p>
        <form onSubmit={forgotPassword}>
          <p className="text-base text-center mt-3">Don't receive code?
            <button type="submit" className="text-primary transition duration-150 ease-in-out hover:text-primary-600 focus:text-primary-600 active:text-primary-700 dark:text-primary-400 dark:hover:text-primary-500 dark:focus:text-primary-500 dark:active:text-primary-600 ms-2">Resend</button></p>
        </form>
        
      </div >
    </div >
  )
}

export default SendOTP