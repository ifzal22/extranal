import UseAuth from "@src/app/api/auth/Hook/useAuth";
import Link from "next/link";

export default function RelatedVideoList({ video }) {
  const { _id, title, duration, views, createdAt, thumbnail } = video;
  const { user } = UseAuth();
  return (
    <div className="w-full flex flex-row gap-2 mb-4">
      <div className="relative w-[168px] h-[94px] flex-none duration-300 hover:scale-[1.03]">
        <Link href={`/videoItem/${_id}`}>
          <img src={thumbnail} className="object-cover" alt={title} />
        </Link>
        <p className="absolute right-2 bottom-2 bg-gray-900 text-gray-100 text-xs px-1 py">
          {duration}
        </p>
      </div>

      <div className="flex flex-col w-full">
        <Link href={`/videos/${_id}`}>
          <p className="text-slate-900 text-sm font-semibold">{title}</p>
        </Link>
        <span className="text-gray-400 text-xs mt-2 hover:text-gray-600">
          {user?.name}
        </span>
        <p className="text-gray-400 text-xs mt-1">
          {views} views . {createdAt}
        </p>
      </div>
    </div>
  );
}
