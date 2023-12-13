"use client";
import Link from "next/link";
import { useRouter } from "next/navigation";
import { useEffect } from "react";
import UseAuth from "../api/auth/Hook/useAuth";
import { useDeleteVideoMutation } from "../features/api/apiSlice";

export default function Description({ video }) {
  const { user } = UseAuth();
  console.log(video);
  const { title, createdAt, _id, description, email } = video;
  const [deleteVideo, { isSuccess, isLoading, isError }] =
    useDeleteVideoMutation();
  const handleDelete = () => {
    if (_id) deleteVideo(_id);
  };
  const route = useRouter();
  useEffect(() => {
    if (isSuccess) route.push("/");
  }, [isSuccess, route]);

  return (
    <div>
      <h1 className="text-lg font-semibold tracking-tight text-slate-800">
        {title}
      </h1>
      <div className="pb-4 flex items-center space-between border-b gap-4">
        <h2 className="text-sm leading-[1.7142857] text-slate-600 w-full">
          Uploaded on {createdAt}
        </h2>

        <div className="flex gap-6 w-full justify-end">
          <>
            {" "}
            <div className="flex gap-1">
              <div className="shrink-0">
                <Link href={`/editVideo/${_id}`}>
                  <i className="fas fa-edit"></i>
                  {/* <img
                  className="w-5 block"
                  src="../../styles/assets/edit.svg"
                  alt="Edit"
                /> */}
                </Link>
              </div>
              <Link href={`/editVideo/${_id}`}>
                <span className="text-sm leading-[1.7142857] text-slate-600 cursor-pointer">
                  Edit
                </span>
              </Link>
            </div>
          </>

          <></>

          <>
            {" "}
            <div className="flex gap-1 cursor-pointer" onClick={handleDelete}>
              <div className="shrink-0">
                <i className="fas fa-trash"></i>
                {/* <img
      className="w-5 block"
      src="../../styles//assets/delete.svg"
      alt="Delete"
    /> */}
              </div>
              <div className="text-sm leading-[1.7142857] text-slate-600 cursor-pointer">
                Delete
              </div>
            </div>
          </>

          <></>
        </div>
      </div>

      <div className="mt-4 text-sm text-[#334155] dark:text-slate-400">
        {description}
      </div>

      {/* {!isLoading && isError && (
        <Error message="There was an error deleting the video!" />
      )} */}
    </div>
  );
}
