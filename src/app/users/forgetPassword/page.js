"use client";
import initializeFirebase from "@src/app/api/Firebase/Firebase.init";
import { getAuth, sendPasswordResetEmail } from "firebase/auth";
import { useState } from "react";

const ForgetPassword = () => {
  const [email, setEmail] = useState("");
  // console.log(email);
  const [error, setError] = useState(null); // To store password reset errors
  const [success, setSuccess] = useState(false); // To indicate if the reset email was sent successfully
  initializeFirebase();
  const auth = getAuth();
  const handleResetPassword = async (e) => {
    e.preventDefault();
    try {
      await sendPasswordResetEmail(auth, email);
      setSuccess(true);
    } catch (error) {
      setError(error.message);
    }
  };
  return (
    <section className="bg-gray-50 dark:bg-gray-900">
      <div className="flex flex-col items-center justify-center px-6 py-8 mx-auto md:h-screen lg:py-0">
        <div className="w-full bg-white rounded-lg shadow dark:border md:mt-0 sm:max-w-md xl:p-0 dark:bg-gray-800 dark:border-gray-700">
          <div className="p-6 space-y-4 md:space-y-6 sm:p-8">
            <h1 className="text-xl font-bold leading-tight tracking-tight text-gray-900 md:text-2xl dark:text-white">
              Enter your account
            </h1>
            <form className="space-y-4 md:space-y-6" action="#">
              <div>
                <label
                  for="email"
                  className="block mb-2 text-sm font-medium text-gray-900 dark:text-white"
                >
                  Your email
                </label>
                <input
                  type="email"
                  placeholder="Email"
                  value={email}
                  onClick={(e) => setEmail(e.target.value)}
                  name="email"
                  id="email"
                  className="bg-gray-50 border border-gray-300 text-gray-900 sm:text-sm rounded-lg focus:ring-primary-600 focus:border-primary-600 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
                  required=""
                />
              </div>

              <button
                onClick={handleResetPassword}
                type="submit"
                className="bg-indigo-500 w-full text-white bg-primary-600 hover:bg-primary-700 focus:ring-4 focus:outline-none focus:ring-primary-300 font-medium rounded-lg text-sm px-5 py-2.5 text-center dark:bg-primary-600 dark:hover:bg-primary-700 dark:focus:ring-primary-800"
              >
                Reset Password
              </button>
              {error && <p>Error: {error}</p>}
              {success && <p>Password reset email sent successfully.</p>}
            </form>

            {/* ICON */}
          </div>
        </div>
      </div>
    </section>
  );
};

export default ForgetPassword;
