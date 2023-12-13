"use client";
import RelatedVideoLoader from "@src/Components/ui/loaders/RelatedVideoLoader";
import { useGetRelatedVideosQuery } from "@src/app/features/api/apiSlice";
import RelatedVideoListItem from "./RelatedVideoListItem";

export default function RelatedVideos({ id, title }) {
  const {
    data: relatedVideos,
    isLoading,
    isError,
  } = useGetRelatedVideosQuery({ id, title });
  console.log(id, title);

  // console.log(relatedVideos?.post);
  // console.log(relatedVideos);
  // console.log(id);
  let content = null;

  if (isLoading) {
    content = (
      <>
        <RelatedVideoLoader />
        <RelatedVideoLoader />
        <RelatedVideoLoader />
      </>
    );
  }

  if (!isLoading && isError) {
    content = <Error message="There was an error!" />;
  }

  if (!isLoading && !isError && relatedVideos?.post?.length === 0) {
    content = <Error message="No related videos found!" />;
  }

  if (!isLoading && !isError && relatedVideos?.post?.length > 0) {
    content = relatedVideos?.post?.map(
      (video) => (
        console.log(video),
        (<RelatedVideoListItem key={video._id} video={video} />)
      )
    );
  }

  return (
    <div className="col-span-full lg:col-auto max-h-[570px] overflow-y-auto">
      {content}
    </div>
  );
}
