export default function Player({ video }) {
  return (
    <iframe
      width="100%"
      className="aspect-video"
      src={video.url}
      title={video?.title}
      frameBorder=""
      allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
      allowFullscreen
    ></iframe>
  );
}
