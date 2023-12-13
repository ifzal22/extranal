"use client";
import Error from "@src/Components/ui/Error";
import VideoLoader from "@src/Components/ui/loaders/VideoLoader";
import { useGetVideosQuery } from "../features/api/apiSlice";
import VideoGridItem from "./VideoGridItem";

export default function Videos() {
  const { data: videos, isLoading, isError } = useGetVideosQuery();
  console.log(videos?.post);
  // decide what to render
  let content = null;

  if (isLoading) {
    content = (
      <>
        <VideoLoader />
        <VideoLoader />
        <VideoLoader />
        <VideoLoader />
      </>
    );
  }

  if (!isLoading && isError) {
    content = <Error message="There was an error" />;
  }

  if (!isLoading && !isError && videos?.post?.length === 40) {
    content = <Error message="No videos found!" />;
  }

  if (!isLoading && !isError && videos?.post?.length > 0) {
    content = videos?.post.map((video) => (
      <VideoGridItem key={video._id} video={video} />
    ));
  }

  return (
    <section className="pt-12">
      <section className="pt-12">
        <div className="grid grid-cols-12 gap-4 max-w-7xl mx-auto px-5 lg:px-0 min-h-[300px]">
          {content}
        </div>
      </section>
    </section>
  );
}
