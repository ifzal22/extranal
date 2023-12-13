"use client";
import axios from "axios";
import Link from "next/link";
import { useState } from "react";
import { Controller, useForm } from "react-hook-form";

const AddTag = () => {
  const { handleSubmit, control, reset } = useForm();

  const [successMessage, setSuccessMessage] = useState("");
  const [errorMessage, setErrorMessage] = useState("");

  const onSubmit = async (data) => {
    console.log(data);

    try {
      const response = await axios.post(
        "https://blog-api-vercel.onrender.com/api/tags",
        data
      );

      if (response.status === 201) {
        reset();
        setSuccessMessage("Blog post created successfully.");
        setErrorMessage("");
      } else {
        // Handle API error response.
        setErrorMessage(`API Error: ${response.data.message}`);
        setSuccessMessage("");
      }
    } catch (error) {
      // Handle network or other errors.
      setErrorMessage(`Network Error: ${error.message}`);
      setSuccessMessage("");
    }
  };

  return (
    <div>
      <div style={{ background: "#ddd", margin: "0px", padding: "50px" }}>
        <div style={{ textAlign: "center" }}>
          {" "}
          <Link
            href="/"
            className="flex items-center "
            style={{ justifyContent: "center" }}
          >
            <span className="self-center text-2xl font-semibold whitespace-nowrap dark:text-white">
              Add Your <span className="orange_gradient text-center">Tag </span>
              Video
            </span>
          </Link>
        </div>

        {successMessage && (
          <div className="success-message text-red-600 text-center">
            {successMessage}
          </div>
        )}
        {errorMessage && (
          <div className="error-message text-center">{errorMessage}</div>
        )}

        <form
          onSubmit={handleSubmit(onSubmit)}
          style={{ width: "80%", margin: "auto" }}
        >
          {/* title,
      email,
      tags,
      description,
      url,
      views,
      duration,
      thumbnail, */}

          <label className="block text-sm font-medium text-gray-700">
            Name:
          </label>
          <Controller
            name="name"
            control={control}
            render={({ field }) => (
              <input
                type="text"
                id="large-input"
                className="block w-full p-2.5 text-gray-900 border border-gray-300 rounded-lg bg-gray-50 sm:text-md focus:ring-blue-500 focus:border-blue-500 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
                {...field}
                required
              />
            )}
          />
          <label className="block text-sm font-medium text-gray-700">
            image url:
          </label>
          <Controller
            name="image"
            control={control}
            render={({ field }) => (
              <input
                type="text"
                id="large-input"
                className="block w-full p-2.5 text-gray-900 border border-gray-300 rounded-lg bg-gray-50 sm:text-md focus:ring-blue-500 focus:border-blue-500 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
                {...field}
                required
              />
            )}
          />
          {/*  */}

          <div style={{ textAlign: "center" }}>
            {" "}
            <button
              type="submit"
              className="bg-blue-500 hover:bg-blue-400 text-white font-bold py-2 px-4 border-b-4 border-blue-700 hover:border-blue-500 rounded"
            >
              Post Your Tag
            </button>
          </div>
        </form>
      </div>
    </div>
  );
};

export default AddTag;
