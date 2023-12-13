"use client";
import axios from "axios";
import {
  GoogleAuthProvider,
  createUserWithEmailAndPassword,
  getAuth,
  onAuthStateChanged,
  sendEmailVerification,
  signInWithEmailAndPassword,
  signInWithPopup,
  signOut,
  updateProfile,
} from "firebase/auth";
import { useRouter } from "next/navigation";
import { useEffect, useState } from "react";
import initializeFirebase from "../../Firebase/Firebase.init";
//   initialize
initializeFirebase();

const useFirebase = () => {
  const router = useRouter();
  const [user, setUser] = useState({});
  // console.log(user);

  const [isLoading, setIsLoading] = useState(true);
  const [authError, setAuthError] = useState("");
  const [email, setEmail] = useState("");
  const [error, setError] = useState(null);
  const auth = getAuth();
  const [isVerified, setIsVerified] = useState(false);
  // console.log(isVerified);
  const googleProvider = new GoogleAuthProvider();
  // console.log(auth.currentUser);
  // REGISTER USER
  const registerUser = async (email, password, name) => {
    setIsLoading(true);

    createUserWithEmailAndPassword(auth, email, password, name)
      .then((userCredential) => {
        const user = userCredential.user;
        sendEmailVerification(user);

        alert("Verification email sent. Please verify your email.");
        saveUser(email, name, password, "POST")
          .then(() => {
            // Email verification link sent successfully.
            if (!isVerified) {
              const newUser = { email, displayName: name };
              setUser(newUser);
            }

            setAuthError("Email verification link sent to" + user.email);
          })

          .catch((error) => {
            setAuthError(
              "Email not verified. Please verify your email." + error.message
            );
          });

        // save user to the database

        // send name to firebase after creation
        updateProfile(auth.currentUser, {
          displayName: name,
        })
          .then(() => {})
          .catch((error) => {});
      })

      // END------------------>
      .catch((error) => {
        setAuthError(error.message);
        // console.log(error);
      })
      .finally(() => setIsLoading(false));
  };

  const loginUser = (email, password) => {
    setIsLoading(true);
    signInWithEmailAndPassword(auth, email, password)
      .then((result) => {
        router.push("/");
        setAuthError(result);
      })
      .catch((error) => {
        setAuthError(error.message);
      })
      .finally(() => setIsLoading(false));
  };

  const signInWithGoogle = (location, navigate) => {
    setIsLoading(true);
    signInWithPopup(auth, googleProvider)
      .then((result) => {
        const user = result.user;
        saveUser(user.email, user.displayName, "PUT");
        setAuthError("");
        const destination = location?.state?.from || "/";
        navigate(destination);
      })
      .catch((error) => {
        setAuthError(error.message);
      })
      .finally(() => setIsLoading(false));
  };

  // ----
  useEffect(() => {
    const unsubscribed = onAuthStateChanged(auth, (user) => {
      if (user) {
        setIsVerified(user.emailVerified);
        if (!isVerified) {
          setUser(user);
          // router.push("/");
        }
      } else {
        setUser({});
      }

      setIsLoading(false);
    });
    return () => unsubscribed();
  }, [auth]);

  // Save user

  const saveUser = async (email, name, password, method) => {
    const user = { email, name, password };
    console.log(user);
    try {
      const response = await axios.post(
        "https://blog-api-vercel.onrender.com/api/auth/singup",
        user
      );

      if (response.status === 201) {
        console.log("Blog post created successfully.");
      } else {
        // Handle API error response.
        // setErrorMessage(`API Error: ${response.data.message}`);
        // setSuccessMessage("");
      }
    } catch (error) {
      console.log(error);
      // Handle network or other errors.
      // (`Network Error: ${error.message}`);
    }
  };

  //
  const logout = () => {
    setIsLoading(true);
    signOut(auth)
      .then(() => {
        reload();
        // Sign-out successful.
      })
      .catch((error) => {
        // An error happened.
      })
      .finally(() => setIsLoading(false));

    // observer user state
  };

  return {
    user,

    isLoading,
    authError,
    registerUser,
    loginUser,
    signInWithGoogle,
    logout,
    isVerified,
  };
};
export default useFirebase;
