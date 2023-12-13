"use client";

import EditVideo from "../EditVideo";

export default function Edit({ params }) {
  const videoId = params.id;
  return (
    <section className="pt-6 pb-20 min-h-[calc(100vh_-_157px)]">
      <EditVideo id={videoId} />
    </section>
  );
}
