import LikeUnlike from "./LikeUnlike";

const VideoDescription = () => {
  return (
    <div>
      <h1 class="text-lg font-semibold tracking-tight text-slate-800">
        Some video title
      </h1>
      <div class="flex items-center pb-4 border-b space-between">
        <h2 class="text-sm leading-[1.7142857] text-slate-600 w-full">
          Uploaded on 23 Nov 2022
        </h2>

        {/* <!-- like/unlike --> */}
        <LikeUnlike />
      </div>

      <div class="mt-4 text-sm text-[#334155] dark:text-slate-400">
        Some video description here
      </div>
    </div>
  );
};

export default VideoDescription;
