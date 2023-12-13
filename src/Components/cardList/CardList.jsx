"use client";

import { useGetBlogQuery } from "@src/app/features/api/apiSlice";
import Card from "../card/Card";
import Error from "../ui/Error";
import VideoLoader from "../ui/loaders/VideoLoader";

export default function CardList() {
  const { data: videos, isLoading, isError } = useGetBlogQuery();
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
      <Card key={video._id} video={video} />
    ));
  }

  return (
    <section className="pt-12">
      <h1 className="head_text text-center">
        {/* <br className="max-md:hidden" /> */}
        <span className="orange_gradient text-center">Blog'S</span>
      </h1>
      <section className="pt-12">
        <div className="grid grid-cols-12 gap-4 max-w-7xl mx-auto px-5 lg:px-0 min-h-[300px]">
          {content}
        </div>
      </section>
    </section>
  );
}
