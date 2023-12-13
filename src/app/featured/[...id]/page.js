"use client";

import Menu from "@src/Components/Menu/Menu";
import DescriptionLoader from "@src/Components/ui/loaders/DescriptionLoader";
import PlayerLoader from "@src/Components/ui/loaders/PlayerLoader";
import RelatedVideoLoader from "@src/Components/ui/loaders/RelatedVideoLoader";
import { useGetBlogSingleQuery } from "@src/app/features/api/apiSlice";
import Description from "../Featured";
import Image from "../image";

export default function Video({ params }) {
  const videoId = params.id;

  const { data: video, isLoading, isError } = useGetBlogSingleQuery(videoId);
  console.log(video);
  let content = null;
  if (isLoading) {
    content = (
      <>
        <PlayerLoader />
        <DescriptionLoader />
      </>
    );
  }

  if (!isLoading && isError) {
    content = <Error message="There was an error!" />;
  }

  if (!isLoading && !isError && video?._id) {
    content = (
      <>
        <Image video={video}></Image>
        <Description video={video}></Description>
      </>
    );
  }

  return (
    <section className="pt-6 pb-20 min-h-[calc(100vh_-_157px)]">
      <div className="mx-auto max-w-7xl px-2 pb-20 min-h-[400px]">
        <div className="grid grid-cols-3 gap-2 lg:gap-8">
          <div className="col-span-full w-full space-y-8 lg:col-span-2">
            {content}
          </div>

          {video?._id ? (
            <Menu id={video?._id} title={video?.title} />
          ) : isLoading ? (
            <>
              <RelatedVideoLoader />
              <RelatedVideoLoader />
              <RelatedVideoLoader />
            </>
          ) : (
            <Error message="There was an error!" />
          )}
        </div>
      </div>
    </section>
  );
}
