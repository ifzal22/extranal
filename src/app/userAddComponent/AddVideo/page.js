"use client";
import UseAuth from "@src/app/api/auth/Hook/useAuth";
import axios from "axios";
import Link from "next/link";
import { useState } from "react";
import { Controller, useFieldArray, useForm } from "react-hook-form";

const addVideo = () => {
  const { handleSubmit, control, reset } = useForm();
  const { fields, append, remove } = useFieldArray({
    control,
    name: "tags",
  });
  const [successMessage, setSuccessMessage] = useState("");
  const [errorMessage, setErrorMessage] = useState("");
  const { user } = UseAuth();
  const email = user?.email;
  console.log(user);
  const onSubmit = async (data) => {
    console.log(data);

    try {
      const response = await axios.post(
        "https://blog-api-vercel.onrender.com/api/videos/",
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
              Add Your{" "}
              <span className="orange_gradient text-center">Blog </span>
              Video
            </span>
          </Link>
        </div>

        {successMessage && (
          <div className="success-message">{successMessage}</div>
        )}
        {errorMessage && <div className="error-message">{errorMessage}</div>}

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
            Title:
          </label>
          <Controller
            name="title"
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
            Video url:
          </label>
          <Controller
            name="url"
            control={control}
            render={({ field }) => (
              <input
                type="url"
                id="large-input"
                className="block w-full p-2.5 text-gray-900 border border-gray-300 rounded-lg bg-gray-50 sm:text-md focus:ring-blue-500 focus:border-blue-500 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
                {...field}
                required
              />
            )}
          />
          <label className="block text-sm font-medium text-gray-700">
            Thumbnail url:
          </label>
          <Controller
            name="thumbnail"
            control={control}
            render={({ field }) => (
              <input
                type="url"
                id="large-input"
                className="block w-full p-2.5 text-gray-900 border border-gray-300 rounded-lg bg-gray-50 sm:text-md focus:ring-blue-500 focus:border-blue-500 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
                {...field}
                required
              />
            )}
          />
          <div className="mb-6">
            <label
              for="email"
              className="block mb-2 text-sm font-medium text-gray-900 dark:text-white"
            >
              Your email
            </label>

            <Controller
              name="email"
              control={control}
              value={user?.email}
              render={({ field }) => (
                <input
                  type="email"
                  name="email"
                  value={email}
                  required
                  {...field}
                  placeholder={`${user?.email}`}
                />
              )}
            />
          </div>
          <div style={{ display: "flex" }}>
            <div className="mb-6 w-52">
              <label
                for="views"
                className="block mb-2 text-sm font-medium text-gray-900 dark:text-white"
              >
                Your View
              </label>

              <Controller
                name="views"
                control={control}
                render={({ field }) => (
                  <input
                    name="views"
                    type="text"
                    id="large-input"
                    className="block w-full p-2.5 text-gray-900 border border-gray-300 rounded-lg bg-gray-50 sm:text-md focus:ring-blue-500 focus:border-blue-500 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
                    {...field}
                    required
                  />
                )}
              />
            </div>
            <div className="mb-6 w-52">
              <label
                for="duration"
                className="block mb-2 text-sm font-medium text-gray-900 dark:text-white"
              >
                Your Duration
              </label>
              <Controller
                name="duration"
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
            </div>
          </div>

          {/*  */}
          <label
            for="message"
            className="block mb-2 text-sm font-medium text-gray-900 dark:text-white"
          >
            Your description
          </label>
          <Controller
            name="description"
            control={control}
            render={({ field }) => (
              <textarea
                type="text"
                className="block p-2.5 w-full text-sm text-gray-900 bg-gray-50 rounded-lg border border-gray-300 focus:ring-blue-500 focus:border-blue-500 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
                placeholder="Leave a comment..."
                {...field}
              />
            )}
          />

          {/*  */}
          <div>
            <label className="block text-sm font-medium text-gray-700 ">
              Tags:
            </label>

            <div style={{ display: "" }}>
              {" "}
              {fields.map((field, index) => (
                <div key={field.id} style={{ display: "flex" }}>
                  <Controller
                    name={`tags[${index}]`}
                    control={control}
                    render={({ field }) => (
                      <input
                        style={{ width: "10%" }}
                        className=" block w-full p-2.5 text-gray-900 border border-gray-300 rounded-lg bg-gray-50 sm:text-md focus:ring-blue-500 focus:border-blue-500 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
                        {...field}
                      />
                    )}
                  />
                  <button type="button" onClick={() => remove(index)}>
                    <i className="fas fa-times"></i>
                  </button>
                </div>
              ))}
            </div>
            <button
              type="button"
              onClick={() => append("")}
              className="bg-gray-300 hover:bg-gray-400 text-gray-800 font-bold py-2 px-4 rounded inline-flex items-center"
            >
              <i className="fas fa-plus"></i>
              <span>Add</span>
            </button>
          </div>
          <div style={{ textAlign: "center" }}>
            {" "}
            <button
              type="submit"
              className="bg-blue-500 hover:bg-blue-400 text-white font-bold py-2 px-4 border-b-4 border-blue-700 hover:border-blue-500 rounded"
            >
              Post Your Video
            </button>
          </div>
        </form>
      </div>
    </div>
  );
};

export default addVideo;
