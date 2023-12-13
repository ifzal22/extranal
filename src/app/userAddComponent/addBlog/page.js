"use client";
import axios from "axios";
// CreateBlogForm.js
import Link from "next/link";
import { useState } from "react";
import { Controller, useFieldArray, useForm } from "react-hook-form";

const CreateBlogForm = () => {
  const { handleSubmit, register, control, reset } = useForm();
  const { fields, append, remove } = useFieldArray({
    control,
    name: "tags",
  });
  const [successMessage, setSuccessMessage] = useState("");
  const [errorMessage, setErrorMessage] = useState("");
  const onSubmit = async (data) => {
    console.log(data);
    try {
      // const formData = new FormData();
      // formData.append("title", data.title);
      // formData.append("body", data.body);
      // formData.append("image1", data.image1);
      // formData.append("image2", data.image2);
      // formData.append("image3", data.image3);
      // console.log(formData);
      const response = await axios.post(
        "https://blog-api-vercel.onrender.com/api/blog/",
        data
      );
      if (response.status === 201) {
        // reset();
        setSuccessMessage("Blog post created successfully.");
        setErrorMessage("");
      } else {
        // Handle API error response.
        setErrorMessage(`API Error: ${response.data.message}`);
        setSuccessMessage("");
      }
      // Handle success, redirect or show a success message
    } catch (error) {
      // Handle error, show an error message
      setErrorMessage(`Network Error: ${error.message}`);
      setSuccessMessage("");
    }
  };

  return (
    <section className="bg-gray-50 dark:bg-gray-900">
      <div style={{ textAlign: "center" }}>
        {" "}
        <Link
          href="/"
          className="flex items-center "
          style={{ justifyContent: "center" }}
        >
          <span className="self-center text-2xl font-semibold whitespace-nowrap dark:text-white">
            Add Your{" "}
            <span className="orange_gradient text-center">YouTube </span>
            Video
          </span>
        </Link>
      </div>{" "}
      {successMessage && (
        <div className="success-message orange_gradient ">{successMessage}</div>
      )}
      {errorMessage && (
        <div className="error-message orange_gradient ">{errorMessage}</div>
      )}
      <div className="flex flex-col items-center justify-center px-6 py-8 mx-auto md:h-screen lg:py-0">
        <div className="w-full bg-white rounded-lg shadow dark:border md:mt-0 sm:max-w-md xl:p-0 dark:bg-gray-800 dark:border-gray-700">
          <form
            onSubmit={handleSubmit(onSubmit)}
            className="space-y-4 md:space-y-6 m-3"
          >
            <div>
              <label className="block mb-2 text-sm font-medium text-gray-900 dark:text-white">
                Title:
              </label>
              <input
                {...register("title")}
                type="text"
                className="bg-gray-50 border border-gray-300 text-gray-900 sm:text-sm rounded-lg focus:ring-primary-600 focus:border-primary-600 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
              />
            </div>
            <div>
              <label className="block mb-2 text-sm font-medium text-gray-900 dark:text-white">
                Body:
              </label>
              <textarea
                {...register("body")}
                className="bg-gray-50 border border-gray-300 text-gray-900 sm:text-sm rounded-lg focus:ring-primary-600 focus:border-primary-600 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
              />
            </div>
            <div>
              <label className="block mb-2 text-sm font-medium text-gray-900 dark:text-white">
                Image:1
              </label>
              <input
                {...register("image1")}
                type="url"
                className="bg-gray-50 border border-gray-300 text-gray-900 sm:text-sm rounded-lg focus:ring-primary-600 focus:border-primary-600 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
              />
            </div>
            <div>
              <label className="block mb-2 text-sm font-medium text-gray-900 dark:text-white">
                Image:2
              </label>
              <input
                {...register("image2")}
                type="url"
                className="bg-gray-50 border border-gray-300 text-gray-900 sm:text-sm rounded-lg focus:ring-primary-600 focus:border-primary-600 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
              />
            </div>
            <div>
              <label className="block mb-2 text-sm font-medium text-gray-900 dark:text-white">
                Image:3
              </label>
              <input
                {...register("image3")}
                type="url"
                className="bg-gray-50 border border-gray-300 text-gray-900 sm:text-sm rounded-lg focus:ring-primary-600 focus:border-primary-600 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
              />
            </div>
            <div>
              <label className="block text-sm font-medium text-gray-700 ">
                Tags:
              </label>

              <div style={{ display: "" }}>
                {" "}
                {fields.map((field, index) => (
                  <div
                    key={field.id}
                    style={{ display: "flex", textAlign: "center" }}
                  >
                    <Controller
                      name={`tags[${index}]`}
                      control={control}
                      render={({ field }) => (
                        <input
                          style={{ width: "50%" }}
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

            <button
              className="bg-indigo-500 w-full text-white bg-primary-600 hover:bg-primary-700 focus:ring-4 focus:outline-none focus:ring-primary-300 font-medium rounded-lg text-sm px-5 py-2.5 text-center dark:bg-primary-600 dark:hover:bg-primary-700 dark:focus:ring-primary-800"
              type="submit"
            >
              Create Blog
            </button>
          </form>
        </div>
      </div>
    </section>
  );
};

export default CreateBlogForm;
