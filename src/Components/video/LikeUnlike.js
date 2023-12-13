export default function LikeUnlike({ unlikes, likes }) {
  return (
    <div className="flex gap-10 w-48">
      <div className="flex gap-1">
        <div className="shrink-0">
          <i className="fas fa-thumbs-up w-5 block "></i>
        </div>
        <div className="text-sm leading-[1.7142857] text-slate-600">
          {likes}K
        </div>
      </div>
      <div className="flex gap-1">
        <div className="shrink-0">
          <i className="w-5 block fas fa-thumbs-down"></i>
        </div>
        <div className="text-sm leading-[1.7142857] text-slate-600">
          {unlikes}K
        </div>
      </div>
    </div>
  );
}
