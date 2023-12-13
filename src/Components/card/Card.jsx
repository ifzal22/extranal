import Link from "next/link";

export default function Video({ video }) {
  const { _id, title, image1, image2, image3, body, tags, createdAt } = video;

  // console.log(user?.photoURL);
  return (
    <div className="col-span-12 sm:col-span-2 md:col-span-4 duration-300 hover:scale-[1.03]">
      <div className="w-full flex flex-col">
        <div className="relative">
          <Link href={`/featured/${_id}`}>
            <img src={image1} className=" h-auto" alt={title} />
          </Link>
        </div>

        <div className="flex flex-row mt-2 gap-2">
          <div clas="flex flex-col">
            <Link href={`/featured/${_id}`}>
              <p className="text-slate-900 text-sm font-semibold">{title}</p>
            </Link>

            <p className="text-gray-400 text-xs"> {createdAt}</p>
          </div>
        </div>
      </div>
    </div>
  );
}
