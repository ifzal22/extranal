"use client";
import Error from "@src/Components/ui/Error";

import TextArea from "@src/Components/ui/TextArea";
import TextInput from "@src/Components/ui/TextInput";
import { useState } from "react";
import Success from "../../Components/ui/Success";
import { useEditVideoMutation } from "../features/api/apiSlice";

export default function Form({ video }) {
  const {
    _id,
    title: initialTitle,

    description: initialDescription,
    url: initialLink,
    thumbnail: initialThumbnail,
    createdAt: initialDate,
    duration: initialDuration,
    views: initialViews,
  } = video;

  const [editVideo, { isLoading, isError, isSuccess }] = useEditVideoMutation();

  const [title, setTitle] = useState(initialTitle);

  const [description, setDescription] = useState(initialDescription);
  const [url, setLink] = useState(initialLink);
  const [thumbnail, setThumbnail] = useState(initialThumbnail);
  const [date, setDate] = useState(initialDate);
  const [duration, setDuration] = useState(initialDuration);
  const [views, setViews] = useState(initialViews);

  const handleSubmit = (e) => {
    console.log(e);
    e.preventDefault();
    editVideo({
      _id,
      data: {
        title,
        description,

        url,
        thumbnail,
        date,
        duration,
        views,
      },
    });
  };

  return (
    <form onSubmit={handleSubmit} method="POST">
      <div className="shadow overflow-hidden sm:rounded-md">
        <div className="px-4 py-5 bg-white sm:p-6">
          <div className="grid grid-cols-6 gap-6">
            <div className="col-span-6 sm:col-span-3">
              <TextInput
                title="Video title"
                value={title}
                onChange={(e) => setTitle(e.target.value)}
              />
            </div>

            <div className="col-span-6">
              <TextArea
                title="Description"
                value={description}
                onChange={(e) => setDescription(e.target.value)}
              />
            </div>

            <div className="col-span-6">
              <TextInput
                title="YouTube Video link"
                value={video?.url}
                onChange={(e) => setLink(e.target.value)}
              />
            </div>

            <div className="col-span-6">
              <TextInput
                title="Thumbnail link"
                value={thumbnail}
                onChange={(e) => setThumbnail(e.target.value)}
              />
            </div>

            <div className="col-span-6 sm:col-span-6 lg:col-span-2">
              <TextInput
                title="Upload Date"
                value={video?.createdAt}
                onChange={(e) => setDate(e.target.value)}
              />
            </div>

            <div className="col-span-6 sm:col-span-3 lg:col-span-2">
              <TextInput
                title="Video Duration"
                value={duration}
                onChange={(e) => setDuration(e.target.value)}
              />
            </div>

            <div className="col-span-6 sm:col-span-3 lg:col-span-2">
              <TextInput
                title="Video no of views"
                value={views}
                onChange={(e) => setViews(e.target.value)}
              />
            </div>
          </div>
        </div>
        <div className="px-4 py-3 bg-gray-50 text-right sm:px-6">
          <button
            disabled={isLoading}
            type="submit"
            className="inline-flex justify-center py-2 px-4 border border-transparent shadow-sm text-sm font-medium rounded-md text-white bg-indigo-600 hover:bg-indigo-700 focus:outline-none focus:ring-0 focus:ring-offset-0 focus:ring-indigo-500"
          >
            Save
          </button>
        </div>
        {isSuccess && <Success message="Video was edited successfully" />}
        {isError && <Error message="There was an error editing video!" />}
      </div>
    </form>
  );
}
