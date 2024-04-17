import { Link, useNavigate } from "react-router-dom";
import { TEInput, TERipple } from "tw-elements-react";
import { FaRegEye, FaRegEyeSlash } from "../../Data/Icon.jsx"
import { useEffect, useState } from "react";
import { Ripple, Input, initTWE, } from "tw-elements";
import { toast } from "react-toastify";

const Register = () => {
  useEffect(() => { initTWE({ Ripple, Input }) }, []);
  const navigate = useNavigate()
  // password show
  const [showPassword, setShowPassword] = useState(false);
  const passwordShowToggle = () => {
    setShowPassword(!showPassword);
  };

  const [firstName, setFirstName] = useState("")
  const [lastName, setLastName] = useState("")
  const [userName, setUserName] = useState("")
  const [email, setEmail] = useState("")
  const [phone, setPhone] = useState("")
  const [password, setPassword] = useState("")
  const [confirmPassword, setConfirmPassword] = useState("")
  const [iAgree, setIAgree] = useState(false)
  const iAgreeChackbox = () => { setIAgree(!iAgree) };

  const resetFields = () => {
    setLastName("");
    setUserName("");
    setEmail("");
    setPhone("");
    setPassword("");
    setConfirmPassword("");
    setIAgree(false);
  };

  const setUserData = {
    first_name: firstName,
    last_name: lastName,
    email: email,
    username: userName,
    phone: phone,
    password: password
  };

  const registerFrom = async (event) => {
    event.preventDefault()

    // password and confirm password chack
    if (password !== confirmPassword) {
      toast.warning("Passwords do not match");
      return;
    }

    try {
      const response = await fetch("https://pms24.pythonanywhere.com/api/register/", {
        method: "POST", headers: { "Content-Type": "application/json" },
        body: JSON.stringify(setUserData),
      });

      const data = await response.json();
      if (!response.ok) {
        // Check if email already exists
        if (response.status === 400 && data.email) {
          toast.error("Email already exists:", data.email[0]);
          return
        }
        // Check if username already exists
        if (response.status === 400 && data.username) {
          toast.error("Username already exists:", data.username[0]);
          return
        }
        // Check if phone already exists
        if (response.status === 400 && data.phone) {
          toast.warning("Phone already exists:", data.phone[0]);
          return
        }
      } else {
        toast.success("User registered successfully!");
        resetFields()
        navigate("/login")
      }

    } catch (error) {
      console.error('Error:', error);
      toast.error("Something went wrong")
    }
  }


  return (
    <>
      <div className="h-screen flex items-center justify-center">
        <div className="block w-full sm:max-w-lg rounded-lg bg-white p-6 shadow-[0_2px_15px_-3px_rgba(0,0,0,0.07),0_10px_20px_-2px_rgba(0,0,0,0.04)] dark:bg-neutral-700">
          <h1 className="pb-10 text-2xl font-bold leading-tight text-black text-center font-sans">Register Now</h1>
          <form onSubmit={registerFrom}>
            <div className="grid grid-cols-2 gap-4">
              {/* <!--First name input--> */}
              <TEInput
                type="text"
                label="First Name"
                placeholder="Sabbir"
                className="mb-6"
                onChange={(e) => setFirstName(e.target.value)}
                required
              ></TEInput>
              {/* <!--last name input--> */}
              <TEInput
                type="text"
                label="Last Name"
                placeholder="Hosain"
                className="mb-6"
                onChange={(e) => setLastName(e.target.value)}
                required
              ></TEInput>
            </div>

            <div className="grid grid-cols-2 gap-4">
              {/* <!--User name input--> */}
              <TEInput
                type="text"
                label="User name"
                placeholder="sabbir2024"
                className="mb-6"
                onChange={(e) => setUserName(e.target.value)}
                required
              ></TEInput>

              {/* <!--Number name input--> */}
              <TEInput
                type="number"
                label="Phone Number"
                placeholder="+880 123 4567 890"
                className="mb-6"
                onChange={(e) => setPhone(e.target.value)}
                required
              ></TEInput>
            </div>

            {/* <!--Email input--> */}
            <TEInput
              type="email"
              label="Email Address"
              placeholder="sabbir@gmail.com"
              className="mb-6"
              onChange={(e) => setEmail(e.target.value)}
              required
            ></TEInput>

            <div className="grid grid-cols-2 gap-4">
              {/* <!--password input--> */}
              <TEInput
                type={showPassword ? "text" : "password"}
                label="Password"
                placeholder="Use minimum 6 characters"
                className="mb-6"
                onChange={(e) => setPassword(e.target.value)}
                required
              ></TEInput>

              {/* <!--confirm oassword input--> */}
              <div className="relative">
                <TEInput
                  type={showPassword ? "text" : "password"}
                  label="Confirm Password"
                  placeholder="Password Confirmation"
                  className="mb-6"
                  onChange={(e) => setConfirmPassword(e.target.value)}
                  required
                ></TEInput>

                <button type="button" onClick={passwordShowToggle} className="absolute top-[10px] right-2 z-50 cursor-pointer">{showPassword ? <FaRegEye /> : <FaRegEyeSlash />}</button>
              </div>
            </div>

            {/* <!--i aggree checkbox--> */}
            <div className="mb-6 block min-h-[1.5rem] ps-[1.5rem]">
              <input
                checked={iAgree}
                onChange={iAgreeChackbox}
                type="checkbox"
                id="checkboxDefault"
                required
                className="relative float-left -ms-[1.5rem] me-[6px] mt-[0.15rem] h-[1.125rem] w-[1.125rem] appearance-none rounded-[0.25rem] border-[0.125rem] border-solid border-secondary-500 outline-none before:pointer-events-none before:absolute before:h-[0.875rem] before:w-[0.875rem] before:scale-0 before:rounded-full before:bg-transparent before:opacity-0 before:shadow-checkbox before:shadow-transparent before:content-[''] checked:border-primary checked:bg-primary checked:before:opacity-[0.16] checked:after:absolute checked:after:-mt-px checked:after:ms-[0.25rem] checked:after:block checked:after:h-[0.8125rem] checked:after:w-[0.375rem] checked:after:rotate-45 checked:after:border-[0.125rem] checked:after:border-l-0 checked:after:border-t-0 checked:after:border-solid checked:after:border-white checked:after:bg-transparent checked:after:content-[''] hover:cursor-pointer hover:before:opacity-[0.04] hover:before:shadow-black/60 focus:shadow-none focus:transition-[border-color_0.2s] focus:before:scale-100 focus:before:opacity-[0.12] focus:before:shadow-black/60 focus:before:transition-[box-shadow_0.2s,transform_0.2s] focus:after:absolute focus:after:z-[1] focus:after:block focus:after:h-[0.875rem] focus:after:w-[0.875rem] focus:after:rounded-[0.125rem] focus:after:content-[''] checked:focus:before:scale-100 checked:focus:before:shadow-checkbox checked:focus:before:transition-[box-shadow_0.2s,transform_0.2s] checked:focus:after:-mt-px checked:focus:after:ms-[0.25rem] checked:focus:after:h-[0.8125rem] checked:focus:after:w-[0.375rem] checked:focus:after:rotate-45 checked:focus:after:rounded-none checked:focus:after:border-[0.125rem] checked:focus:after:border-l-0 checked:focus:after:border-t-0 checked:focus:after:border-solid checked:focus:after:border-white checked:focus:after:bg-transparent rtl:float-right dark:border-neutral-400 dark:checked:border-primary dark:checked:bg-primary"
              />
              <label
                className="inline-block ps-[0.15rem] hover:cursor-pointer"
                htmlFor="checkboxDefault">
                I agree to the <Link to={"#"} className="text-blue-600">terms</Link> and <Link to={"#"} className="text-blue-600">conditions</Link>
              </label>
            </div>

            {/* <!--Submit button--> */}
            <button
              type="submit"
              className="inline-block w-full rounded bg-primary px-6 pb-2 pt-2.5 text-sm font-medium uppercase leading-normal text-white shadow-primary-3 transition duration-150 ease-in-out hover:bg-primary-accent-300 hover:shadow-primary-2 focus:bg-primary-accent-300 focus:shadow-primary-2 focus:outline-none focus:ring-0 active:bg-primary-600 active:shadow-primary-2 dark:shadow-black/30 dark:hover:shadow-dark-strong dark:focus:shadow-dark-strong dark:active:shadow-dark-strong"
              data-twe-ripple-init
              data-twe-ripple-color="light">
              Sign up
            </button>
          </form>

          <div className="my-4 flex items-center before:mt-0.5 before:flex-1 before:border-t before:border-neutral-300 after:mt-0.5 after:flex-1 after:border-t after:border-neutral-300">
            <p className="mx-4 mb-0 text-center text-sm font-semibold dark:text-neutral-200"> OR </p></div>

          <div className="grid grid-cols-1 sm:grid-cols-2 gap-2 sm:gap-4">
            <TERipple rippleColor="light" className="w-full">
              <a
                className="mb-3 flex w-full items-center justify-center rounded bg-slate-100 px-5 pb-2.5 pt-3 text-center text-sm font-medium uppercase leading-normal text-black shadow-[0_4px_9px_-4px_#54b4d3] transition duration-150 ease-in-out hover:bg-slate-50 hover:shadow-[0_8px_9px_-4px_rgba(84,180,211,0.3),0_4px_18px_0_rgba(84,180,211,0.2)] focus:bg-slate-100 focus:shadow-[0_8px_9px_-4px_rgba(84,180,211,0.3),0_4px_18px_0_rgba(84,180,211,0.2)] focus:outline-none focus:ring-0 active:bg-slate-200 active:shadow-[0_8px_9px_-4px_rgba(84,180,211,0.3),0_4px_18px_0_rgba(84,180,211,0.2)] dark:shadow-[0_4px_9px_-4px_rgba(84,180,211,0.5)] dark:hover:shadow-[0_8px_9px_-4px_rgba(84,180,211,0.2),0_4px_18px_0_rgba(84,180,211,0.1)] dark:focus:shadow-[0_8px_9px_-4px_rgba(84,180,211,0.2),0_4px_18px_0_rgba(84,180,211,0.1)] dark:active:shadow-[0_8px_9px_-4px_rgba(84,180,211,0.2),0_4px_18px_0_rgba(84,180,211,0.1)]"
                href="#!"
                role="button"
              >
                {/* <!-- Google --> */}
                <svg xmlns="http://www.w3.org/2000/svg" className="mr-2" x="0px" y="0px" width="20" height="20" viewBox="0 0 48 48">
                  <path fill="#fbc02d" d="M43.611,20.083H42V20H24v8h11.303c-1.649,4.657-6.08,8-11.303,8c-6.627,0-12-5.373-12-12	s5.373-12,12-12c3.059,0,5.842,1.154,7.961,3.039l5.657-5.657C34.046,6.053,29.268,4,24,4C12.955,4,4,12.955,4,24s8.955,20,20,20	s20-8.955,20-20C44,22.659,43.862,21.35,43.611,20.083z"></path><path fill="#e53935" d="M6.306,14.691l6.571,4.819C14.655,15.108,18.961,12,24,12c3.059,0,5.842,1.154,7.961,3.039	l5.657-5.657C34.046,6.053,29.268,4,24,4C16.318,4,9.656,8.337,6.306,14.691z"></path><path fill="#4caf50" d="M24,44c5.166,0,9.86-1.977,13.409-5.192l-6.19-5.238C29.211,35.091,26.715,36,24,36	c-5.202,0-9.619-3.317-11.283-7.946l-6.522,5.025C9.505,39.556,16.227,44,24,44z"></path><path fill="#1565c0" d="M43.611,20.083L43.595,20L42,20H24v8h11.303c-0.792,2.237-2.231,4.166-4.087,5.571	c0.001-0.001,0.002-0.001,0.003-0.002l6.19,5.238C36.971,39.205,44,34,44,24C44,22.659,43.862,21.35,43.611,20.083z"></path>
                </svg>
                Sign up Google
              </a>
            </TERipple>

            <TERipple rippleColor="light" className="w-full">
              <Link to={"#"} role="button"
                className="mb-3 flex w-full items-center justify-center rounded bg-primary px-5 pb-2.5 pt-3 text-center text-sm font-medium uppercase leading-normal text-white shadow-[0_4px_9px_-4px_#3b71ca] transition duration-150 ease-in-out hover:bg-primary-600 hover:shadow-[0_8px_9px_-4px_rgba(59,113,202,0.3),0_4px_18px_0_rgba(59,113,202,0.2)] focus:bg-primary-600 focus:shadow-[0_8px_9px_-4px_rgba(59,113,202,0.3),0_4px_18px_0_rgba(59,113,202,0.2)] focus:outline-none focus:ring-0 active:bg-primary-700 active:shadow-[0_8px_9px_-4px_rgba(59,113,202,0.3),0_4px_18px_0_rgba(59,113,202,0.2)] dark:shadow-[0_4px_9px_-4px_rgba(59,113,202,0.5)] dark:hover:shadow-[0_8px_9px_-4px_rgba(59,113,202,0.2),0_4px_18px_0_rgba(59,113,202,0.1)] dark:focus:shadow-[0_8px_9px_-4px_rgba(59,113,202,0.2),0_4px_18px_0_rgba(59,113,202,0.1)] dark:active:shadow-[0_8px_9px_-4px_rgba(59,113,202,0.2),0_4px_18px_0_rgba(59,113,202,0.1)]"
                style={{ backgroundColor: "#3b5998" }}>
                {/* <!-- Facebook --> */}
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  className="mr-2 h-3.5 w-3.5"
                  fill="currentColor"
                  viewBox="0 0 24 24">
                  <path d="M9 8h-3v4h3v12h5v-12h3.642l.358-4h-4v-1.667c0-.955.192-1.333 1.115-1.333h2.885v-5h-3.808c-3.596 0-5.192 1.583-5.192 4.615v3.385z" />
                </svg>
                Sign up Facebook
              </Link>
            </TERipple>
          </div>
          <p className="text-base text-center mt-4">Already have an account?
            <Link to={"/login"} className="text-primary transition duration-150 ease-in-out hover:text-primary-600 focus:text-primary-600 active:text-primary-700 dark:text-primary-400 dark:hover:text-primary-500 dark:focus:text-primary-500 dark:active:text-primary-600 ms-2">Login</Link></p>
        </div >
      </div >
    </>
  )
}

export default Register